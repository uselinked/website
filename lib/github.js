import { DateTime } from 'luxon'
const LATEST_RELEASE = 'latest'

export const checkRateLimit = (response) => {
  const usedRequests = Number(response.headers.get('x-ratelimit-used'))

  if (!response.ok && usedRequests === 60) {
    const resettingIn = DateTime
      .fromSeconds(Number(response.headers.get('x-ratelimit-reset')))
      .toRelative({ locale: 'en-US' })

    return {
      error: true,
      resettingIn,
      message: `You've exceeded the request count for the Github API, please retry ${resettingIn}.`
    }
  }

  return {
    error: false
  }
}

const getApiTag = (version) => {
  return version === LATEST_RELEASE ? LATEST_RELEASE : `tags/v${version}`
}

export const fetchRelease = async (githubToken, version = LATEST_RELEASE) => {
  let error = null
  const fallbackUrl = `https://github.com/lostdesign/linked/releases/${getApiTag(version)}`
  const API_URL = `https://api.github.com/repos/lostdesign/linked/releases/${getApiTag(version)}`

  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: 'Bearer ' + githubToken
      }
    })
    const isRateLimited = checkRateLimit(response)

    if (isRateLimited.error) {
      error = isRateLimited
      throw new Error(isRateLimited.message)
    }

    return {
      release: await response.json(),
      error,
      fallbackUrl
    }
  } catch (e) {
    return {
      release: null,
      error,
      fallbackUrl
    }
  }
}

