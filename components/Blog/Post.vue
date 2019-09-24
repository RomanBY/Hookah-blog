<template>
  <v-row
    v-if="item"
    class="post"
    justify="center"
  >
    <v-col cols="12">
      <div data-aos="fade-up">
        <v-card>
          <v-container class="py-0">
            <v-row>
              <v-col
                cols="6"
              >
                <v-row class="mx-5 post__block">
                  <v-col
                    cols="12"
                    class="display-3"
                  >
                    <h5>
                      {{ item.title }}
                    </h5>
                    <div class="d-flex">
                      <div
                        v-if="item.comments && item.comments.length > 0"
                        class="d-flex mr-5">
                        <v-icon color="darken-2">mdi-message-text</v-icon>
                        <span class="post__comment ml-2">{{ item.comments.length }}</span>
                      </div>
                      <div
                        v-if="item.images && item.images.length > 0"
                        class="d-flex">
                        <v-icon color="darken-2">mdi-image-outline</v-icon>
                        <span class="post__comment ml-2">{{ item.images.length }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col
                    cols="12"
                    class="post__text"
                  >{{ item.description }}
                  </v-col>
                  <v-col class="mt-auto">{{ item.createAt }}</v-col>
                  <nuxt-link
                    :to="`/blog/${item.id}`"
                    class="d-flex"
                  >
                    <v-btn
                      class="mt-auto mb-2"
                      dark
                      large
                    >Подробнее
                    </v-btn>
                  </nuxt-link>
                </v-row>
              </v-col>
              <v-col
                cols="6"
                data-aos="fade-up"
              >
                <v-img :src="item.images[0]"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Base from '../../core/Base'
  import { Component, Prop } from 'vue-property-decorator'
  import { I_Post } from '~/modules/intefaces'

  @Component
  export default class AboutCard extends Base {

    constructor () {
      super()
    }

    @Prop({
      required: true,
      type: Object
    }) item!: I_Post.IPost

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .post {
    &__text {
      font-size: 1.6rem;
    }

    &__comment {
      font-size: 1.5rem;
    }

    &__block {
      height: 100%;
    }
  }

</style>
