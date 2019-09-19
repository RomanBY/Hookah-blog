<template>
  <div class="contacts contacts-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="8">
          <h1
            data-aos="fade-right"
            class="display-2 font-weight-thin mb-4 contacts__title mt-4"
          >Напишите нам!</h1>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="8">
          <v-form
            lazy-validation
          >
            <div data-aos="fade-up">
              <v-text-field
                data-aos-anchor-placement="bottom-bottom"
                light
                v-model="name"
                :counter="10"
                label="Имя"
                color="blue-grey"
              ></v-text-field>
            </div>
            <div data-aos="fade-up">
              <v-text-field
                light
                v-model="contact"
                label="Контакты"
                color="blue-grey"
              ></v-text-field>
            </div>
            <div data-aos="fade-up">
              <v-textarea
                light
                outlined
                v-model="message"
                label="Сообщение"
                color="blue-grey"
              ></v-textarea>
            </div>
            <div data-aos="fade-up">
              <v-checkbox
                light
                v-model="checkbox"
                label="Согласен с политикой конфиденциальности"
              ></v-checkbox>
            </div>
            <div data-aos="fade-up">
              <v-btn
                light
                :disabled="!checkbox"
                color="white"
                class="mr-4"
                @click="showAlert = true"
              >
                Отправить
              </v-btn>
            </div>
          </v-form>
          <v-dialog
            v-model="showAlert"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">Данные отправлены</v-card-title>
              <v-card-text>
                Мы свяжемся с Вами в ближайшее время.
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="darken-1"
                  text
                  @click="showAlert = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Contacts extends Base {

    constructor () {
      super()
    }

    name: string = ''
    contact: string = ''
    message: string = ''
    checkbox: boolean = false
    showAlert: boolean = false


  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .contacts {
    &-wrap {
      background: white;
      min-height: 600px;
    }

    &__title {
      color: black;
    }
  }

</style>
