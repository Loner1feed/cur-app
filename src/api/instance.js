import axios from "axios";


const host = 'https://api.exchangerate.host'

export const instance = axios.create({
  baseURL: `${host}`,
})