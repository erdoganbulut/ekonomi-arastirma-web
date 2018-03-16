<template>
  <main>
    İletişim
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
export default class Contact extends Vue {}
</script>
