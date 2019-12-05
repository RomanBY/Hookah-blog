<template>
  <div>
    <main-info/>
    <about/>
    <parallax/>
    <reasons/>
    <prices/>
    <contacts/>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import MainInfo from '~/components/MainInfo.vue'
  import Parallax from '~/components/Parallax.vue'
  import Reasons from '~/components/Reasons.vue'
  import Prices from '~/components/Prices.vue'
  import About from '~/components/About.vue'
  import Contacts from '~/components/Contacts.vue'

  @Component({
    components: {
      MainInfo,
      About,
      Parallax,
      Reasons,
      Prices,
      Contacts
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
</style>

