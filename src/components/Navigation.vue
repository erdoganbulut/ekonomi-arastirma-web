<template>
  <header>
    <img src="../assets/logo.svg" alt="">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contact">contact</router-link> | 
    <router-link to="/journal">journal</router-link> | 
    <router-link to="/journal/123">journal/123</router-link> | 
    <router-link to="/monitorings">monitorings</router-link> | 
    <router-link to="/monitorings/123">monitorings/123</router-link> | 
    <router-link to="/references">references</router-link> | 
    <router-link to="/services">services</router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
