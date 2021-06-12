export default {
  data() {
    return {
      content: null,
      rating: null
    }
  },
  methods: {
    saveFile() {
      console.log(this.formatDate('y'), this.today, this.content, this.rating)
    },
    loadFile() {
      console.log([this.formatDate('y'), this.today])
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
