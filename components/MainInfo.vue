<template>
  <v-container class="main">
    <v-carousel
      cycle
      :show-arrows="false"
      hide-delimiter-background
      height="100vh"
      class="slider"
    >
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.url"
      ></v-carousel-item>
    </v-carousel>
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
          >
            <v-btn
              dark
              large
              @click="$vuetify.goTo('.prices')"
            >Подробнее</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class MainInfo extends Base {

    constructor () {
      super()
    }

    slides: object[] = [
      {
        url: require('../assets/img/slider/1.jpg')
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
  .main {
    max-height: 100vh;
    min-height: 100vh;

    &__block {
      z-index: 1;
      font-weight: bolder;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

</style>
