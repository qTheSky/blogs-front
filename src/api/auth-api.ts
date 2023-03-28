import { axiosInstance } from './axios-config'

export const authAPI = {
  async passwordRecovery (email: string): Promise<void> {
    await axiosInstance.post('/auth/password/recovery', { email })
  },
  async confirmPassword (recoveryCode: string, newPassword: string): Promise<void> {
    await axiosInstance.post('/auth/new-password', { recoveryCode, newPassword })
  },
  async login (loginOrEmail: string, password: string) {
    return await axiosInstance.post<{ accessToken: string }>('/auth/login', { loginOrEmail, password })
  },
  async refreshToken () {
    return await axiosInstance.post<{ accessToken: string }>('/auth/refresh-token', { })
  },
  async confirmRegistration (confirmationCodeFromEmail: string) {
    return await axiosInstance.post('/auth/refresh-token', { code: confirmationCodeFromEmail })
  },
  async register (email: string, login: string, password: string) {
    return await axiosInstance.post('/auth/refresh-token', { email, login, password })
  },
  async resendEmail (email: string) {
    return await axiosInstance.post('/auth/registration-email-resending', { email })
  },
  async logout () {
    return await axiosInstance.post('/auth/logout', { })
  },
  async me () {
    return await axiosInstance.post<MeResponse>('/auth/logout', { })
  },
}

export interface MeResponse {
  email: string
  login: string
  userId: string
}
