import axios from 'axios'

export const apiPerName = axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/'
})