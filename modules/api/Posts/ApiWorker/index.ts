import Base from '../../Base'
import { I_Post } from '~/modules/intefaces'
import axios from 'axios'

export default class ApiWorker extends Base {
  private static readonly MAIN_PATH: string = '/posts'

  public static async getPosts (): Promise<any> {
    const { status, data } = await axios.get(this.MAIN_PATH)
    if (status === 200) {
      if (data) {
        return data
      } else {
        throw new Error(`Request by api ${this.MAIN_PATH} returned status ${status}`)
      }
    }
  }

  public static async getPost (id: string): Promise<any> {
    const { status, data } = await axios.get(`/post/${id}`)
    if (status === 200) {
      if (data) {
        return data
      } else {
        throw new Error(`Request by api ${this.MAIN_PATH} returned status ${status}`)
      }
    }
  }

  public static async updatePost (post: I_Post.IPost): Promise<void> {
    const { status, data } = await axios.put(`/post/${post._id}`, post)
    if (status !== 200) throw new Error(`Request by api /post returned status ${status}`)
  }

  public static async addPost (post: I_Post.IPost): Promise<void> {
    const { status, data } = await axios.post('/post', post)
    if (status !== 200) throw new Error(`Request by api /post returned status ${status}`)
  }

  public static async deletePost (id: string): Promise<void> {
    const { status, data } = await axios.delete(`/post/${id}`)
    if (status !== 200) throw new Error(`Request by api /post returned status ${status}`)
  }

}
