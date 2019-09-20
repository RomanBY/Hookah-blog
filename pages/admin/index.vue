<template>
    <div>
      <div v-if="login">
        <v-navigation-drawer
          :fixed="true"
        >
          <navigation
            @change-tab="tabNumber = $event"
          />
        </v-navigation-drawer>
        <v-tabs-items v-model="tabNumber">
          <v-tab-item>
            <analytics/>
          </v-tab-item>
          <v-tab-item>
            <create-post/>
          </v-tab-item>
          <v-tab-item>
            <posts/>
          </v-tab-item>
          <v-tab-item>
            <users/>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <div v-if="!login">
        <login
          @change-status="login = $event"
        />
      </div>
    </div>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'
  import Navigation from '~/components/Admin/Navigation.vue'
  import Analytics from '~/components/Admin/Analytics.vue'
  import CreatePost from '~/components/Admin/CreatePost.vue'
  import Posts from '~/components/Admin/Posts.vue'
  import Users from '~/components/Admin/Users.vue'
  import Login from '~/components/Admin/login.vue'

  @Component({
    layout: 'admin',
    components: {
      Navigation,
      Analytics,
      CreatePost,
      Posts,
      Users,
      Login
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    tabNumber: number = 0
    login: boolean = false

    created () {
      this.login = this.$store.state.token
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>

