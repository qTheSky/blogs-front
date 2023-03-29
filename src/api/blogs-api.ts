import { axiosInstance } from './axios-config/axios-config'
import { type IPost } from './posts-api'
import { type IComment } from './comments-api'

export const blogsAPI = {
  // public api
  async subscribeToBlog (blogId: string) {
    await axiosInstance.post(`/blogs/${blogId}/subscription`)
  },
  async unSubscribeFromBlog (blogId: string) {
    await axiosInstance.delete(`/blogs/${blogId}/subscription`)
  },
  async getBlogs () { // todo add query
    return await axiosInstance.get<IPaginatorWithItems<IBlog[]>>('/blogs')
  },
  async getPostsOfBlog (blogId: string) {
    return await axiosInstance.get<IPaginatorWithItems<IPost[]>>(`/blogs/${blogId}/posts`)
  },
  async getBlogById (blogId: number) {
    return await axiosInstance.get<IBlog>(`/blog/${blogId}`)
  },
  // public api
  // bloggers api
  async getAllCommentsForBlogger () { // todo add query
    return await axiosInstance.get<IPaginatorWithItems<IComment[]>>('/blogger/blogs/comments')
  },
  async updateBlog (blogId: string, model: UpdateBlogModel) {
    await axiosInstance.put(`/blogger/blogs/${blogId}`, model)
  },
  async deleteBlog (blogId: string) {
    await axiosInstance.delete(`/blogger/blogs/${blogId}`)
  },
  async createBlog (model: CreateBlogModel) {
    return await axiosInstance.post<IBlog>('/blogger/blogs', model)
  },
  async getBlogsOfCurrentUser () { // todo add query
    return await axiosInstance.get('/blogger/blogs')
  },
  async createPostForBlog (blogId: string, model: CreatePostModel) {
    return await axiosInstance.post<IPost>(`/blogger/${blogId}/posts`, model)
  },
  async updatePost (blogId: string, postId: string, model: UpdatePostModel) {
    await axiosInstance.put(`/blogger/blogs/${blogId}/posts/${postId}`, model)
  },
  async deletePostById (blogId: string, postId: string) {
    await axiosInstance.delete(`/blogger/blogs/${blogId}/posts/${postId}`)
  },
  async banUserInBlog (userId: string, model: BanUserInBlogModel) {
    await axiosInstance.put(`/blogger/users/${userId}/ban`, model)
  },
  async getBannedUsersInBlog (blogId: string) {
    return await axiosInstance.get<IPaginatorWithItems<IBannedUserInBlog[]>>(`/blogger/users/blog/${blogId}`)
  },
  // bloggers api
}

interface IPaginatorWithItems<I> {
  pagesCount: number
  page: number
  pageSize: number
  totalCount: number
  items: I
}

interface IBlog {
  id: string
  name: string
  description: string
  websiteUrl: string
  createdAt: string
  isMembership: boolean
  images: {
    wallPaper: IImageData
    main: IImageData[]
  }
}

export interface IImageData {
  url: string
  width: number
  height: number
  fileSize: number
}

export interface CreateBlogModel {
  name: string
  description: string
  websiteUrl: string
}

export interface UpdateBlogModel {
  name: string
  description: string
  websiteUrl: string
}

export interface CreatePostModel {
  title: string
  shortDescription: string
  content: string
}

export interface UpdatePostModel {
  title: string
  shortDescription: string
  content: string
}

export interface BanUserInBlogModel {
  isBanned: boolean
  banReason: string
  blogId: string
}

export interface IBannedUserInBlog {
  id: string
  login: string
  banInfo: { isBanned: boolean, banDate: string, banReason: string }
}
