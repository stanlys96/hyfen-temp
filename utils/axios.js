import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

export const axiosCustom = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_CUSTOM,
})

export const fetcher = (url) => axiosCustom.get(url).then((res) => res)
