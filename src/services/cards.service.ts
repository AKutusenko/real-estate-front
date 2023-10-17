import { instance } from "api/axios.api";
import { ICard } from "types";

export const CardService = {
  async getAll() {
    const { data } = await instance.get('api/cards');
    return data;
  },
}