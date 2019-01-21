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

    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {

}
</style>
