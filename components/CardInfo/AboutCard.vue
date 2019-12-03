<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <div data-aos="fade-up">
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-row class="mx-5">
                    <v-col
                      cols="12"
                      class="display-3"
                    >О нас
                    </v-col>
                    <v-col
                      cols="12"
                      class="about__text"
                    >Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске
                      и
                      Минской области.
                      Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.
                    </v-col>
                    <v-col
                      cols="12"
                      class="about__text"
                    >Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  data-aos="fade-up"
                >
                  <v-img src="https://kalyango.by/wp-content/uploads/2017/07/7.jpg"></v-img>
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
    &__text {
      font-size: 2rem;
    }
  }

</style>
