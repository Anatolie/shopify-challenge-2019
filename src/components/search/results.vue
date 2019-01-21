<template>
  <section class="search-results">
    <article v-for="result in results" :key="result.id" class="result">
      <div class="favourite" @click="toggleFavourite(result.uid)" :class="{ active: isFavourited(result.uid) }">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path>
        </svg>
      </div>
      <div class="title">
        <h3>{{ result.title }}</h3>
      </div>
      <div class="body" v-html="result.body" />
    </article>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      isFavourited: 'favourites/isFavourited'
    })
  },
  methods: {
    ...mapActions({
      toggleFavourite: 'favourites/toggleFavourite'
    }),
    favourite (id) {
      this.addFavourite(id)
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

  .favourite {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    display: block;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      fill: #aaa;
    }
    &.active svg {
      fill: #23985B;
    }
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
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
