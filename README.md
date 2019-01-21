# Shopify Web Developer Challenge 2019

> Toronto Waste Lookup project built for my Shopify Summer 2019 internship application.

**Live copy:** [anatolie.me/shopify-challenge-2019][link]

The project was built using Vue.js to take advantage of all the goodies that modern JS frameworks include such as reactivity and local stores. It runs using [webpack](http://vuejs-templates.github.io/webpack/) and [vue-loader](http://vuejs.github.io/vue-loader) and can be built for production use in a single command, see below.

## A Few Notes

- Because the API returned a string of keywords instead of an array, I opted to do a simple text search using keywords[i].includes(query) since in this case (and to keep things simple) it would be less resource intensive than creating arrays and iterating over them.
- The favourites feature utilizes a Vuex store which allows to expand functionality in the future. This could allow for using LocalStorage to save user favourites if they close and return to the app.
- Data from the API had to be sanitized - there were trailing spaces and commas in some of the body and keyword elements. Some objects were missing the id parameter - the app gives each item a unique id by using an incrementing integer.

## Build Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

#### You reached the footer!

Thanks for checking out the project! You can check out my other projects at [anatolie.me](https://anatolie.me) or if you have any questions or suggestions, feel free to email me [contact@anatolie.me](mailto:contact@anatolie.me).

Future Shopify applicant looking at this project? Don't hesitate to contact me with any questions!

[link]: <https://anatolie.me/shopify-challenge-2019>
