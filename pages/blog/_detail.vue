<template>
  <v-container
    class="post-detail mb-5"
  >
    <v-row>
      <nuxt-link to="/blog">
        <v-btn
          color="darken-2"
          dark
        >
          <v-icon dark left>mdi-arrow-left</v-icon>
          Назад
        </v-btn>
      </nuxt-link>
      <span
        v-if="post && post.createAt"
        class="ml-auto"
      >{{ post.createAt }}</span>
    </v-row>
    <v-row
      class="post"
      justify="center"
    >
      <v-col cols="12">
        <h1
          v-if="post && post.title"
          class="text-center">{{ post.title }}</h1>
      </v-col>
      <v-col cols="12">
        <v-img
          v-if="post && post.images.length === 1"
          contain
          height="500"
          :src="post.images[0]"
        ></v-img>
        <v-carousel v-if="post && post.images.length > 1">
          <v-carousel-item
            v-for="(item,i) in post.images"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12">
        <p
          v-if="post && post.description"
          class="post-detail__description">{{ post.description }}</p>
      </v-col>
      <v-col
        v-if="post && post.comments.length > 0"
        cols="8"
        class="comments"
      >
        <p>Комментарии:</p>
        <div
          data-aos="fade-up"
          v-for="(comment, index) in post.comments"
          :key="index"
        >
          <v-card
            class="mb-2"
          >
            <v-card-actions>
              {{ index + 1 }}. {{ comment }}
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <v-col
        v-else
        cols="12"
      >
        <p>Комментариев нет</p>
      </v-col>
      <v-col cols="8">
        <h3 data-aos="fade-up">Добавить комментарий</h3>
        <v-form>
          <div data-aos="fade-up">
            <v-textarea
              class="mt-2"
              outlined
              v-model="message"
              label="Сообщение"
              color="blue-grey"
            />
          </div>
          <div>
            <v-btn
              data-aos="fade-up"
              color="darken-2"
              dark
              @click="addComment"
            >
              Отправить
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'
  import { I_Post } from '~/modules/intefaces'
  import { Posts } from '~/modules/api/Posts'

  @Component({
    validate ({ params }) {
      return !!params.detail
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    message: string = ''
    post: I_Post.IPost | null = null

    created () {
      this.run()
    }

    async run () {
      let posts: I_Post.IPost[] = []
      if (this.$store.state.posts.length > 0) {
        posts = this.$store.state.posts
        this.$store.commit('changePosts', posts)
      } else {
        posts = await Posts.Api.getPosts()
      }
      if (posts && posts.length) {
        const id = +this.$route.params.detail
        posts.every((item: I_Post.IPost) => {
          if (item.id === id) {
            this.post = item
            return false
          } else {
            return true
          }
        })
      }
    }

    addComment () {
      if (this.post && this.message.length > 0) {
        this.post.comments.push(this.message)
        this.message = ''
        const posts: I_Post.IPost[] = this.$store.state.posts
        posts.map((item: I_Post.IPost, index: number) => {
          if (item.id === this.post!.id) {
            posts.splice(index, 1, this.post!)
          }
        })
        Posts.Api.updatePosts(posts)
        this.$store.commit('changePosts', posts)
        this.$vuetify.goTo('.footer', this.options)
      }
    }

    get options () {
      return {
        duration: 800,
        offset: 500,
      }
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .post-detail {
    min-height: 65vh;

    &__description {
      font-size: 1.5rem;
    }
  }
</style>

