<template>
  <v-container class="prices mb-5">
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-2 font-weight-thin mb-4 text-center mt-4">Наши цены</h1>
    </v-row>
    <v-row justify="center">
      <v-col
        class="my-1"
        cols="10"
        md="6"
        v-for="(price, index) in prices"
        :key="index"
      >
        <v-card
          class="prices__card py-5"
        >
          <price-card :item="price"/>
        </v-card>
      </v-col>
    </v-row>
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
      },
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
    overflow: hidden;

    &__card {
      background: $color-bg--card-opacity !important;
    }
  }
</style>
