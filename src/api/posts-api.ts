import { axiosInstance } from './axios-config/axios-config';
import { type IImageData } from './blogs-api';

export const postsAPI = {
  async putLikeOrDislikeToPost(postId: string, likeStatus: LikeStatuses) {
    return await axiosInstance.put(`/posts/${postId}/like-status`, {
      likeStatus,
    });
  },
  async getCommentsOfPost(postId: string) {
    // todo add query for comments
    return await axiosInstance.get(`/posts/${postId}/comments`);
  },
  async createCommentForPost(postId: string, commentText: string) {
    return await axiosInstance.post(`/posts/${postId}/comments`, {
      content: commentText,
    });
  },
  async getAllPosts() {
    // todo add query
    return await axiosInstance.get('/posts');
  },
  async getPostById(postId: string) {
    return await axiosInstance.get<IPost>(`/posts/${postId}`);
  },
};

export interface IPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
  extendedLikesInfo: IPostExtendedLikesInfo;
  images: {
    main: IImageData;
  };
}
export interface ILikesInfo {
  likesCount: number;
  dislikesCount: number;
  myStatus: LikeStatuses;
}
export interface IPostExtendedLikesInfo extends ILikesInfo {
  newestLikes: INewestLike[];
}
export interface INewestLike {
  addedAt: string;
  userId: string;
  login: string;
}

export enum LikeStatuses { // todo move enum to somewhere
  LIKE = 'Like',
  DISLIKE = 'Dislike',
  NONE = 'None',
}
