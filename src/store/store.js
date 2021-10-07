import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import products from '@/pages/Home/reducer'
import categoriesReducer from '@/components/Categories/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
	products,
	categoriesReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
