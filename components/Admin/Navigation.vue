<template>
  <div class="navigation">
    <v-tabs
      color="amber lighten-2"
      class="navigation"
      vertical
      v-model="tabsControl"
    >
      <v-tab class="navigation__tab justify-start">
        <v-icon left>mdi-account-clock-outline</v-icon>
        Аналитика
      </v-tab>
      <v-tab class="navigation__tab justify-start">
        <v-icon left>mdi-post</v-icon>
        Посты
      </v-tab>
      <v-tab class="navigation__tab justify-start">
        <v-icon left>mdi-account</v-icon>
        Пользователи
      </v-tab>
      <v-tab
        @click="exitAdmin"
        class="navigation__tab justify-start"
      >
        <v-icon left>mdi-exit-to-app</v-icon>
        Выйти
      </v-tab>
    </v-tabs>
  </div>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Watch, Prop } from 'nuxt-property-decorator'


  @Component
  export default class Navigation extends Base {

    constructor () {
      super()
    }

    @Prop() tabNumber!: number

    @Watch('tabsControl')
    changeTab (val: number) {
      this.$emit('change-tab', val)
    }

    tabsControl: number = 0

    created () {
      this.tabsControl = this.tabNumber
    }

    exitAdmin () {
      this.$store.commit('changeLogin', false)
      this.$router.push('/')
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .navigation {
    height: 100%;
    overflow: hidden;

    &__tab {
      width: 256px;
    }
  }

</style>
