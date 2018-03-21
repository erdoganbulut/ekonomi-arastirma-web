<template>
  <main>
    Referanslarımız
    <Banner />
    <Reference />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Reference from '@/components/Reference.vue';

@Component({
  components: {
    Banner,
    Reference,
  },
})
export default class References extends Vue {
  

  setFooterVisibility(value: boolean) {
    this.$store.dispatch('footer/setFooterVisibility', value);
  }

  mounted() {
    this.setFooterVisibility(true);
  }
  
};
</script>
