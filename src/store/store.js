import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import productsReducer from '@/pages/Home/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
	productsReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
