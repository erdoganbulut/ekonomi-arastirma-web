<template>
  <main>
    <Slider />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue';

@Component({
  components: {
    Slider,
  },
})
export default class Home extends Vue {
  

  setFooterVisibility(value: boolean) {
    this.$store.dispatch('footer/setFooterVisibility', value);
  }

  getSliders() {
    this.$store.dispatch('home/getSliders');
  }

  mounted() {
    this.setFooterVisibility(false);
    this.getSliders();
  }

};
</script>
