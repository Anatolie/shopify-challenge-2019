<template>
  <div>
    <h1>Toronto Waste Lookup</h1>
    <search-form />
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
  }
}
</script>

<style lang="scss" scoped>

</style>
