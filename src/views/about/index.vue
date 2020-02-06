<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="danger" @click="goHome">危险</a-button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {

    }
  },
  methods:{
     goHome(){
       this.$router.push({name: 'home'})
     }
  }
}
</script>
