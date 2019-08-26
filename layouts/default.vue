<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="toolbar"
    >
      <v-toolbar-title
        class="toolbar__number"
        v-text="number"/>
      <v-spacer/>
      <v-toolbar-title
        class="d-md-block d-sm-none toolbar__menu-item mx-2"
        v-for="(item, key) in menu"
        :key="key"
      >{{ item.title }}</v-toolbar-title>
      <v-btn
        class="d-md-none d-sm-block"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Base from '~/core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class extends Base {

    constructor () {
      super ()
    }

    clipped: boolean = false
    fixed: boolean = false
    right: boolean = true
    rightDrawer: boolean = false
    number: string = '+375 (33) 333 33 33'
    menu: object[] = [
      {
        title: 'Главная',
        goTo: '',
        active: true
      },
      {
        title: 'О нас',
        goTo: '',
        active: false
      },
      {
        title: 'Преимущества',
        goTo: '',
        active: false
      },
      {
        title: 'Почему мы',
        goTo: '',
        active: false
      },
      {
        title: 'Цены',
        goTo: '',
        active: false
      },
      {
        title: 'Отзывы',
        goTo: '',
        active: false
      },
      {
        title: 'Гарантии',
        goTo: '',
        active: false
      },
      {
        title: 'Контакты',
        goTo: '',
        active: false
      }
    ]
  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .toolbar {
    &__number {
      cursor: pointer;
      transition: 250ms;

      &:hover {
        color: $color--menu--text;
      }
    }

    &__menu-item {
      cursor: pointer;
      transition: 250ms;

      &:hover {
        color: $color--menu--text;
      }
    }
  }
</style>
