<template>
  <v-row
    column
    justify-center
    align-center
  >
    <v-col
      lg="12"
      sm="8"
      md="6"
    >
    123
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class extends Base {

    constructor () {
      super()
    }

  }
</script>
