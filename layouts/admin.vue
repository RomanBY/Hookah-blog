<template>
  <v-app>
    <v-content class="content">
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Base from '~/core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class extends Base {

    constructor () {
      super()
    }


  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .content {
    height: 100vh;
    width: 100%;
  }
</style>
