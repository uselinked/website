<template>
  <content-wrapper class="pt-16">
    <page-heading title="About" />
    <p class="mt-4 text-lg text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ratione, tempore. Accusantium adipisci aut beatae cumque deserunt esse et iusto laborum omnis voluptates. Animi aperiam at consequatur consequuntur cumque enim eos error et eum, eveniet exercitationem harum id illo laborum minus nihil non praesentium provident quasi quibusdam, quos rem rerum saepe sed ullam voluptate voluptatibus voluptatum. Ab accusamus ad adipisci aliquid beatae consequuntur dignissimos distinctio, doloribus exercitationem itaque libero magnam, nulla numquam optio quia quisquam, suscipit veritatis voluptates? Accusantium asperiores at culpa, ea eligendi ex exercitationem illum ipsa magni minus modi nemo nobis non nulla omnis, praesentium totam veniam voluptas!
    </p>
    <div class="space-y-4 sm:space-y-8 mt-12">
      <div class="space-y-5 sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">The lovely contributors</h2>
        <p class="text-xl text-gray-500">Thanks to the awesome people that have contributed to linked already.</p>
      </div>
      <ul role="list" class="flex flex-wrap">
        <template v-for="(contributor, index) in result">
          <a :href="contributor.html_url" ref="norel noopener">
            <li
              v-if="contributor.login !== 'lostdesign'"
              class="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4"
            >
              <img class="mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24" :src="contributor.avatar_url" :alt="`${contributor.login} profile image`" />
              <div class="space-y-4">
                <div class="text-center font-medium lg:text-sm">
                  <h3 class="text-base font-bold">{{ contributor.login }}</h3>
                  <p class="text-xs text-linked">{{ contributor.contributions }} commits</p>
                </div>
              </div>
            </li>
          </a>
        </template>
      </ul>
    </div>
  </content-wrapper>
</template>

<script>
import {checkRateLimit} from '@/lib/github'
import {marked} from 'marked'
import {DateTime} from 'luxon'

export default {
  // async asyncData() {
  //   let error = null
  //
  //   try {
  //     const response = await fetch('https://api.github.com/repos/lostdesign/linked/contributors')
  //     const isRateLimited = checkRateLimit(response)
  //
  //     if (isRateLimited.error) {
  //       error = isRateLimited
  //       throw new Error(isRateLimited.message)
  //     }
  //
  //     return {
  //       contributors: await response.json(),
  //       error: null
  //     }
  //   } catch (e) {
  //     return {
  //       contributors: null,
  //       error,
  //     }
  //   }
  // }

  async asyncData() {
    return {
      result: [
        {
          "login": "lostdesign",
          "id": 5164617,
          "node_id": "MDQ6VXNlcjUxNjQ2MTc=",
          "avatar_url": "https://avatars.githubusercontent.com/u/5164617?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/lostdesign",
          "html_url": "https://github.com/lostdesign",
          "followers_url": "https://api.github.com/users/lostdesign/followers",
          "following_url": "https://api.github.com/users/lostdesign/following{/other_user}",
          "gists_url": "https://api.github.com/users/lostdesign/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/lostdesign/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/lostdesign/subscriptions",
          "organizations_url": "https://api.github.com/users/lostdesign/orgs",
          "repos_url": "https://api.github.com/users/lostdesign/repos",
          "events_url": "https://api.github.com/users/lostdesign/events{/privacy}",
          "received_events_url": "https://api.github.com/users/lostdesign/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 257
        },
        {
          "login": "dragonDScript",
          "id": 46191980,
          "node_id": "MDQ6VXNlcjQ2MTkxOTgw",
          "avatar_url": "https://avatars.githubusercontent.com/u/46191980?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/dragonDScript",
          "html_url": "https://github.com/dragonDScript",
          "followers_url": "https://api.github.com/users/dragonDScript/followers",
          "following_url": "https://api.github.com/users/dragonDScript/following{/other_user}",
          "gists_url": "https://api.github.com/users/dragonDScript/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/dragonDScript/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/dragonDScript/subscriptions",
          "organizations_url": "https://api.github.com/users/dragonDScript/orgs",
          "repos_url": "https://api.github.com/users/dragonDScript/repos",
          "events_url": "https://api.github.com/users/dragonDScript/events{/privacy}",
          "received_events_url": "https://api.github.com/users/dragonDScript/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 21
        },
        {
          "login": "rama-adi",
          "id": 17980909,
          "node_id": "MDQ6VXNlcjE3OTgwOTA5",
          "avatar_url": "https://avatars.githubusercontent.com/u/17980909?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/rama-adi",
          "html_url": "https://github.com/rama-adi",
          "followers_url": "https://api.github.com/users/rama-adi/followers",
          "following_url": "https://api.github.com/users/rama-adi/following{/other_user}",
          "gists_url": "https://api.github.com/users/rama-adi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/rama-adi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/rama-adi/subscriptions",
          "organizations_url": "https://api.github.com/users/rama-adi/orgs",
          "repos_url": "https://api.github.com/users/rama-adi/repos",
          "events_url": "https://api.github.com/users/rama-adi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/rama-adi/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 7
        },
        {
          "login": "ViNoS-ab",
          "id": 61888585,
          "node_id": "MDQ6VXNlcjYxODg4NTg1",
          "avatar_url": "https://avatars.githubusercontent.com/u/61888585?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ViNoS-ab",
          "html_url": "https://github.com/ViNoS-ab",
          "followers_url": "https://api.github.com/users/ViNoS-ab/followers",
          "following_url": "https://api.github.com/users/ViNoS-ab/following{/other_user}",
          "gists_url": "https://api.github.com/users/ViNoS-ab/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ViNoS-ab/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ViNoS-ab/subscriptions",
          "organizations_url": "https://api.github.com/users/ViNoS-ab/orgs",
          "repos_url": "https://api.github.com/users/ViNoS-ab/repos",
          "events_url": "https://api.github.com/users/ViNoS-ab/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ViNoS-ab/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 5
        },
        {
          "login": "sh9351",
          "id": 70079686,
          "node_id": "MDQ6VXNlcjcwMDc5Njg2",
          "avatar_url": "https://avatars.githubusercontent.com/u/70079686?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/sh9351",
          "html_url": "https://github.com/sh9351",
          "followers_url": "https://api.github.com/users/sh9351/followers",
          "following_url": "https://api.github.com/users/sh9351/following{/other_user}",
          "gists_url": "https://api.github.com/users/sh9351/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/sh9351/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/sh9351/subscriptions",
          "organizations_url": "https://api.github.com/users/sh9351/orgs",
          "repos_url": "https://api.github.com/users/sh9351/repos",
          "events_url": "https://api.github.com/users/sh9351/events{/privacy}",
          "received_events_url": "https://api.github.com/users/sh9351/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 5
        },
        {
          "login": "JonasPardon",
          "id": 10206461,
          "node_id": "MDQ6VXNlcjEwMjA2NDYx",
          "avatar_url": "https://avatars.githubusercontent.com/u/10206461?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/JonasPardon",
          "html_url": "https://github.com/JonasPardon",
          "followers_url": "https://api.github.com/users/JonasPardon/followers",
          "following_url": "https://api.github.com/users/JonasPardon/following{/other_user}",
          "gists_url": "https://api.github.com/users/JonasPardon/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/JonasPardon/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/JonasPardon/subscriptions",
          "organizations_url": "https://api.github.com/users/JonasPardon/orgs",
          "repos_url": "https://api.github.com/users/JonasPardon/repos",
          "events_url": "https://api.github.com/users/JonasPardon/events{/privacy}",
          "received_events_url": "https://api.github.com/users/JonasPardon/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 4
        },
        {
          "login": "ludovici-philippus",
          "id": 37634205,
          "node_id": "MDQ6VXNlcjM3NjM0MjA1",
          "avatar_url": "https://avatars.githubusercontent.com/u/37634205?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ludovici-philippus",
          "html_url": "https://github.com/ludovici-philippus",
          "followers_url": "https://api.github.com/users/ludovici-philippus/followers",
          "following_url": "https://api.github.com/users/ludovici-philippus/following{/other_user}",
          "gists_url": "https://api.github.com/users/ludovici-philippus/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ludovici-philippus/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ludovici-philippus/subscriptions",
          "organizations_url": "https://api.github.com/users/ludovici-philippus/orgs",
          "repos_url": "https://api.github.com/users/ludovici-philippus/repos",
          "events_url": "https://api.github.com/users/ludovici-philippus/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ludovici-philippus/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 2
        },
        {
          "login": "deusnovus",
          "id": 32219080,
          "node_id": "MDQ6VXNlcjMyMjE5MDgw",
          "avatar_url": "https://avatars.githubusercontent.com/u/32219080?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/deusnovus",
          "html_url": "https://github.com/deusnovus",
          "followers_url": "https://api.github.com/users/deusnovus/followers",
          "following_url": "https://api.github.com/users/deusnovus/following{/other_user}",
          "gists_url": "https://api.github.com/users/deusnovus/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/deusnovus/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/deusnovus/subscriptions",
          "organizations_url": "https://api.github.com/users/deusnovus/orgs",
          "repos_url": "https://api.github.com/users/deusnovus/repos",
          "events_url": "https://api.github.com/users/deusnovus/events{/privacy}",
          "received_events_url": "https://api.github.com/users/deusnovus/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 2
        },
        {
          "login": "shivanshsinghx365",
          "id": 77519009,
          "node_id": "MDQ6VXNlcjc3NTE5MDA5",
          "avatar_url": "https://avatars.githubusercontent.com/u/77519009?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/shivanshsinghx365",
          "html_url": "https://github.com/shivanshsinghx365",
          "followers_url": "https://api.github.com/users/shivanshsinghx365/followers",
          "following_url": "https://api.github.com/users/shivanshsinghx365/following{/other_user}",
          "gists_url": "https://api.github.com/users/shivanshsinghx365/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/shivanshsinghx365/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/shivanshsinghx365/subscriptions",
          "organizations_url": "https://api.github.com/users/shivanshsinghx365/orgs",
          "repos_url": "https://api.github.com/users/shivanshsinghx365/repos",
          "events_url": "https://api.github.com/users/shivanshsinghx365/events{/privacy}",
          "received_events_url": "https://api.github.com/users/shivanshsinghx365/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 2
        },
        {
          "login": "taep96",
          "id": 64481039,
          "node_id": "MDQ6VXNlcjY0NDgxMDM5",
          "avatar_url": "https://avatars.githubusercontent.com/u/64481039?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/taep96",
          "html_url": "https://github.com/taep96",
          "followers_url": "https://api.github.com/users/taep96/followers",
          "following_url": "https://api.github.com/users/taep96/following{/other_user}",
          "gists_url": "https://api.github.com/users/taep96/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/taep96/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/taep96/subscriptions",
          "organizations_url": "https://api.github.com/users/taep96/orgs",
          "repos_url": "https://api.github.com/users/taep96/repos",
          "events_url": "https://api.github.com/users/taep96/events{/privacy}",
          "received_events_url": "https://api.github.com/users/taep96/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 2
        },
        {
          "login": "Hakeemmidan",
          "id": 27740273,
          "node_id": "MDQ6VXNlcjI3NzQwMjcz",
          "avatar_url": "https://avatars.githubusercontent.com/u/27740273?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Hakeemmidan",
          "html_url": "https://github.com/Hakeemmidan",
          "followers_url": "https://api.github.com/users/Hakeemmidan/followers",
          "following_url": "https://api.github.com/users/Hakeemmidan/following{/other_user}",
          "gists_url": "https://api.github.com/users/Hakeemmidan/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Hakeemmidan/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Hakeemmidan/subscriptions",
          "organizations_url": "https://api.github.com/users/Hakeemmidan/orgs",
          "repos_url": "https://api.github.com/users/Hakeemmidan/repos",
          "events_url": "https://api.github.com/users/Hakeemmidan/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Hakeemmidan/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "dftd",
          "id": 53878055,
          "node_id": "MDQ6VXNlcjUzODc4MDU1",
          "avatar_url": "https://avatars.githubusercontent.com/u/53878055?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/dftd",
          "html_url": "https://github.com/dftd",
          "followers_url": "https://api.github.com/users/dftd/followers",
          "following_url": "https://api.github.com/users/dftd/following{/other_user}",
          "gists_url": "https://api.github.com/users/dftd/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/dftd/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/dftd/subscriptions",
          "organizations_url": "https://api.github.com/users/dftd/orgs",
          "repos_url": "https://api.github.com/users/dftd/repos",
          "events_url": "https://api.github.com/users/dftd/events{/privacy}",
          "received_events_url": "https://api.github.com/users/dftd/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "fazilaltinel",
          "id": 3510852,
          "node_id": "MDQ6VXNlcjM1MTA4NTI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/3510852?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/fazilaltinel",
          "html_url": "https://github.com/fazilaltinel",
          "followers_url": "https://api.github.com/users/fazilaltinel/followers",
          "following_url": "https://api.github.com/users/fazilaltinel/following{/other_user}",
          "gists_url": "https://api.github.com/users/fazilaltinel/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/fazilaltinel/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/fazilaltinel/subscriptions",
          "organizations_url": "https://api.github.com/users/fazilaltinel/orgs",
          "repos_url": "https://api.github.com/users/fazilaltinel/repos",
          "events_url": "https://api.github.com/users/fazilaltinel/events{/privacy}",
          "received_events_url": "https://api.github.com/users/fazilaltinel/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "gdonisi",
          "id": 82442402,
          "node_id": "MDQ6VXNlcjgyNDQyNDAy",
          "avatar_url": "https://avatars.githubusercontent.com/u/82442402?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/gdonisi",
          "html_url": "https://github.com/gdonisi",
          "followers_url": "https://api.github.com/users/gdonisi/followers",
          "following_url": "https://api.github.com/users/gdonisi/following{/other_user}",
          "gists_url": "https://api.github.com/users/gdonisi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/gdonisi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/gdonisi/subscriptions",
          "organizations_url": "https://api.github.com/users/gdonisi/orgs",
          "repos_url": "https://api.github.com/users/gdonisi/repos",
          "events_url": "https://api.github.com/users/gdonisi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/gdonisi/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "felixguilherme",
          "id": 52865246,
          "node_id": "MDQ6VXNlcjUyODY1MjQ2",
          "avatar_url": "https://avatars.githubusercontent.com/u/52865246?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/felixguilherme",
          "html_url": "https://github.com/felixguilherme",
          "followers_url": "https://api.github.com/users/felixguilherme/followers",
          "following_url": "https://api.github.com/users/felixguilherme/following{/other_user}",
          "gists_url": "https://api.github.com/users/felixguilherme/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/felixguilherme/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/felixguilherme/subscriptions",
          "organizations_url": "https://api.github.com/users/felixguilherme/orgs",
          "repos_url": "https://api.github.com/users/felixguilherme/repos",
          "events_url": "https://api.github.com/users/felixguilherme/events{/privacy}",
          "received_events_url": "https://api.github.com/users/felixguilherme/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "Hammster",
          "id": 1093709,
          "node_id": "MDQ6VXNlcjEwOTM3MDk=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1093709?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Hammster",
          "html_url": "https://github.com/Hammster",
          "followers_url": "https://api.github.com/users/Hammster/followers",
          "following_url": "https://api.github.com/users/Hammster/following{/other_user}",
          "gists_url": "https://api.github.com/users/Hammster/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Hammster/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Hammster/subscriptions",
          "organizations_url": "https://api.github.com/users/Hammster/orgs",
          "repos_url": "https://api.github.com/users/Hammster/repos",
          "events_url": "https://api.github.com/users/Hammster/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Hammster/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "KorbsStudio",
          "id": 51213244,
          "node_id": "MDQ6VXNlcjUxMjEzMjQ0",
          "avatar_url": "https://avatars.githubusercontent.com/u/51213244?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/KorbsStudio",
          "html_url": "https://github.com/KorbsStudio",
          "followers_url": "https://api.github.com/users/KorbsStudio/followers",
          "following_url": "https://api.github.com/users/KorbsStudio/following{/other_user}",
          "gists_url": "https://api.github.com/users/KorbsStudio/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/KorbsStudio/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/KorbsStudio/subscriptions",
          "organizations_url": "https://api.github.com/users/KorbsStudio/orgs",
          "repos_url": "https://api.github.com/users/KorbsStudio/repos",
          "events_url": "https://api.github.com/users/KorbsStudio/events{/privacy}",
          "received_events_url": "https://api.github.com/users/KorbsStudio/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "mwager",
          "id": 999748,
          "node_id": "MDQ6VXNlcjk5OTc0OA==",
          "avatar_url": "https://avatars.githubusercontent.com/u/999748?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mwager",
          "html_url": "https://github.com/mwager",
          "followers_url": "https://api.github.com/users/mwager/followers",
          "following_url": "https://api.github.com/users/mwager/following{/other_user}",
          "gists_url": "https://api.github.com/users/mwager/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mwager/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mwager/subscriptions",
          "organizations_url": "https://api.github.com/users/mwager/orgs",
          "repos_url": "https://api.github.com/users/mwager/repos",
          "events_url": "https://api.github.com/users/mwager/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mwager/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "TymianekPL",
          "id": 70819917,
          "node_id": "MDQ6VXNlcjcwODE5OTE3",
          "avatar_url": "https://avatars.githubusercontent.com/u/70819917?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/TymianekPL",
          "html_url": "https://github.com/TymianekPL",
          "followers_url": "https://api.github.com/users/TymianekPL/followers",
          "following_url": "https://api.github.com/users/TymianekPL/following{/other_user}",
          "gists_url": "https://api.github.com/users/TymianekPL/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/TymianekPL/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/TymianekPL/subscriptions",
          "organizations_url": "https://api.github.com/users/TymianekPL/orgs",
          "repos_url": "https://api.github.com/users/TymianekPL/repos",
          "events_url": "https://api.github.com/users/TymianekPL/events{/privacy}",
          "received_events_url": "https://api.github.com/users/TymianekPL/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "delphiki",
          "id": 303778,
          "node_id": "MDQ6VXNlcjMwMzc3OA==",
          "avatar_url": "https://avatars.githubusercontent.com/u/303778?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/delphiki",
          "html_url": "https://github.com/delphiki",
          "followers_url": "https://api.github.com/users/delphiki/followers",
          "following_url": "https://api.github.com/users/delphiki/following{/other_user}",
          "gists_url": "https://api.github.com/users/delphiki/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/delphiki/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/delphiki/subscriptions",
          "organizations_url": "https://api.github.com/users/delphiki/orgs",
          "repos_url": "https://api.github.com/users/delphiki/repos",
          "events_url": "https://api.github.com/users/delphiki/events{/privacy}",
          "received_events_url": "https://api.github.com/users/delphiki/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        },
        {
          "login": "threeel",
          "id": 680311,
          "node_id": "MDQ6VXNlcjY4MDMxMQ==",
          "avatar_url": "https://avatars.githubusercontent.com/u/680311?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/threeel",
          "html_url": "https://github.com/threeel",
          "followers_url": "https://api.github.com/users/threeel/followers",
          "following_url": "https://api.github.com/users/threeel/following{/other_user}",
          "gists_url": "https://api.github.com/users/threeel/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/threeel/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/threeel/subscriptions",
          "organizations_url": "https://api.github.com/users/threeel/orgs",
          "repos_url": "https://api.github.com/users/threeel/repos",
          "events_url": "https://api.github.com/users/threeel/events{/privacy}",
          "received_events_url": "https://api.github.com/users/threeel/received_events",
          "type": "User",
          "site_admin": false,
          "contributions": 1
        }
      ]
    }
  }
}
</script>
