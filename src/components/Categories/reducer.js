const initialState = {
	category: 'Burgers',
}

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATEGORY': {
			return { ...state, category: action.payload }
		}
		default:
			return state
	}
}

export default categoriesReducer
