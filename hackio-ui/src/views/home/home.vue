<template>
  <div id="app" class="container">
         <label for="number">just a random number</label> <br/>
         <input @input="changed" name="number" type="text" />
         <p>{{number}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
     ...mapGetters['number', 'email']
  },
  methods: {
    ...mapActions['CHANGE_NUMBER','CHANGE_EMAIL'],
    changed: function(e){
     // alert(e.target.value)
    this.CHANGE_NUMBER(e.target.value);
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