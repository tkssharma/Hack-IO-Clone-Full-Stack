<template>
  <div class="page">
    <HeaderComp></HeaderComp>
    <div class="body-container">
        <router-view></router-view>
    </div>
    <FooterComp></FooterComp>
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
};
</script>


<style lang="scss">
@import "../src/assets/scss/index.scss";
</style>
