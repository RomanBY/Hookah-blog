<template>
  <v-row
    class="login"
    justify="center"
  >
    <v-col
      cols="8"
      class="my-auto"
    >
      <h1>Добавление пользователя</h1>
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
                @click="addUser"
              >Добавить</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class Users extends Base {

    constructor () {
      super()
    }

    user: string = ''
    password: string | number = ''

    addUser () {

    }


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>
