export default {
  data() {
    return {
      content: null,
      rating: null
    }
  },
  methods: {
    saveFile() {
      if (process.browser) {
        localStorage.setItem(this.today, this.content)
      }
    },
    loadFile() {
      if (process.browser) {
        this.content = localStorage.getItem(this.today)
      }
    },
    debounce(func, wait) {
      let timeout

      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }
  },
  created() {
    this.loadFile()
  }
}
