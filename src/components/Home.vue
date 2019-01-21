<template>
  <div>
    <h1>Toronto Waste Lookup</h1>
    <search-form v-on:clear-results="clearResults" />
    <search-results />
  </div>
</template>

<script>
import searchForm from './search/form'
import searchResults from './search/results'

export default {
  name: 'shopify-challenge-2019',
  components: {
    searchForm,
    searchResults
  },
  data () {
    return {
      results: []
    }
  },
  methods: {
    clearResults: function () {
      this.results = []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
