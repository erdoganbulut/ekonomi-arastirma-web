<template>
  <main>
    Gündem Item
    <Banner />
    <Slogan />
    <Content />
    <BoxJournal />
    <BoxTweet />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Slogan from '@/components/Slogan.vue';
import Content from '@/components/Content.vue';
import BoxJournal from '@/components/BoxJournal.vue';
import BoxTweet from '@/components/BoxTweet.vue';

@Component({
  components: {
    Banner,
    Slogan,
    Content,
    BoxJournal,
    BoxTweet,
  },
})
export default class JournalItem extends Vue {}
</script>
