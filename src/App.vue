<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footerbar v-if="isFooter" />
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import Footerbar from '@/components/Footerbar.vue';

@Component({
  computed: {
    ...mapGetters({
      isFooter: 'footer/isFooter',
    }),
  },
  components: {
    Navigation,
    Footerbar,
  },
})
export default class App extends Vue {}
</script>
