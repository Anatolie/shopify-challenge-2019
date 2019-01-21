<template>
  <section class="search-form">
    <form @submit.prevent.stop="submit">
      <div class="search-input">
        <input v-model="query" name="query" type="text" class="input" placeholder="Type here to search" />
        <button type="submit">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <path d="M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z" class="search-icon"></path>
          </svg>
        </button>
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
      this.$emit('submit-search', this.query)
    }
  },
  watch: {
    query: {
      handler: function (val) {
        // Clear the results if the search field is cleared
        if (val === '') {
          this.query = null
          this.$emit('clear-results')
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;

  input[type="text"] {
    flex: 1;
    margin-right: 16px;
    padding: 14px 8px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    border: 1px solid #aaa;
    border-radius: 3px;
  }
  button {
    padding: 8px 12px;
    color: #fff;
    background: #23995C;
    border-radius: 3px;
    border: 0;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
      fill: #fff;
    }
  }
}
</style>
