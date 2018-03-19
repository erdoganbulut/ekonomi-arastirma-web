<template>
  <main>
    <Slider />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue'

@Component({
  components: {
    Slider,
  },
})
export default class Home extends Vue {}
</script>
