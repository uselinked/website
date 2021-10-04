export default {
  here: 'here',
  privacyPolicy: 'Privacy Policy',
  cta: {
    title: 'Link your thoughts to days.',
    subtitle:
      'Unclutter your mind by writing everything down, each and every day.',
    button: 'Download the app for free',
    demoNotice: 'This is an interactive demo, try it 👆'
  },
  followUs: 'Check {github} meanwhile and follow us on {twitter}.',
  comingSoon: 'We will announce more soon.',
  download: {
    title: 'Ready to dive in?',
    subTitle: 'Download linked for free.'
  },
  editor: {
    week: 'Week',
    demoContent: `
      <h2>Hi, nice to meet you</h2>
      <ul>
        <li><p>this is a demo of the app</p></li>
        <li><p>feel free to edit something here</p></li>
        <li><p>you can <strong>write bold</strong>, <mark>highlight</mark> or write in<em>italics</em></p></li>
      </ul>
      <ul data-type="taskList">
        <li data-checked="false" data-type="taskItem"><p>&nbsp;try checking this box</p></li>
        <li data-checked="false" data-type="taskItem"><p>&nbsp;go to another day</p></li>
      </ul>
      <p></p>
      <p></p>
      <p><em>Want to post cat memes? Feel free to do so.</em></p>
      <img src="data:image/png;base64,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" alt="0" />
      <p></p>
      <p>Let us know what you think of linked! Feel free to DM us anytime on <strong>twitter</strong> or check <strong>github</strong>.</p>
      <p></p>
      <p>(PS: the data is stored inside your browser)</p>
    `
  },
  newsletter: {
    title: 'Stay up to date!',
    description:
      'We will send you E-mails about new versions of linked, tips and tricks as well as occasional generic update E-mails. We will never spam you and not clutter your inbox, promised.',
    email: 'you@mail.com',
    notify: 'Notify me',
    privacy:
      'We care about the protection of your data. Read our {privacyPolicy}'
  },
  discord: {
    title: 'Stay up to date!',
    description:
      'Join the community on discord to get the latest news around linked before anyone else, give feedback about the app and much more.',
    join: 'Become a member 👋'
  },
  feature: {
    title: 'Note taking, but on steroids.',
    subtitle:
      'Leave sticky notes behind and start writing things down per day, as much as you want. linked can be your calendar with a twist, a diary or a place to dump your thoughts into. ',
    editor: {
      title: 'The editor you need',
      description:
        'Want to give your text emphasis? Make it bold, write it in italics, create headings, add lists or todos and much more.'
    },
    theme: {
      title: 'Dark or light side?',
      description:
        'Choose wether you want your linked in dark or light mode. Switch the theme at the top to preview it.'
    },
    keyboard: {
      title: 'Keyboard shortcuts',
      description:
        'Quickly need to navigate? Use your keyboard to jump days or weeks and get back to today anytime.'
    },
    offline: {
      title: 'Offline first',
      description:
        'No need for an internet connection (other than updates) - your data is stored locally.'
    },
    language: {
      title: 'We speak all languages',
      description:
        'Well not just yet, but linked has been translated in 11 languages so far.'
    },
    design: {
      title: 'Minimal design',
      description:
        "linked's minimal design helps you focus on the important stuff, find everything just where you need it."
    },
    search: {
      title: 'Search it all',
      description:
        '🚧: Use the full text search to find what was once written down, lightning fast.'
    },
    link: {
      title: 'Links between days',
      description:
        '🚧: Want to reference a day in the future or past? Quickly jump between connected days.'
    },
    sync: {
      title: 'Sync between the world',
      description:
        '🚧: Sync between all of your devices to always have your notes with you.'
    },
    teams: {
      title: 'You and your friends',
      description:
        '🚧: Work together. Live. Collaborate on notes together with your team, friends or your dog.'
    },
    devices: {
      title: 'Desktop, Mobile and web',
      description:
        '🚧: Use linked on any device you own - maybe even your fridge who knows.'
    },
    more: {
      title: 'And much more...',
      description:
        '🚧: linked is ever progressing, send us your feedback to make linked even better.'
    }
  }
}