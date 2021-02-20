<template>
<div>
  <SearchBar @search="handleSearch"/>
  <Technologies :technologyData="filteredData"/>
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
       technologyData: technology.data,
        filteredData: technology.data
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
      if(value && value.length > 0) {
        this.filteredData = this.technologyData.filter(i => {
          const val = value.toLowerCase();
          const title = i.title && i.title.toLowerCase();
          if(val && title.indexOf(val) !== -1) {
            return true
          } 
          return false
        })
      } else {
        this.filteredData = this.technologyData;
      }
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