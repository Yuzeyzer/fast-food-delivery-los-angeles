import { SET_USER } from './actionTypes'
const initialState = {
	isAuth: false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER: {
			return { ...state, isAuth: action.payload }
		}
		default:
			return state
	}
}

export default userReducer
