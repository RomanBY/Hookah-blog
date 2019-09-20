<template>
  <v-row
    class="post"
    justify="center"
  >
    <h1>Posts</h1>
  </v-row>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Posts extends Base {

    constructor () {
      super()
    }


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>
