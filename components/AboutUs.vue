<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
              </v-col>
              <v-col
                class="hidden-sm-and-down text-right"
                md="2"
              >
                <v-icon size="64">mdi-calendar-text</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class AboutUs extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

</style>
