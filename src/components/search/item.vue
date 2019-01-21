<template>
  <article class="result">
    <div class="favourite" @click="toggleFavourite(item.uid)" :class="{ active: isFavourited(item.uid) }">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path>
      </svg>
    </div>
    <div class="title">
      <h3>{{ item.title }}</h3>
    </div>
    <div class="body" v-html="item.body" />
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
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
