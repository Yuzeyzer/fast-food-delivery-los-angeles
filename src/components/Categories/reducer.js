const initialState = {
	category: 'Burgers',
}

const Categories = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATEGORY': {
			return { ...state, category: action.payload }
		}
	}
}

export default Categories
