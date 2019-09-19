<template>
  <v-container class="blog">
    <post
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

  @Component({
    components: {
      Post
    }
  })
  export default class extends Base {

    constructor () {
      super()
    }

    posts: I_Post.IPost[] = [
      {
        title: 'Пост1',
        id: 1,
        description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
          'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
        images: ['https://kalyango.by/wp-content/uploads/2017/07/7.jpg'],
        comments: ['qwe', 'ewq', 'asdf'],
        createAt: '10.09.2019'
      },
      {
        title: 'Пост2',
        id: 2,
        description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
          'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
        images: ['https://kalyango.by/wp-content/uploads/2017/07/7.jpg'],
        comments: ['qwe', 'ewq', 'asda', 'asdsaa'],
        createAt: '01.09.2019'
      },
      {
        title: 'Пост3',
        id: 3,
        description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
          'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
        images: ['https://kalyango.by/wp-content/uploads/2017/07/7.jpg'],
        comments: ['qwe', 'ewq'],
        createAt: '22.08.2019'
      }
    ]

  }
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .blog {
    min-height: 65vh;
  }
</style>

