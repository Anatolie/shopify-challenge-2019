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
/**
 * This component ties everything together: the search form, results
 * and favourites list.
 */

import he from 'he' // <https://github.com/mathiasbynens/he>
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
    /**
     * Submits an API and searches using the query string provided.
     *
     * @param String query  The query string you're searching for.
     */
    async submitSearch (query) {
      if (query !== null) {
        // Request the data list from the API
        await wasteAPI.getList({
          success: (response) => {
            let items = [] // Array of objects we recieve from the API
            let result = [] // Array of objects we've filtered out as the result

            // Clear results from the previous search query
            this.clearResults()

            // Sanitize data by generating a unique id for each object and remove
            // whitespaces & trailing commas from keywords.
            response.data.forEach((item, index) => {
              item.uid = index
              item.keywords = item.keywords.trim().replace(/(^,)|(,$)/g, '')
              items.push(item)
            })

            // Search keywords in each object for search term
            items.forEach(item => {
              // Only push unique items to result array
              if (item.keywords.includes(query) && result.indexOf(item.uid) === -1) {
                result.push(item.uid)
              }
            })

            // Loop through results and decode HTML bodies
            result.forEach(r => {
              let x = items.filter(result => {
                return result.uid === r
              })[0]

              // Decode body string into usable HTML, v-html wouldn't decode the original string
              // due to the HTML entities used, but the 'he' library did the trick
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
    /**
     * Clears all search results.
     */
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
