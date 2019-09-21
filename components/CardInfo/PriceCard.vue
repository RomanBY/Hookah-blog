<template>
  <div class="price">
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="text-uppercase display-2 font-weight-light">{{ item.title }}</h1>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mt-3"
    >
      <h3 class="font-weight-thin">{{ item.description }}</h3>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mt-5"
    >
      <v-col
        cols="7"
        v-for="(attr, index) in item.attributes"
        :key="index"
        class="text-center price__border"
      >
        <p class="my-auto">{{ attr }}</p>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mt-5"
    >
      <v-col
        cols="7"
        v-for="(price, index) in item.prices"
        :key="index"
        class="text-center"
      >
        <p class="my-auto font-weight-medium display-1">{{ price }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Prop } from 'vue-property-decorator'
  import { I_Price } from '~/modules/intefaces'

  @Component
  export default class PriceCard extends Base {

    constructor () {
      super()
    }

    @Prop({
      required: true,
      type: Object
    }) item!: I_Price.IPrice


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";
  .price {
    &__border {
      border-bottom: solid 1px #585858;
    }
  }

</style>
