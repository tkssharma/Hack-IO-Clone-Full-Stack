<template>
<div @click="onClickHandle">
    <input @change="handleChange" type="text" v-model="message" />
</div>
</template>


<script>
export default {
    components: {

    },
    data(){
        return {
          message: 'hello world'
        }
    },
    methods: {
        onClickHandle(){
           this.$emit('event', this.message)
        },
        handleChange(){

        }
    }
}
</script>

<style lang="scss">
.search-holder {
  margin-top: 60px;
</style>