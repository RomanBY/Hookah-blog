<template>
  <v-row
    class="post"
    justify="center"
    v-if="posts"
  >
    <v-col cols="8">
      <v-data-table
        :headers="headers"
        :items="posts"
        sort-by="calories"
        class="elevation-5 mt-5 table"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Редактор блога</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <div class="flex-grow-1"></div>
            <v-btn
              dark
              class="mb-2"
              @click="addPost"
            >Добавить пост
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-tooltip
            left
            color="black"
          >
            <template v-slot:activator="{ on }">
              <v-icon
                class="mr-2"
                @click="getViewItem(item)"
                v-on="on"
              >
                mdi-square-edit-outline
              </v-icon>
            </template>
            <span>Просмотр</span>
          </v-tooltip>
          <v-tooltip
            right
            color="black"
          >
            <template v-slot:activator="{ on }">
              <v-icon
                @click="deleteItem(item)"
                v-on="on"
              >
                mdi-delete
              </v-icon>
            </template>
            <span>Удалить</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12">
      <v-dialog
        v-model="view"
        max-width="1200"
      >
        <v-card v-if="viewItem" class="mx-auto">
          <v-card-title>
            {{ viewItem.title }}
            <span class="ml-5">
              {{ viewItem.createAt }}
            </span>
          </v-card-title>
          <div class="overflow-hidden">
            <v-row class="py-4 pl-4">
              <v-col cols="4">
                <v-container
                  v-if="viewItem.images.length > 0"
                  fluid
                >
                  <v-row>
                    <v-col
                      v-for="(image, index) in viewItem.images"
                      :key="index"
                      class="d-flex child-flex"
                      cols="6"
                    >
                      <v-card flat tile class="d-flex">
                        <v-img
                          :src="image"
                          :lazy-src="image"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
              <v-col cols="4">
                <v-card-title>
                  Описание
                </v-card-title>
                <v-card-text class="font-weight-medium">
                  {{ viewItem.description }}
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-card-title>
                  Комментарии
                </v-card-title>
                <div v-if="viewItem.comments.length >= 1">
                  <v-list-item
                    v-for="(comment, index) in viewItem.comments"
                    :key="index"
                  >{{ index + 1 }}: {{ comment }}
                  </v-list-item>
                </div>
                <v-list-item v-else>
                  Комментариев нет
                </v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-dialog>
      <create-post
        :open-editor="editor"
        @close-editor="closeEditor($event)"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import { I_Post } from '~/modules/intefaces'
  import { Posts as Blog } from '~/modules/api/Posts'
  import CreatePost from '~/components/Admin/CreatePost.vue'

  @Component({
    components: {
      CreatePost
    }
  })
  export default class Posts extends Base {

    constructor () {
      super()
    }

    posts: I_Post.IPost[] | null = []
    headers: object[] = [
      {
        text: 'Наименование поста',
        align: 'left',
        sortable: false,
        value: 'title',
        class: 'table__cell'
      },
      {
        text: 'id',
        value: 'id',
        align: 'center',
        class: 'table__cell'
      },
      {
        text: 'Комментарии',
        value: 'comments.length',
        align: 'center',
        class: 'table__cell'
      },
      {
        text: 'Кол-во изображений',
        value: 'images.length',
        align: 'center',
        class: 'table__cell'
      },
      {
        text: 'Дата создания',
        value: 'createAt',
        align: 'center',
        class: 'table__cell'
      },
      {
        text: 'Редактирование',
        value: 'action',
        sortable: false,
        align: 'center',
        class: 'table__cell'
      }
    ]
    editor: boolean = false
    view: boolean = false
    viewItem: I_Post.IPost | null = null

    created () {
      this.run()
    }

    async run () {
      if (this.$store.state.posts.length > 0) {
        this.posts = this.$store.state.posts
      } else {
        this.posts = await Blog.Api.getPosts()
        this.$store.commit('changePosts', this.posts)
      }
    }

    getViewItem (item: I_Post.IPost) {
      this.viewItem = item
      this.view = true
    }

    deleteItem (item: I_Post.IPost) {
      if (this.posts && this.posts.length > 0) {
        this.posts.every((post: I_Post.IPost, index) => {
          if (item._id === post._id) {
            this.posts!.splice(index, 1)
            return false
          } else {
            return true
          }
        })
        Blog.Api.deletePost(item._id!)
        this.$store.commit('changePosts', this.posts)
      }
    }

    addPost () {
      this.editor = true
    }

    closeEditor () {
      this.editor = false
    }


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .table {
    &__cell {
      font-size: 1.5rem;
    }
  }

</style>
