<template>
  <v-container class="main">
    <v-row
      class="main"
      align="center"
      justify="center"
    >
      <v-col
      cols="10"
      class="main__block display-3 text-center"
      >
        <p>Let’s SMOKE – лучший кальянный кейтеринг</p>
        <v-row justify="center">
          <v-col
            cols="6"
            align="center"
          >
            <v-btn color="error" dark large>Подробнее</v-btn>
            <v-btn color="teal lighten-3" dark large>Заказать</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class MainInfo extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .main {
    min-height: 100vh;

    &__block {
      z-index: 1;
      font-weight: bolder;
    }
  }
</style>
