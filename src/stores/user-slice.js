import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: '',
	token: '',
	name: '',
	user: {},
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
} = actions
export default reducer
