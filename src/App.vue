<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footerbar />
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Footerbar from '@/components/Footerbar.vue';

@Component({
  components: {
    Navigation,
    Footerbar,
  },
})
export default class App extends Vue {}
</script>
