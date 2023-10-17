import { instance } from "api/axios.api";

export const CardService = {
  async getAll() {
    const { data } = await instance.get('api/cards');
    return data;
  },
}