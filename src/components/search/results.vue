<template>
  <section class="search-results">
    <article v-for="result in results" :key="result.id" class="result">
      <div class="title">
        <h3>{{ result.title }}</h3>
      </div>
      <div class="body" v-html="result.body" />
    </article>
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
  margin-top: 16px;
}
.result {
  display: flex;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
  .title {
    flex: 1;

    h3 {
      font-weight: normal;
    }
  }
  .body {
    flex: 1;
  }
}
</style>
