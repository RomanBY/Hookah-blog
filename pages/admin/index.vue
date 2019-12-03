<template>
    <div>
      <div v-if="login">
        <v-navigation-drawer
          :fixed="true"
        >
          <navigation
            :tab-number="tabNumber"
            @change-tab="tabNumber = $event"
          />
        </v-navigation-drawer>
        <v-tabs-items
          class="tabs-items"
          v-model="tabNumber"
        >
          <v-tab-item>
            <analytics/>
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
  import { Component } from 'nuxt-property-decorator'
  import Navigation from '~/components/Admin/Navigation.vue'
  import Analytics from '~/components/Admin/Analytics.vue'
  import Posts from '~/components/Admin/Posts.vue'
  import Users from '~/components/Admin/Users.vue'
  import Login from '~/components/Admin/Login.vue'

  @Component({
    layout: 'admin',
    components: {
      Navigation,
      Analytics,
      Posts,
      Users,
      Login
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    tabNumber: number = 1
    login: boolean = false

    created () {
      this.login = this.$store.state.login
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .tabs-items {
    background: #303030!important;
  }

</style>

