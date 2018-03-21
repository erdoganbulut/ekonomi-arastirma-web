<template>
  <header>
    <div class="header--cols">
      <div class="header--col header--logo">
        <router-link to="/">
          <img src="../assets/logo.svg" alt="">
        </router-link>
      </div>
      <nav class="header--col header--navigation" v-bind:class="{'is-open': isShowNav}">
        <ul>
          <li>
            <router-link to="/journal">GÜNDEM</router-link> 
          </li>
          <li>
            <router-link to="/monitorings">TÜRKİYE MONİTÖRÜ</router-link> 
          </li>
          <li>
            <router-link to="/about">HAKKIMIZDA</router-link> 
          </li>
          <li>
            <router-link to="/services">HİZMETLERİMİZ</router-link>
          </li>
          <li>
            <router-link to="/references">REFERANSLARIMIZ</router-link> 
          </li>
          <li>
            <a href="javascript:;">MP TRACKS</a> 
          </li>
          <li>
            <router-link to="/contact">İLETİŞİM</router-link> 
          </li>
          <li class="item--lang">
            <router-link to="/en">EN</router-link>
          </li>
        </ul>
      </nav>
      <div class="header--col header--trigger-mobile">
        <a href="javascript:;" v-on:click="handleTriggerNav()">
          <icon name="icon-hamburger" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  isShowNav: boolean = false;

  handleTriggerNav() {
    this.isShowNav = !this.isShowNav;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../scss/shared';

  header {
    padding: 0;
    background: $colorBlack;
    color: #fff;
    position: relative;
    $component: &;
    .#{$component}--cols {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      @media (min-width: 992px) {
        padding: 0 15px;
      }
    }
    .#{$component}--col {
      padding: 15px;
      &.#{$component}--logo {
        a {
          display: block;
          height: 70px;
          width: auto;
        }
      }
      &.#{$component}--navigation {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: lighten($colorBlack, 5%);
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        padding: 0;
        &.is-open {
          opacity: 1;
          visibility: visible;
        }
        @media (min-width: 992px) {
            position: static;
            top: auto;
            left: auto;
            right: auto;
            background: transparent;
            opacity: 1;
            visibility: visible;
            padding: 15px;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          @media (min-width: 992px) {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          li {
            padding-left: 10px;
            padding-right: 10px;
            border-bottom: 1px solid $colorBlack;
            @media (min-width: 992px) {
              border-bottom: 0px;
            }
            a {
              display: block;
              color: inherit;
              text-decoration: none;
              padding: 12px;
              @media (min-width: 992px) {
                padding: 0;
              }
            }
            &.item--lang {
              @media (min-width: 992px) {
                border-left: 1px solid #fff;
                padding-left: 20px;
                margin-left: 10px;
              }
            }
            &:last-child {
              @media (min-width: 992px) {
                padding-right: 0;
              }
            }
          }
        }
      }
      &.#{$component}--trigger-mobile {
        @media (min-width: 992px) {
          display: none;
        }
        a {
          display: block;
          color: #fff;
          span {
            display: block;
            height: 24px;
          }
        }
      }
    }
  }
</style>
