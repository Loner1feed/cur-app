import { instance } from "./instance"

export const currencyAPI = {
  getCurrencies: async () => {
    const res = instance.get(`/latest?symbols=USD,EUR,UAH&base=USD`, {
      headers: {
        "apikey": "hjdEDynnE3xbf3wOURgucA1zCZMzPH76"
      }
    })
    return res;
  },
};