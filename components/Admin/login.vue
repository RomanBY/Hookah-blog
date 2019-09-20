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
        <h1>Войти в панель администратора</h1>
        <v-card>
          <v-form>
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
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  color="amber lighten-2"
                  v-model="password"
                  label="Password"
                  @click:append="show = !show"
                  type="password"
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
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Login extends Base {

    constructor () {
      super()
    }


    user: string = ''
    password: string | number = ''

    getLogin () {
      this.$store.commit('changeToken', true)
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
