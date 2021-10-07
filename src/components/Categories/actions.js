import getFilteredCollection from '../../hooks/getFilteredCollection'

const SET_CATEGORY = (category) => ({
	type: 'SET_CATEGORY',
	payload: category,
})

const filterCategory = (category) => (dispatch) => {
	const { documents } = getFilteredCollection('bishkek', category)
}
