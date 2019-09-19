<template>
  <v-container class="post-detail">
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
      <span class="ml-auto">{{ post.createAt }}</span>
    </v-row>
    <v-row
      class="post"
      justify="center"
    >
      <v-col cols="12">
        <h1 class="text-center">{{ post.title }}</h1>
      </v-col>
      <v-col cols="12">
        <v-img
          contain
          height="500"
          :src="post.images[0]"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <p class="post-detail__description">{{ post.description }}</p>
      </v-col>
      <v-col
        v-if="post.comments.length > 0"
        cols="12"
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
    post: I_Post.IPost = {
      title: 'Пост1',
      id: 1,
      description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
        'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
      images: ['https://kalyango.by/wp-content/uploads/2017/07/7.jpg'],
      comments: ['qwe', 'ewq', 'asdf'],
      createAt: '10.09.2019'
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

