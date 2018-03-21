<template>
  <section class="ui-slider-component">
    <div class="ui-slider--outer">
      <div class="ui-slider--items">
        <div class="ui-slider--item" v-for="slider in sliders" :key="slider.id" :style="`background-image: url('${slider.image}')`" v-bind:class="{'is--active': slider.isActive}">
          <div class="container">
            <h2 v-html="slider.title">İstanbul Ekonomi Araştırma Genel Müdürü Can Selçuki,<br>Son Seçmen Eğilimlerini Değerlendirdi.</h2>
            <router-link :to="`/journal/${slider.url}`">DETAYLI BİLGİ >></router-link>
          </div>
        </div>
      </div>
      <div class="ui-slider--controls">
        <a href="javascript:;" class="ui-slider--controls__item item--left">
          <icon name="icon-angle-o-left"></icon>
        </a>
        <a href="javascript:;" class="ui-slider--controls__item item--right">
          <icon name="icon-angle-o-right"></icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { setInterval, clearInterval } from 'timers';

@Component
export default class Slider extends Vue {
  @Prop() private content: any

  sliders: Array<any> = []

  sliderInterval: any;

  @Watch('content')
  fillSliders() {
    const sliders: Array<any> = [];
    if(typeof this.content.sliders !== 'undefined') {
      this.content.sliders.forEach((element: object) => {
        const Item = JSON.parse(JSON.stringify(element));
        Item.isActive = false;
        sliders.push(Item);
      });
    }
    this.sliders = sliders;
    this.startSlider();
  }

  stopSlider() {
    clearInterval(this.sliderInterval);
  }

  runSlider() {
    this.sliderInterval = setInterval(() => {
      this.nextSlider();
    }, 5000);
  }

  startSlider() {
    if (typeof this.sliders[0] === 'undefined') {
      this.sliders = [];
    } else if (this.sliders.length > 1) {
      this.sliders[0].isActive = true
      this.runSlider();
    } else {
      this.sliders[0].isActive = true
    }
  }

  nextSlider() {
    this.stopSlider();
    let activeIndex = _.findIndex(this.sliders, 'isActive');
    let nextIndex = activeIndex + 1 >= this.sliders.length ? 0 : activeIndex + 1;
    this.sliders[activeIndex].isActive = false;
    this.sliders[nextIndex].isActive = true;
    this.runSlider();
  }

  prevSlider() {
    this.stopSlider();
    const activeIndex = _.findIndex(this.sliders, 'isActive');
    const nextIndex = activeIndex > 0 ? activeIndex - 1 : this.sliders.length - 1;
    this.sliders[activeIndex].isActive = false;
    this.sliders[nextIndex].isActive = true;
    this.runSlider();
  }

  mounted() {
    this.fillSliders();
    this.startSlider();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  section.ui-slider-component {
    .ui-slider--controls {
      a {
        display: block;
        height: 50px;
      }
    }
  }
</style>
