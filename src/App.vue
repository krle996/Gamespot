<template>
  <div>
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer
  },
  created() {
    this.$store.dispatch('refreshToken')
  },
}

</script>

<style>
  @import './assets/style.css';
</style>
