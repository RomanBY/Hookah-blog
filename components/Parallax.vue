<template>
  <v-parallax
    dark
    :src="require('../assets/img/bg/ab2.jpg')"
    height="800"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <h1 class="display-2 font-weight-thin mb-4 text-center">Для нас процесс приготовления кальяна не просто работа, а целое искусство!</h1>
        </v-col>
        <v-col cols="12">
          <h4 class="subheading text-center">-- Hookah Cartel --</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class Parallax extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .main {
    min-height: 100vh;
  }
</style>
