<template>
  <v-app dark>
    <div v-scroll="onScroll">
      <v-img
        v-show="$route.path === '/'"
        class="bg-image"
        :src="require('../assets/img/bg/actions-bg.jpg')"
        height="100vh"
      />
      <v-app-bar
        fixed
        app
        class="toolbar"
      >
        <v-img
          max-width="30"
          :src="require('~/assets/img/Logo-Main.svg')"
          class="mr-3"
        />
        <v-toolbar-title
          class="toolbar__name"
        >
          <p class="mb-0">KALYAN<span class="toolbar__name-last">GO</span></p>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-title
          v-if="false"
          v-for="(item, key) in menu"
          :key="key"
        >
          <nuxt-link
            class="d-lg-block d-none toolbar__menu-item mx-2"
            :to="item.url"
            v-if="item.visible"
          >
            {{ item.title }}
          </nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title
          class=""
          v-for="(item, key) in navigation"
          :key="key"
        >
          <div
            @click="changePlace(item.goTo)"
            class="d-md-block d-none toolbar__menu-item mx-4"
          >
            {{ item.title }}
          </div>
        </v-toolbar-title>
        <v-btn
          icon
          @click.stop="rightDrawer = !rightDrawer"
          class="d-md-none"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <nuxt/>
      </v-content>
      <v-navigation-drawer
        v-model="rightDrawer"
        right
        temporary
        fixed
        class="drawer"
      >
        <div class="d-flex">
          <v-img
            class="mx-auto"
            max-width="70"
            :src="require('~/assets/img/Logo-Main.svg')"
          />
        </div>
        <v-list class="mt-5">
          <v-list-item
            v-for="(item, index) in navigation"
            :key="index"
            @click="changePlace(item.goTo)"
          >
            <v-list-item-action>
              <v-icon light>
                mdi-repeat
              </v-icon>
            </v-list-item-action>
            <v-list-item-title
              class="drawer__title"
            >{{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer
        class="footer"
      >
        <footer-base/>
      </v-footer>
    </div>
    <v-scale-transition>
      <v-btn
        @click="goToTop()"
        class=" v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark"
        fab
        v-show="scroll > 200"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script lang="ts">
  import Base from '~/core/Base'
  import { Component } from 'nuxt-property-decorator'
  import { I_Menu } from '~/modules/intefaces'
  import FooterBase from '~/components/Footer.vue'

  @Component({
    components: {
      FooterBase
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    scroll: number = 0
    rightDrawer: boolean = false
    menu: I_Menu.IMainManu[] = [
      {
        title: 'Главная',
        goTo: '',
        active: true,
        url: '/',
        visible: false
      },
      {
        title: 'Блог',
        goTo: '',
        active: false,
        url: '/blog',
        visible: false
      },
      {
        title: 'Админ панель',
        goTo: '',
        active: false,
        url: '/admin',
        visible: false
      }
    ]
    navigation: I_Menu.INavigation[] = [
      {
        title: 'Главная',
        goTo: 'html',
        active: false,
      },
      {
        title: 'О нас',
        goTo: '.about',
        active: false,
      },
      {
        title: 'Почему мы',
        goTo: '.reasons',
        active: false,
      },
      {
        title: 'Цены',
        goTo: '.prices',
        active: false,
      },
      {
        title: 'Контакты',
        goTo: '.contacts',
        active: false,
      }
    ]

    onScroll (e: any) {
      this.scroll = e.target.scrollingElement.scrollTop
    }

    goToTop () {
      // @ts-ignore
      this.$vuetify.goTo('html')
    }

    changePlace (anchor: string) {
      if (this.$route.path === '/') {
        this.$vuetify.goTo(anchor)
      } else {
        this.$router.push('/')
        setTimeout(() => {
          this.$vuetify.goTo(anchor)
        }, 500)
      }
      this.rightDrawer = false
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }

  .drawer {
    &__title {
      font-size: 1.3rem;
    }
  }

  .footer {
    min-height: 250px;
    background: $color--black !important;
    overflow: hidden;
  }

  .toolbar {
    &__name {
      cursor: pointer;
      transition: 250ms;

      &-last {
        color: #ebcd84;
        transition: 250ms;
      }

      &:hover {
        color: $color--menu--text-hover;

        & .toolbar__name-last {
          color: white;
        }
      }
    }

    &__menu-item {
      cursor: pointer;
      transition: 250ms;
      color: $color--menu--text;

      &:hover {
        color: $color--menu--text-hover;
      }
    }
  }
</style>
