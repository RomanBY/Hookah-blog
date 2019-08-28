<template>
  <div>
    <slider class="slider"></slider>

  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'
  import Slider from '~/components/Slider.vue'

  @Component({
    components: {
      Slider
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

