export default function () {
  this.nuxt.hook('generate:done', (context) => {
    // TODO add this stuff to .ENV
    const routesToExclude = []

    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter(route => !routesToExclude.includes(route))

    this.nuxt.options.sitemap.routes = [...routes]
  })
}
