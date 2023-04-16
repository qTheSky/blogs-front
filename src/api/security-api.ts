import { axiosInstance } from './axios-config/axios-config';

export const securityAPI = {
  async getAllDevices() {
    return await axiosInstance.get<IAuthDevice[]>('/security/devices');
  },
  async terminateAllSessionsExcludeCurrent() {
    return await axiosInstance.delete('/security/devices');
  },
  async terminateSessionByDeviceId(deviceId: string) {
    return await axiosInstance.delete(`/security/devices/${deviceId}`);
  },
};

export interface IAuthDevice {
  ip: string;
  title: string;
  lastActiveDate: string;
  deviceId: string;
}
