<template>
  <section class="search-form">
    <form @submit.prevent.stop="submit">
      <div class="search-input">
        <input v-model="query" name="query" type="text" placeholder="Type here to search" />
        <button type="submit">Search</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      query: null
    }
  },
  methods: {
    async submit () {
      this.$emit('submit-search', this.query)
    }
  },
  watch: {
    query: {
      handler: function (val) {
        // Clear the results if the search field is cleared
        if (val === '') {
          this.query = null
          this.$emit('clear-results')
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {

}
</style>
