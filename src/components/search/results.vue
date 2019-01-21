<template>
  <section class="search-results">
    results: {{ results }}
  </section>
</template>

<script>
export default {
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

}
</style>
