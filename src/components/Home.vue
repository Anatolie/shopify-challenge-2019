<template>
  <div>
    <h1>Toronto Waste Lookup</h1>
    <search-form
      v-on:submit-search="submitSearch"
      v-on:clear-results="clearResults" />
    <search-results :results="results" />
  </div>
</template>

<script>
import he from 'he'
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
            let items = []
            let result = []

            response.data.forEach((item, index) => {
              // Assign array index id as unique id
              item.uid = index

              // Sanitize keywords string (remove whitespaces & trailing commas)
              item.keywords = item.keywords.trim().replace(/(^,)|(,$)/g, '')

              items.push(item)
            })

            // Search keywords for search term
            items.forEach(item => {
              // Only push unique items to result array
              if (item.keywords.includes(query) && result.indexOf(item.uid) === -1) {
                result.push(item.uid)
              }
            })

            result.forEach(r => {
              let x = items.filter(result => {
                return result.uid === r
              })[0]

              // Decode body string into usable HTML, v-html wouldn't decode the original string
              x.body = he.decode(x.body)

              this.results.push(x)
            })
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
