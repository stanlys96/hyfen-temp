import axios from 'axios'
import { store } from 'src/stores/store'

export const axiosCustom = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_CUSTOM,
})

export const fetcher = (url) => axiosCustom.get(url).then((res) => res)

export const loginAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_API,
	withCredentials: true,
	headers: {
		'content-type': 'application/json',
	},
})

loginAxios.interceptors.request.use(
	(config) => {
		const {
			user: { token },
		} = store.getState()

		if (token) {
			config.headers.authorization = `Bearer ${token}`
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
