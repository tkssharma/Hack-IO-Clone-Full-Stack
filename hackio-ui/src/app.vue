<template>
<div>
  <HeaderComp></HeaderComp>
  <main>
   <router-view></router-view>
  </main>
  <FooterComp></FooterComp>

</div>
</template>

<script>
import HeaderComp from './components/shared/header/header.vue';
import FooterComp from './components/shared/footer/footer.vue';

export default {
  components:{
    HeaderComp,
    FooterComp
  }
}
</script>


<style>
.main-content {
  margin-top: 80px;
}
</style>