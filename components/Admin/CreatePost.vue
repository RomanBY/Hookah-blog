<template>
  <v-dialog
    v-model="openEditor"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card style="overflow: hidden">
      <v-toolbar>
        <v-btn
          icon
          dark
          @click="closeEditor"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Создание поста</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn
            dark
            text
            @click="savePost"
            :disabled="!newPost"
          >Сохранить
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-row>
        <v-col cols="4">
          <v-list
            three-line
            subheader
          >
            <v-form ref="form">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Название поста*</v-list-item-title>
                  <v-text-field
                    class="mt-2"
                    ref="titlePost"
                    data-aos-anchor-placement="bottom-bottom"
                    v-model="titlePost"
                    :counter="20"
                    outlined
                    clearable
                    required
                    color="amber lighten-2"
                    :rules="[val => (val || '').length > 5 || 'Минимум 5 символов']"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Описание поста*</v-list-item-title>
                  <v-textarea
                    class="mt-2"
                    ref="description"
                    outlined
                    required
                    v-model="description"
                    color="amber lighten-2"
                    :counter="100"
                    :rules="[val => (val || '').length > 15 || 'Минимум 15 символов']"
                  ></v-textarea>
                </v-list-item-content>
              </v-list-item>
            </v-form>
          </v-list>
          <v-divider></v-divider>
          <v-list two-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Добавление изображений</v-list-item-title>
                <v-list-item-subtitle>Добавлять ссылки через запятую</v-list-item-subtitle>
                <v-textarea
                  class="mt-2"
                  ref="images"
                  outlined
                  v-model="images"
                  color="amber lighten-2"
                ></v-textarea>
              </v-list-item-content>
            </v-list-item>
            <v-btn
              class="mt-4 ml-3"
              @click="previewPost"
            >
              Предпросмотр
            </v-btn>
          </v-list>
        </v-col>
        <v-col cols="8">
          <post-preview
            v-if="newPost"
            :item="newPost"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Prop } from 'nuxt-property-decorator'
  import { I_Post } from '~/modules/intefaces'
  import PostPreview from '~/components/Admin/PostPreview.vue'
  import { Posts } from '~/modules/api/Posts'

  @Component({
    components: {
      PostPreview
    }
  })
  export default class CreatePost extends Base {

    constructor () {
      super()
    }

    @Prop() openEditor!: boolean
    titlePost: string = ''
    description: string = ''
    images: string = ''
    date: string = ''
    newPost: I_Post.IPost | null = null

    created () {
      const date: any = new Date()
      this.date = date.getDate() + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
    }

    closeEditor () {
      this.$emit('close-editor', true)
      this.newPost = null
    }

    savePost () {
      if (this.confirm() && this.newPost) {
        this.$emit('close-editor', true)
        const posts: I_Post.IPost[] = this.$store.state.posts
        posts.splice(0, 0, this.newPost)
        Posts.Api.updatePosts(posts)
        this.$store.commit('changePosts', posts)
        this.titlePost = ''
        this.description = ''
        this.images = ''
        // @ts-ignore
        this.$refs.form.resetValidation()
        this.newPost = null
      }
    }

    previewPost () {
      if (this.confirm()) {
        this.newPost = {
          title: this.titlePost,
          description: this.description,
          comments: [],
          createAt: this.date,
          id: this.getId(),
          images: this.getImages()
        }
      }
    }

    getId (): number {
      const posts: I_Post.IPost[] = this.$store.state.posts
      let maxId: number = 0
      posts.map(item => {
        if (item.id > maxId) maxId = item.id
      })
      return maxId + 1
    }

    getImages (): string[] {
      if (this.images && this.images.length > 0) {
        return this.images.split(' ').join('').split(',')
      } else {
        return []
      }
    }

    confirm () {
      // @ts-ignore
      return !!this.$refs.form.validate()
    }

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>
