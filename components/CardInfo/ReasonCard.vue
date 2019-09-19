<template>
  <v-card color="white elevation-0 reason">
    <v-card-title class="reasons__text justify-center">{{ item.title }}</v-card-title>
    <v-img
      max-height="200"
      contain
      :src="item.imageUrl"></v-img>
    <v-card-text class="reasons__text-description text-center">{{ item.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Prop } from 'vue-property-decorator'
  import { I_Reason } from '~/modules/intefaces'

  @Component
  export default class ReasonCard extends Base {

    constructor () {
      super()
    }

    @Prop({
      required: true,
      type: Object
    }) item!: I_Reason.IReason

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";
  .reasons {
    &-wrap {
      background: white;
      min-height: 600px;
    }

    &__title {
      color: black;
    }

    &__text {
      color: black !important;

      &-description {
        font-size: 16px;
        line-height: 1.3;
        color: $color--description !important;
      }
    }
  }

</style>
