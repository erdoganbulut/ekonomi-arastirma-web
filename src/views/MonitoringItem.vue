<template>
  <main>
    Türkiye Monitörü Item
    <Banner />
    <Slogan />
    <Content />
    <BoxMonitoring />
    <BoxTweet />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Slogan from '@/components/Slogan.vue';
import Content from '@/components/Content.vue';
import BoxMonitoring from '@/components/BoxMonitoring.vue';
import BoxTweet from '@/components/BoxTweet.vue';

@Component({
  components: {
    Banner,
    Slogan,
    Content,
    BoxMonitoring,
    BoxTweet,
  },
})
export default class MonitoringItem extends Vue {}
</script>
