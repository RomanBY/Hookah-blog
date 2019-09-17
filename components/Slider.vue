<template>
  <v-carousel
    cycle
    hide-delimiter-background
    :show-arrows="false"
    height=""
    class="slider"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img class="slider" :src="slide.url"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Slider extends Base {

    constructor () {
      super()
    }

    slides: object[] = [
      {
        url: require('~/assets/img/slider/1.jpg')
      },
      {
        url: require('../assets/img/slider/2.jpg')
      },
      {
        url: require('../assets/img/slider/3.jpg')
      }
    ]
  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .slider {
    max-height: 100vh;
    min-height: 100vh;
  }
</style>
