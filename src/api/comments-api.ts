import { type ILikesInfo, type LikeStatuses } from './posts-api';
import { axiosInstance } from './axios-config/axios-config';

export const commentsAPI = {
  async putLikeOrDislikeToComment(commentId: string, likeStatus: LikeStatuses) {
    return await axiosInstance.put(`/comments/${commentId}/like-status`, {
      likeStatus,
    });
  },
  async updateComment(commentId: string, content: string) {
    return await axiosInstance.put(`/comments/${commentId}`, { content });
  },
  async deleteComment(commentId: string) {
    return await axiosInstance.delete(`/comments/${commentId}`);
  },
  async getCommentById(commentId: string) {
    return await axiosInstance.get<IComment>(`/comments/${commentId}`);
  },
};

export interface IComment {
  id: string;
  content: string;
  commentatorInfo: {
    userId: string;
    userLogin: string;
  };
  createdAt: string;
  likesInfo: ILikesInfo;
}
