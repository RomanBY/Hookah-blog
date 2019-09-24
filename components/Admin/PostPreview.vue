<template>
  <div data-aos="fade-left">
    <v-row
      justify="center"
      align="center"
      class="mt-5"
    >
      <v-col cols="10">
        <v-card
          v-if="item"
          class=""
        >
          <v-card-title>
            {{ item.title }}
            <span class="ml-5">{{ item.createAt }}</span>
          </v-card-title>
          <div class="overflow-hidden">
            <v-row class="py-4 pl-4">
              <v-col cols="4">
                <v-container
                  v-if="item.images.length > 0"
                  fluid
                >
                  <v-row>
                    <v-col
                      v-for="(image, index) in item.images"
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
                  {{ item.description }}
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-card-title>
                  Комментарии
                </v-card-title>
                <div v-if="item.comments.length >= 1">
                  <v-list-item
                    v-for="(comment, index) in item.comments"
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
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Prop } from 'vue-property-decorator'
  import { I_Post } from '~/modules/intefaces'

  @Component
  export default class PostPreview extends Base {

    constructor () {
      super()
    }

    @Prop() item!: I_Post.IPost


  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

</style>
