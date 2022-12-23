<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <button class="bg-primary text-white bold" @click="getEntry"> DayBook</button>
   
  </div>
</template>

<script>
export default {
     methods:{
      getEntry(){
        this.$router.push({name:'daybook'})
      }
     }
}
</script>

