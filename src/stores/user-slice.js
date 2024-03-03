import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: '',
	token: '',
	name: '',
	user: {},
	currentSelectedCoin: {},
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
} = actions
export default reducer
