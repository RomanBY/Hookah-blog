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
        v-model="editor"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar>
            <v-btn icon dark @click="editor = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-items>
              <v-btn dark text @click="editor = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
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
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component } from 'vue-property-decorator'
  import { I_Post } from '~/modules/intefaces'
  import { Posts as Blog } from '~/modules/api/Posts'

  @Component
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
      }
    }

    getViewItem (item: I_Post.IPost) {
      console.log(item)
      this.viewItem = item
      this.view = true
    }

    deleteItem (item: I_Post.IPost) {
      if (this.posts && this.posts.length > 0) {
        this.posts.map((post: I_Post.IPost, index) => {
          if (item.id === post.id) {
            this.posts!.splice(index, 1)
            return
          }
        })
        this.savePosts(this.posts)
      }
    }

    addPost () {
      this.editor = true
    }

    savePosts (posts: I_Post.IPost[]) {
      this.$store.commit('changePosts', posts)
    }


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .post {
    height: 100vh;
  }

  .table {
    &__cell {
      font-size: 1.5rem;
    }
  }

</style>
