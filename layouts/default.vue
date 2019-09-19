<template>
  <v-app dark>
    <div v-scroll="onScroll">
      <v-img
        v-show="scroll > 1200"
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
        ></v-img>
        <v-toolbar-title
          class="toolbar__name"
        >
          <p class="mb-0">KALYAN<span class="toolbar__name-last">GO</span></p>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-title
          v-for="(item, key) in menu"
          :key="key"
        >
          <nuxt-link
            class="d-lg-block d-none toolbar__menu-item mx-2"
            :to="item.url"
          >
            {{ item.title }}
          </nuxt-link>
        </v-toolbar-title>
        <v-btn
          icon
          @click.stop="rightDrawer = !rightDrawer"
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
        <v-content>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="8">
              <v-row>
                <v-col
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="100"
                  cols="4"
                >
                  <v-img src="https://hookahcartel.ru/assets/images/logo_footer.jpg"/>
                </v-col>
                <v-col
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="200"
                  cols="4"
                >
                  <h2>HOOKAH CARTEL</h2>
                  <p>Часы работы круглосуточно</p>
                  <p>Прием заявок с сайта крулостуточно</p>
                  <p class="mt-5 pt-5">© 2013-2019 Все права защищены</p>
                </v-col>
                <v-col
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="300"
                  cols="4"
                >
                  <h2>КОНТАКТЫ</h2>
                  <p class="mt-4 footer__contacts">
                    <v-icon class="mr-2">mdi-phone</v-icon>
                    {{ number }}
                  </p>
                  <p class="mt-4 footer__contacts">
                    <v-icon class="mr-2">mdi-email</v-icon>
                    qwerty@live.com
                  </p>
                  <p>
                    <v-icon size="45">mdi-instagram</v-icon>
                    <v-icon size="45">mdi-vk</v-icon>
                    <v-icon size="45">mdi-facebook</v-icon>
                    <v-icon size="45">mdi-telegram</v-icon>
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-content>
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
  import { Component } from 'vue-property-decorator'
  import { I_Menu } from '~/modules/intefaces'

  @Component
  export default class extends Base {

    constructor () {
      super()
    }

    scroll: number = 0
    rightDrawer: boolean = false
    number: string = '+375 (33) 333 33 33'
    menu: I_Menu.IMainManu[] = [
      {
        title: 'Главная',
        goTo: '',
        active: true,
        url: '/'
      },
      {
        title: 'Блог',
        goTo: '',
        active: false,
        url: '/blog'
      },
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
      this.$vuetify.goTo(anchor)
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
    width: 100%;
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

    &__contacts {
      font-size: 18px;
      transition: 250ms;
      cursor: pointer;

      &:hover {
        color: $color--menu--text-hover;
      }
    }
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
