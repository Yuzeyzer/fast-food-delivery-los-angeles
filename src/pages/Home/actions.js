import getCollection from '@/hooks/getCollection'

export const GET_PRODUCTS = (products) => ({
	type: 'GET_PRODUCTS',
	payload: products,
})

export const fetchProducts = async (dispatch) => {
	const { documents } = await getCollection('bishkek')
	dispatch(GET_PRODUCTS(documents))
}
