import { instance } from "api/axios.api";
import { IPasswordRecoveryData, IPasswordUpdateData } from "types";

export const PasswordRecoveryService = {
  async recovery(userData: IPasswordRecoveryData): Promise<any> {
    await instance.post<IPasswordRecoveryData>('api/mail/send', userData);
  },

  async update(userData: IPasswordUpdateData): Promise<any> {
    await instance.patch<IPasswordUpdateData>('api/auth/resetpassword', userData);
  },
}