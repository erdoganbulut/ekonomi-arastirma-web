<template>
  <main>
    <Slider />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Slider from '@/components/Slider.vue';

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Slider,
  },
})
export default class Home extends Vue {
  mounted() {
    this.setFooterVisibility(false);
  };
};
</script>
