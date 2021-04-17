<template>
  <div class="page">
    <HeaderComp v-if="showHeaders"></HeaderComp>
    <div class="body-container">
        <router-view></router-view>
    </div>
    <FooterComp  v-if="showHeaders"></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "./components/shared/header/header.vue";
import FooterComp from "./components/shared/footer/footer.vue";

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  computed:{
    showHeaders(){
      //alert(this.$router.currentRoute.path);
      if (this.$router.currentRoute.path === '/login' || this.$router.currentRoute.path === '/register' ){
        return false;
      }
      return true;
    }
  }
};
</script>


<style lang="scss">
@import "../src/assets/scss/index.scss";
</style>
