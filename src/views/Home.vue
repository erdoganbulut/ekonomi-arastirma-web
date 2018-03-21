<template>
  <main>
    <Slider :content="homeData" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
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

  getHomeData() {
    this.$store.dispatch('home/getHomeData');
  }

  mounted() {
    this.setFooterVisibility(false);
    this.getHomeData();
  }

  get homeData() {
    return this.$store.getters['home/homeData']
  }

};
</script>
