import axios from "axios";


const host = 'https://api.apilayer.com/exchangerates_data'

export const instance = axios.create({
  baseURL: `${host}`,
})