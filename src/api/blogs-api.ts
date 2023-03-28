import { axiosInstance } from './axios-config'

export const blogsAPI = {
  async subscribeToBlog (blogId: string) {
    return await axiosInstance.post(`/blogs/${blogId}/subscription`)
  },
  async unSubscribeFromBlog (blogId: string) {
    return await axiosInstance.delete(`/blogs/${blogId}/subscription`)
  },
  async getBlogs () { // todo add query
    return await axiosInstance.get<IPaginatorWithItems<IBlog[]>>('/blogs')
  },
  async getBlogById (blogId: number) {
    return await axiosInstance.get<IBlog>(`/blog/${blogId}`)
  },
}

interface IPaginatorWithItems <I> {
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
