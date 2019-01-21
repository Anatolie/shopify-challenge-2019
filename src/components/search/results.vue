<template>
  <section class="search-results">
    <item v-for="result in results" :key="result.uid" :item="result" />
  </section>
</template>

<script>
/**
 * This component displays a list of search results (using a list of item components).
 */

import item from './item'

export default {
  components: {
    item
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-results {
  margin-top: 16px;
}
</style>
