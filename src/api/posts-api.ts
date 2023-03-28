import { axiosInstance } from './axios-config'
import { type IImageData } from './blogs-api'

export const postsAPI = {
  async putLikeOrDislikeToPost (postId: string, likeStatus: LikeStatuses) {
    return await axiosInstance.put(`/posts/${postId}/like-status`, { likeStatus })
  },
  async getAllPosts () { // todo add query
    return await axiosInstance.get('/posts')
  },
  async getPostById (postId: string) {
    return await axiosInstance.get<IPost>(`/posts/${postId}`)
  },
}

export interface IPost {
  id: string
  title: string
  shortDescription: string
  content: string
  blogId: string
  blogName: string
  createdAt: string
  extendedLikesInfo: IPostExtendedLikesInfo
  images: {
    main: IImageData
  }
}
export interface IExtendedLikesInfo {
  likesCount: number
  dislikesCount: number
  myStatus: LikeStatuses
}
export interface IPostExtendedLikesInfo extends IExtendedLikesInfo {
  newestLikes: INewestLike[]
}
export interface INewestLike {
  addedAt: string
  userId: string
  login: string
}

export enum LikeStatuses { // todo move enum to somewhere
  LIKE = 'Like',
  DISLIKE = 'Dislike',
  NONE = 'None'
}
