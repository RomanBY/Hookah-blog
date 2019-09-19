<template>
    <v-container>
      <v-navigation-drawer
        :fixed="true"
      >
        <navigation
          @change-tab="tabNumber = $event"
        />
      </v-navigation-drawer>
      <v-tabs-items v-model="tabNumber">
        <v-tab-item>

        </v-tab-item>
        <v-tab-item>

        </v-tab-item>
        <v-tab-item>

        </v-tab-item>
        <v-tab-item>

        </v-tab-item>
        <v-tab-item>

        </v-tab-item>
      </v-tabs-items>
    </v-container>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'
  import Navigation from '~/components/Admin/Navigation.vue'

  @Component({
    layout: 'admin',
    components: {
      Navigation
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    tabNumber: number = 0

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>

