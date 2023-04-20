import { axiosInstance } from './axios-config/axios-config';
import { type IRegistration } from '../features/auth/interfaces/registration.interface';
import { ILogin } from '../features/auth/interfaces/login.interface';

export const authAPI = {
  async passwordRecovery(email: string): Promise<void> {
    await axiosInstance.post('/auth/password/recovery', { email });
  },
  async confirmPassword(recoveryCode: string, newPassword: string): Promise<void> {
    await axiosInstance.post('/auth/new-password', {
      recoveryCode,
      newPassword,
    });
  },
  async login(data: ILogin) {
    return await axiosInstance.post<{ accessToken: string }>('/auth/login', data);
  },
  async refreshToken() {
    return await axiosInstance.post<{ accessToken: string }>('/auth/refresh-token', {});
  },
  async confirmRegistration(confirmationCodeFromEmail: string) {
    return await axiosInstance.post('/auth/registration-confirmation', {
      code: confirmationCodeFromEmail,
    });
  },
  async register(data: IRegistration) {
    return await axiosInstance.post('/auth/registration', data);
  },
  async resendEmail(email: string) {
    return await axiosInstance.post('/auth/registration-email-resending', {
      email,
    });
  },
  async logout() {
    return await axiosInstance.post('/auth/logout', {});
  },
  async me() {
    return await axiosInstance.post<MeResponse>('/auth/logout', {});
  },
};

export interface MeResponse {
  email: string;
  login: string;
  userId: string;
}
