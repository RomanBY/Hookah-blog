<template>
  <v-container class="prices mb-5">
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-2 font-weight-thin mb-4 text-center mt-4">Наши цены</h1>
    </v-row>
    <v-card
      class="mb-5 prices__card"
    >
      <v-row>
        <v-col
          class="mt-3 mb-5"
          cols="6"
          v-for="(price, index) in prices"
          :key="index"
        >
          <price-card :item="price"/>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="prices__card">
      <v-row>
        <v-col
          class="mt-3 mb-5"
          cols="6"
          v-for="(price, index) in pricesSecond"
          :key="index"
        >
          <price-card :item="price"/>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import { I_Price } from '~/modules/intefaces'
  import PriceCard from '~/components/CardInfo/PriceCard.vue'

  @Component({
    components: {
      PriceCard
    }
  })
  export default class Prices extends Base {

    constructor () {
      super()
    }

    prices: I_Price.IPrice[] = [
      {
        title: 'mini',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 15 ГОСТЕЙ',
        attributes: ['3 Кальяна', '1 Дизайнерский кальян', '1 Кальянщик'],
        prices: ['3 часа - $$ рублей', '5 часов - $$ рублей']
      },
      {
        title: 'standart',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 25 ГОСТЕЙ',
        attributes: ['5 Кальянов', '1 Дизайнерский кальян', '1 Кальянщик'],
        prices: ['3 часа - $$ рублей', '5 часов - $$ рублей']
      }
    ]

    pricesSecond: I_Price.IPrice[] = [
      {
        title: 'big',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 50 ГОСТЕЙ',
        attributes: ['7 Кальяна', '2 Дизайнерский кальян', '2 Кальянщик'],
        prices: ['3 часа - $$ рублей', '5 часов - $$ рублей']
      },
      {
        title: 'super',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 100 ГОСТЕЙ',
        attributes: ['10 Кальянов', '2 Дизайнерский кальян', '2 Кальянщик'],
        prices: ['3 часа - $$ рублей', '5 часов - $$ рублей']
      }
    ]

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .prices {
    min-height: 600px;

    &__card {
      background: $color-bg--card-opacity !important;
    }
  }
</style>
