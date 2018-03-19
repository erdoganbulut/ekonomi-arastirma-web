<template>
  <main>
    Hizmetlerimiz
    <Banner />
    <Service />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Service from '@/components/Service.vue';

@Component({
  components: {
    Banner,
    Service,
  },
})
export default class Services extends Vue {}
</script>
