<template>
  <span class="icons-component">
    <svg v-if="name === 'icon-hamburger'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M491.318 235.318H20.682C9.26 235.318 0 244.577 0 256s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 78.439H20.682C9.26 78.439 0 87.699 0 99.121c0 11.422 9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.26 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 392.197H20.682C9.26 392.197 0 401.456 0 412.879s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682s-9.259-20.682-20.682-20.682z"/></svg>
    <svg v-if="name === 'icon-angle-o-left'" viewBox="0 0 50 51" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fill" transform="matrix(-1 0 0 1 33.1 13.952)" fill="currentColor"/><g transform="translate(297 -306)"><mask id="a"><use xlink:href="#path1_fill" transform="matrix(-1 0 0 1 -247 306.602)" fill="currentColor"/></mask><g mask="url(#a)"><use xlink:href="#path2_fill" transform="matrix(-1 0 0 1 -247 306.602)" fill="currentColor"/></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M1.41 23.3l16.144-11.65L1.41 0 0 1.954l13.436 9.695L0 21.345 1.41 23.3z"/><path id="path1_fill" fill-rule="evenodd" d="M0 0h50v50H0V0z"/><path id="path2_fill" fill-rule="evenodd" d="M25 2.41c12.456 0 22.59 10.133 22.59 22.59 0 12.456-10.134 22.59-22.59 22.59C12.542 47.59 2.41 37.456 2.41 25 2.41 12.543 12.543 2.41 25 2.41zM25 50c13.785 0 25-11.215 25-25C50 11.214 38.784 0 25 0 11.213 0 0 11.214 0 25c0 13.785 11.214 25 25 25z"/></defs></svg>
    <svg v-if="name === 'icon-angle-o-right'" viewBox="0 0 50 51" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#path0_fill" transform="translate(16.9 13.952)" fill="currentColor"/><g transform="translate(-1026 -306)"><mask id="a"><use xlink:href="#path1_fill" transform="translate(1026 306.602)" fill="currentColor"/></mask><g mask="url(#a)"><use xlink:href="#path2_fill" transform="translate(1026 306.602)" fill="currentColor"/></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M1.41 23.3l16.144-11.65L1.41 0 0 1.954l13.436 9.695L0 21.345 1.41 23.3z"/><path id="path1_fill" fill-rule="evenodd" d="M0 0h50v50H0V0z"/><path id="path2_fill" fill-rule="evenodd" d="M25 2.41c12.456 0 22.59 10.133 22.59 22.59 0 12.456-10.134 22.59-22.59 22.59C12.542 47.59 2.41 37.456 2.41 25 2.41 12.543 12.543 2.41 25 2.41zM25 50c13.785 0 25-11.215 25-25C50 11.214 38.784 0 25 0 11.213 0 0 11.214 0 25c0 13.785 11.214 25 25 25z"/></defs></svg>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Icons extends Vue {
  @Prop() private name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
svg {
  max-width: 100%;
  max-height: 100%;;
}
</style>
