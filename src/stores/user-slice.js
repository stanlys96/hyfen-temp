import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: '',
	token: '',
	name: '',
	user: {},
	currentSelectedCoin: {},
	verificationToken: '',
	password: '',
	accessToken: '',
	method: '',
	currentSelectedOnrampCoin: {
		idrValue: '',
		logo: '',
		network: '',
		priceId: '',
		cryptoName: '',
		id: '',
	},
	onrampResult: {
		network: '',
		cryptoName: '',
		cryptoValue: '',
		idrValue: '',
		bankName: '',
		bankLogo: '',
		address: '',
		phoneNumber: '',
		vaNumber: '',
		group: '',
		cryptoImg: '',
	},
}

export const userSlice = createSlice({
	name: 'sign',
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		setSelectedCoin: (state, action) => {
			state.currentSelectedCoin = action.payload
		},
		setVerificationToken: (state, action) => {
			state.verificationToken = action.payload
		},
		setPassword: (state, action) => {
			state.password = action.payload
		},
		setAccessToken: (state, action) => {
			state.accessToken = action.payload
		},
		setMethod: (state, action) => {
			state.method = action.payload
		},
		setCurrentSelectedOnrampCoin: (state, action) => {
			state.currentSelectedOnrampCoin = action.payload
		},
		setOnrampResult: (state, action) => {
			state.onrampResult = action.payload
		},
	},
})

const { actions, reducer } = userSlice
export const {
	setUser,
	setToken,
	logOut,
	setSelectedGame,
	setScholarInfo,
	setPlayerInfo,
	setNotifs,
	setOnGoingReq,
	setKycResult,
	removeKycResult,
	setHasUnreadNotification,
	setSelectedCoin,
	setVerificationToken,
	setEmail,
	setPassword,
	setAccessToken,
	setMethod,
	setCurrentSelectedOnrampCoin,
	setOnrampResult,
} = actions
export default reducer
