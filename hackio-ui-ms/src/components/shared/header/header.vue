<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="onToggle"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">{{
        title
      }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
     
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.main-content {
  margin-top: 80px;
}
</style>