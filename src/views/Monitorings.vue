<template>
  <main>
    Türkiye Monitörleri
    <Banner />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
  components: {
    Banner,
  },
})
export default class Monitorings extends Vue {}
</script>
