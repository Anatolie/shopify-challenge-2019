<template>
  <div>
    <div class="title">
      <h1>Toronto Waste Lookup</h1>
    </div>
    <div class="body">
      <search-form
        v-on:submit-search="submitSearch"
        v-on:clear-results="clearResults" />
      <search-results :results="results" />
    </div>
    <search-favourites />
  </div>
</template>

<script>
import he from 'he'
import wasteAPI from '@/api/waste'
import searchForm from './search/form'
import searchResults from './search/results'
import searchFavourites from './search/favourites'

export default {
  name: 'shopify-challenge-2019',
  components: {
    searchForm,
    searchResults,
    searchFavourites
  },
  data () {
    return {
      results: []
    }
  },
  methods: {
    async submitSearch (query) {
      if (query !== null) {
        await wasteAPI.getList({
          success: (response) => {
            let items = []
            let result = []

            this.results = []

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
.title {
  width: 100%;
  padding: 36px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(-90deg, #1D5B92 0%, #24975E 100%);
}
.body {
  padding: 16px;
}
</style>
