<template>
  <div class="about">
    <about-card/>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component, Watch } from 'vue-property-decorator'
  import AboutCard from '~/components/CardInfo/AboutCard.vue'
  import { namespace, State } from 'vuex-class'



  @Component({
    components: {
      AboutCard
    }
  })
  export default class About extends Base {

    constructor () {
      super()
    }

    @State('scroll') scroll: number | undefined

    @Watch('scroll')
    qwe () {
      console.log(this.scroll)
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .about {
    background: #303030;
  }
</style>
