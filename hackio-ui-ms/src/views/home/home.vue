<template>
<div>
  <SearchBar @search="handleSearch"/>
  <Technologies :technologyData="technologyData"/>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchBar from '../../components/home/search-bar';
import Technologies from '../../components/home/technology-list';
import technology from '../../components/home/mock';

export default {
  components : {
    SearchBar,
    Technologies
  },
  data(){
     return {
       technologyData: technology.data
     }
  },
  computed: {
     ...mapGetters['number', 'email']
  },
  methods: {
    ...mapActions['CHANGE_NUMBER','CHANGE_EMAIL'],
    changed: function(e){
     // alert(e.target.value)
    this.CHANGE_NUMBER(e.target.value);
    },
    handleSearch(value){
        console.log(value);
    }
  }
}
</script>

<style>
 button {
    background: #009435;
    border: 1px solid #009435;
  }
  .container {
    margin-top: 100px;
    max-width: 680px;
  }
</style>