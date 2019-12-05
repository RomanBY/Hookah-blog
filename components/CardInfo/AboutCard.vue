<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <div data-aos="fade-up">
            <v-container class="py-0">
              <v-row class="justify-center">
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-row class="mx-5">
                    <v-col
                      cols="12"
                      class="about__title text-center text-sm-left"
                    >О нас
                    </v-col>
                    <v-col
                      cols="12"
                      class="about__text text-center text-sm-left"
                    >Мы динамично развивающаяся команда, работающая в сфере кальянного кейтеринга в Минске
                      и
                      Минской области.
                      Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.
                    </v-col>
                    <v-col
                      cols="12"
                      class="about__text text-center text-sm-left"
                    >Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  data-aos="fade-up"
                  class="d-none d-sm-flex"
                >
                  <v-img src="https://kalyango.by/wp-content/uploads/2017/07/7.jpg"/>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class AboutCard extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .about {
    &__title {
      font-size: 30px;
    }
    &__text {
      font-size: 21px;
    }
  }

  @media (max-width: 1263px){
    .about {
      &__title {
        font-size: 24px;
      }
      &__text {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 800px){
    .about {
      &__title {
        font-size: 20px;
        padding-bottom: 0;
      }
      &__text {
        font-size: 14px;
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 700px){
    .about {
      &__title {
        font-size: 18px;
        padding-bottom: 0;
        padding-top: 0;
      }
      &__text {
        font-size: 12px;
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 599px){
    .about {
      &__title {
        font-size: 22px;
        padding-bottom: 0;
        padding-top: 0;
      }
      &__text {
        font-size: 15px;
        padding-bottom: 0;
      }
    }
  }

</style>
