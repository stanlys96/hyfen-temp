import axios from 'axios'
import { store } from '../src/stores'

export const axiosCustom = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_CUSTOM,
})

export const fetcher = (url) => axiosCustom.get(url).then((res) => res)

export const axiosApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_API,
	headers: {
		Authorization: process.env.NEXT_PUBLIC_STRAPI_TOKEN,
	},
})

export const axiosSecondary = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_SECONDARY,
})

export const axiosBackend = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
	headers: {
		'x-static-token': process.env.NEXT_PUBLIC_BACKEND_KEY,
	},
})

export const fetcherFlip = (url) => axiosSecondary.get(url).then((res) => res)

export const loginAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_API,
	withCredentials: true,
	headers: {
		'content-type': 'application/json',
	},
})

export const quoteAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
	headers: {
		'x-client-secret': process.env.NEXT_PUBLIC_BACKEND_KEY,
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
	},
})

export const fetcherQuote = (url) => quoteAxios.get(url).then((res) => res)

export const fetcherStrapi = (url) => axiosApi.get(url).then((res) => res)

loginAxios.interceptors.request.use(
	(config) => {
		const {
			user: { token },
		} = store.getState()
		if (token) {
			config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
		}

		return config
	},
	(error) => Promise.reject(error)
)

quoteAxios.interceptors.request.use(
	(config) => {
		const {
			user: { accessToken, currentUser },
		} = store.getState()
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		} else {
			config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
		}
		return config
	},
	(error) => Promise.reject(error)
)

// loginAxios.interceptors.response.use(
// 	(response) => Promise.resolve(response),
// 	async (error) => {
// 		const status = get(error, 'response.status')
// 		if (status === 401 || status === 403) {
// 			console.log('status === 401 || status === 403')
// 			store.dispatch(logOut())
// 			const deviceId = await AsyncStorage.getItem('notif_token')
// 			request.post('auth/fcm-token', {
// 				device_id: deviceId,
// 			})
// 			SplashScreen.hide()
// 		}
// 		return Promise.reject(error)
// 	}
// )

axiosSecondary.interceptors.request.use((requestConfig) => {
	requestConfig.headers['Authorization'] = process.env.NEXT_PUBLIC_STRAPI_TOKEN

	return requestConfig
})
