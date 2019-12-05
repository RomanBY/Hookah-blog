<template>
  <div class="contacts contacts-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="11"
          sm="8"
        >
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
        <v-col
          cols="11"
          sm="8"
        >
          <v-form
            lazy-validation
          >
            <div data-aos="fade-up">
              <v-text-field
                ref="name"
                data-aos-anchor-placement="bottom-bottom"
                light
                v-model="name"
                :counter="10"
                label="Имя"
                color="blue-grey"
                :rules="[val => (val || '').length > 2 || 'Введите имя']"
              />
            </div>
            <div data-aos="fade-up">
              <v-text-field
                ref="contact"
                class="mb-3"
                light
                v-model="contact"
                label="Контакты"
                color="blue-grey"
                :counter="20"
                :rules="[val => (val || '').length > 5 || 'Введите контакты для связи']"
              />
            </div>
            <div data-aos="fade-up">
              <v-textarea
                ref="message"
                light
                outlined
                v-model="message"
                label="Сообщение"
                color="blue-grey"
                :counter="100"
              />
            </div>
            <div data-aos="fade-up">
              <v-checkbox
                light
                v-model="checkbox"
                label="Согласен с политикой конфиденциальности"
              />
            </div>
            <div data-aos="fade-up">
              <v-btn
                light
                :disabled="!checkbox"
                color="white"
                class="mr-4"
                @click="getFeedback"
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
  import { Component } from 'nuxt-property-decorator'

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

    getFeedback () {
      this.showAlert = true
      this.name = ''
      this.contact = ''
      this.message = ''
      this.checkbox = false
      Object.keys(this.form).forEach(f => {
        // @ts-ignore
        this.$refs[f].reset()
      })
    }

    get form () {
      return {
        name: this.name,
        contact: this.contact,
        message: this.message
      }
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .contacts {
    &-wrap {
      background: white;
      min-height: 600px;
      overflow: hidden;
    }

    &__title {
      color: black;
    }
  }

</style>
