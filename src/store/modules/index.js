/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. This script will include all .js files within
 * this directory, regardless of name (ie: favourites.js).
 */

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
