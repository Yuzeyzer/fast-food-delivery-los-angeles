import getFilteredCollection from '../../hooks/getFilteredCollection'
import { GET_PRODUCTS } from '../../pages/Home/actions'

export const SET_CATEGORY = (category) => ({
	type: 'SET_CATEGORY',
	payload: category,
})

export const getfilteredProducts = (category) => async (dispatch) => {
	dispatch(SET_CATEGORY(category))
	const { documents } = await getFilteredCollection('bishkek', category)
	dispatch(GET_PRODUCTS(documents))
}
