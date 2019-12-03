<template>
  <v-container class="login">
    <v-row
      class="login"
      justify="center"
    >
      <v-col
        cols="8"
        class="my-auto"
      >
        <v-card>
          <v-card-title>
            Вход в панель администратора
          </v-card-title>
          <v-form class="mt-5">
            <v-row
              class="post"
              justify="center"
            >
              <v-col cols="8">
                <v-text-field
                  color="amber lighten-2"
                  label="User"
                  single-line
                  v-model="user"
                  :rules="[val => (val || '').length > 2 || 'Введите имя']"
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  color="amber lighten-2"
                  v-model="password"
                  label="Password"
                  @click:append="show = !show"
                  type="password"
                  :rules="[val => (val || '').length > 5 || 'Введите пароль']"
                ></v-text-field>
              </v-col>
              <v-col
                cols="8"
              >
                <v-btn
                  large
                  @click="getLogin"
                >Вход</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class Login extends Base {

    constructor () {
      super()
    }


    user: string = ''
    password: string | number = ''

    getLogin () {
      this.$store.commit('changeLogin', true)
      this.$emit('change-status', true)
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .login {
    height: 100vh;
  }

</style>
