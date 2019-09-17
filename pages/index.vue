<template>
  <div>
    <slider class="slider"></slider>
    <main-info></main-info>
    <about-us></about-us>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'
  import Slider from '~/components/Slider.vue'
  import MainInfo from '~/components/MainInfo.vue'
  import AboutUs from '~/components/AboutUs.vue'

  @Component({
    components: {
      Slider,
      MainInfo,
      AboutUs
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .slider {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

