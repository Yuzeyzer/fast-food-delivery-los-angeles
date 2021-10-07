const initialState = {
	items: [],
}

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS': {
			return { ...state, items: action.payload }
		}
		default:
			return state
	}
}

export default productsReducer
