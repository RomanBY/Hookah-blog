<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="toolbar"
    >
      <v-img
        max-width="30"
        :src="require('~/assets/img/Logo-Main.svg')"
        class="mr-3"
      ></v-img>
      <v-toolbar-title
        class="toolbar__name"
      >
        <p class="mb-0">KALYAN<span class="toolbar__name-last">GO</span></p>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-title
        class="d-lg-block d-none toolbar__menu-item mx-2"
        v-for="(item, key) in menu"
        :key="key"
      >{{ item.title }}
      </v-toolbar-title>
      <v-btn
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
        <v-list-item
          v-for="(item, index) in navigation"
          :key="index"
        >
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title
          >{{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Base from '~/core/Base'
  import { Component } from 'vue-property-decorator'
  import { I_Menu } from '~/modules/intefaces'

  @Component
  export default class extends Base {

    constructor () {
      super()
    }

    clipped: boolean = false
    right: boolean = true
    rightDrawer: boolean = false
    number: string = '+375 (33) 333 33 33'
    menu: I_Menu.IMainManu[] = [
      {
        title: 'Главная',
        goTo: '',
        active: true
      },
      {
        title: 'Блог',
        goTo: '',
        active: false
      },
    ]
    navigation: I_Menu.INavigation[] = [
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
    &__name {
      cursor: pointer;
      transition: 250ms;

      &-last {
        color: #ebcd84;
        transition: 250ms;
      }

      &:hover {
        color: $color--menu--text;

        & .toolbar__name-last {
          color: white;
        }
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
