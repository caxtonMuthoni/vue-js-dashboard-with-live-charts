<template>
  <v-app>
    <!-- The appbar -->
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn v-if="!miniVariant" icon @click="miniVariant = true">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn v-else icon @click="miniVariant = false">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>

      <v-toolbar-title>Badge</v-toolbar-title>
    </v-app-bar>

    <!-- The Navigation drawer -->
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      :mini-variant="miniVariant"
      color="grey lighten-4"
    >
      <v-list dense nav>
        <v-list-item-group v-model="selectedNavItem" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- The main content rendering using vue router -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
    miniVariant: false,
    selectedNavItem: 0,

    /* NAVIGATION MENU ITEMS */
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Users", icon: "mdi-account-multiple", link: "/about" },
      { title: "Businesses", icon: "mdi-briefcase-variant", link: "" },
      { title: "Adverts", icon: "mdi-apps", link: "" },
      { title: "Survey", icon: "mdi-view-dashboard", link: "" },
      { title: "Accounts", icon: "mdi-currency-usd", link: "" },
    ],
    right: null,
  }),
};
</script>

<style lang="scss" >
@import "@/sass/base";
</style>
