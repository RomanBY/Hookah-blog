import Base from '../../Base'
import { I_Post } from '~/modules/intefaces'

export default class ApiWorker extends Base {

  public static async getPosts (): Promise<I_Post.IPost[]> {
    return await new Promise((resolve) => {
      setTimeout( async () => {
        return resolve([
          {
            title: 'Пост 1',
            id: 1,
            description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
              'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
            images: ['https://kalyango.by/wp-content/uploads/2017/07/7.jpg','https://кальян.рф/wp-content/uploads/2014/12/kejtering-kaljanov-2.jpg'],
            comments: ['qwe', 'ewq', 'asdf'],
            createAt: '10.09.2019'
          },
          {
            title: 'Пост 2',
            id: 2,
            description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
              'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
            images: ['https://кальян.рф/wp-content/uploads/2014/12/kejtering-kaljanov-2.jpg','https://avatars.mds.yandex.net/get-zen_doc/96506/pub_5b17e038c71a92586b315244_5b17e0dd3c50f7e2e1f54dd4/scale_1200', 'https://кальян.рф/wp-content/uploads/2014/12/kaljannyj-kejtering-1.jpg'],
            comments: ['qwe', 'ewq', 'asda', 'asdsaa'],
            createAt: '01.09.2019'
          },
          {
            title: 'Пост 3',
            id: 3,
            description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
              'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
            images: ['https://avatars.mds.yandex.net/get-zen_doc/96506/pub_5b17e038c71a92586b315244_5b17e0dd3c50f7e2e1f54dd4/scale_1200'],
            comments: ['qwe', 'ewq'],
            createAt: '22.08.2019'
          },
          {
            title: 'Пост 4',
            id: 4,
            description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
              'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
            images: ['https://кальян.рф/wp-content/uploads/2014/12/kaljannyj-kejtering-1.jpg', 'https://кальян.рф/wp-content/uploads/2014/12/kaljannyj-kejtering-1.jpg', 'http://catering-fresh.com/upload/medialibrary/048/048e5a5faa15042059c31331543c2068.jpg'],
            comments: [],
            createAt: '10.08.2019'
          },
          {
            title: 'Пост 5',
            id: 5,
            description: 'Мы динамично развивающаяся команда, более 4-х лет работающая в сфере кальянного кейтеринга в Минске и Минской области. Наши основные клиенты – это рекламные агентства, крупные компании и частные лица.\n' +
              'Каждый наш новый кальян - это уникальный продукт, приготовленный исключительно для Вас.',
            images: ['http://catering-fresh.com/upload/medialibrary/048/048e5a5faa15042059c31331543c2068.jpg'],
            comments: ['qwe'],
            createAt: '22.06.2019'
          }
        ])
      }, 800)
    })
  }
}