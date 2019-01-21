<template>
  <div>
    <h1>Toronto Waste Lookup</h1>
    <search-form
      v-on:submit-search="submitSearch"
      v-on:clear-results="clearResults" />
    <search-results />
    {{ results }}
  </div>
</template>

<script>
import wasteAPI from '@/api/waste'
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
    async submitSearch (query) {
      if (query !== null) {
        this.results = []
        await wasteAPI.getList({
          success: (response) => {
            this.results = response
          },
          fail: (errors) => {
            console.error('Failed to fetch API results!', errors)
          }
        })
      }
    },
    clearResults () {
      this.results = []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
