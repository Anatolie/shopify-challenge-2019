<template>
  <section v-if="getFavourites.length > 0" class="search-favourites">
    <h2>Favourites</h2>
    <item v-for="item in getFavourites" :key="item.uid" :item="item" />
  </section>
</template>

<script>
/**
 * This component displays a list of favourites (using a list of item components).
 * This data is fetched from the @/store/modules/favourites Vuex store.
 */

import { mapGetters } from 'vuex'
import item from './item'

export default {
  components: {
    item
  },
  computed: {
    ...mapGetters({
      getFavourites: 'favourites/list'
    })
  }
}
</script>

<style lang="scss" scoped>
.search-favourites {
  margin-top: 16px;
  padding: 16px;
  background: #F5FCF8;

  h2 {
    margin-bottom: 16px;
    color: #23995C;
    font-weight: bold;
  }
}
</style>
