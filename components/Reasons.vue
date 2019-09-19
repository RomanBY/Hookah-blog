<template>
  <div class="reasons reasons-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <h1 class="display-2 font-weight-thin mb-4 text-center reasons__title mt-4">Hookah cartel – это новый уровень кальянного кейтеринга.</h1>
      </v-row>
      <v-row>
        <v-col
          :data-aos="index === 0 ? 'fade-up-right' : index === reasons.length - 1 ? 'fade-up-left' : 'fade-up'"
          v-for="(reason, index) in reasons"
          :key="index"
          cols="4"
        >
         <reason-card
           :item="reason"
         />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'vue-property-decorator'
  import { I_Reason } from '~/modules/intefaces'
  import ReasonCard from '~/components/CardInfo/ReasonCard.vue'

  @Component({
    components: {
      ReasonCard
    }
  })
  export default class Reasons extends Base {

    constructor () {
      super()
    }

    reasons: I_Reason.IReason[] = [
      {
        title: 'Уникальность',
        description: 'Для кальянного бара  мы предлагаем не только традиционные арабские кальяны, но и  эксклюзивные дизайнерские кальяны ручной работы , которые несомненно  подчеркнут оригинальность, самобытность и статус Вашего заведения.  Кальяны подбираются по принципу соответствия их стилевого решения дизайну интерьера заведения.',
        imageUrl: 'https://hookahcartel.ru/assets/images/icons/star.svg'
      },
      {
        title: 'Квалификация',
        description: 'Мы проводим  мастер-классы и тренинги  для сотрудников  фирмы. Все работники проходят  ежемесячную аттестацию  по подтверждению своей квалификации. За каждым заведением-партнером закрепляется  супервайзер  от нашей компании, который  контролирует процесс работы персонала.',
        imageUrl: 'https://hookahcartel.ru/assets/images/icons/users.svg'
      },
      {
        title: 'Качество',
        description: 'Для своих кальянов  мы используем зарубежный уголь и табак высочайшего качества  премиальных брендов , таких как: Nakhla, Fumari, Golden Layalina, Starbuzz, Tangiers. Помимо традиционных кальянов, наше меню содержит оригинальные кальяны на различных овощах и фруктах, а также незабываемые кальянные коктейли.\n',
        imageUrl: 'https://hookahcartel.ru/assets/images/icons/likelike.svg'
      }
    ]

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .reasons {
    &-wrap {
      background: white;
      min-height: 600px;
    }

    &__title {
      color: black;
    }
  }

</style>
