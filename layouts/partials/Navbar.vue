<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{name: 'index'}" class="navbar-item text-bold">Autoplush</nuxt-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="main-navbar" class="navbar-menu">
        <div class="navbar-start">
          <template v-for="category in categories">
            <template v-if="category.children.length">
              <div class="navbar-item has-dropdown is-hoverable" :key="category.slug">
                <nuxt-link
                  :to="{name: 'categories-slug', params: {slug: category.slug}}"
                  class="navbar-link"
                >{{category.name}}</nuxt-link>
                <div class="navbar-dropdown">
                  <nuxt-link
                    v-for="child in category.children"
                    :to="{name: 'categories-slug', params: {slug: child.slug}}"
                    class="navbar-item"
                    :key="child.slug"
                  >{{child.name}}</nuxt-link>
                </div>
              </div>
            </template>
            <template v-else>
              <nuxt-link
                :to="{name: 'categories-slug', params: {slug: category.slug}}"
                class="navbar-item"
                :key="category.slug"
              >{{category.name}}</nuxt-link>
            </template>
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" v-if="!$auth.loggedIn">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <nuxt-link :to="{name: 'auth-login'}" class="button is-light">Log in</nuxt-link>
            </div>
          </div>
          <template v-else>
            <a href="#" class="navbar-item is-primary">
              <strong>{{$auth.user.name}}</strong>
            </a>
            <a href="#" class="navbar-item is-primary">
              <strong>Orders</strong>
            </a>
            <a href="#" class="navbar-item is-primary">
              <strong>Cart (0)</strong>
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters({
      categories: "categories"
    })
  }
};
</script>