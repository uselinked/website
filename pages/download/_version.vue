<template>
  <content-wrapper>
    {{ $route.params.version }}
    <pre>
      {{ version.assets }}
    </pre>
  </content-wrapper>
</template>

<script>
export default {
  name: 'DownloadPage',
  async asyncData({ params, redirect }) {
    const version = await fetch(
      'https://api.github.com/repos/lostdesign/linked/releases/tags/v' + params.version
    ).then((res) => res.json())

    return {version}
  }
}
</script>
