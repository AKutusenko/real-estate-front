import { instance } from "api/axios.api";
import { IpasswordRecoeryData } from "types";

export const PasswordRecoveryService = {
  async recovery(userData: IpasswordRecoeryData): Promise<any> {
    await instance.post<IpasswordRecoeryData>('api/mail/send', userData);
  },
}