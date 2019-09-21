<template>
  <v-container class="blog">
    <post
      v-if="posts"
      v-for="(post, index) in posts"
      :key="index"
      :item="post"
    />
  </v-container>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'
  import Post from '~/components/Blog/Post.vue'
  import { I_Post } from '~/modules/intefaces'
  import { Posts } from '~/modules/api/Posts'

  @Component({
    components: {
      Post
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    posts: I_Post.IPost[] | null = null

    created () {
      this.run()
    }

    async run () {
      if (this.$store.state.posts.length > 0) {
        this.posts = this.$store.state.posts
      } else {
        this.posts = await Posts.Api.getPosts()
        if (this.posts && this.posts.length > 0) {
          this.$store.commit('changePosts', this.posts)
        }
      }
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .blog {
    min-height: 90vh;
  }
</style>

