import { DateTime } from 'luxon'
const LATEST_RELEASE = 'latest'

export const checkRateLimit = (response) => {
  const usedRequests = Number(response.headers.get('x-ratelimit-used'))

  if (!response.ok && usedRequests === 60) {
    const reset = DateTime
      .fromSeconds(Number(response.headers.get('x-ratelimit-reset')))
      .toRelative({ locale: this.$i18n.locale })

    return {
      error: true,
      reset,
      message: `You've exceeded the request count for the Github API, please retry ${reset}.`
    }
  }

  return {
    error: false
  }
}

const getApiTag = (version) => {
  return version === LATEST_RELEASE ? LATEST_RELEASE : `tags/v${version}`
}

export const fetchRelease = async (version = LATEST_RELEASE) => {
  let error = null
  const fallbackUrl = `https://github.com/lostdesign/linked/releases/${getApiTag(version)}`
  const API_URL = `https://api.github.com/repos/lostdesign/linked/releases/${getApiTag(version)}`

  try {
    const response = await fetch(API_URL)
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

