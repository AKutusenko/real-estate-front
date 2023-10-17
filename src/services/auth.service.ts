import { instance } from "api/axios.api";
import { IResponseUserData, ISignInUserData, ISignUpUserData, IUser } from "types";

export const AuthService = {
  async signUp(userData: ISignUpUserData): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>('api/auth/signup', userData);
    return data;
  },

  async signIn(userData: ISignInUserData): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser>('api/auth/signin', userData);
    return data;
  },

  async getProfile(): Promise<IUser | undefined> {
    const { data } = await instance.get<IUser>('/api/auth/profile');
    if (data) return data;
  },

}