import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import categoryReducer from '@components/Categories/reducer.js'
import restarauntsReducer from '@/pages/Home/reducer'
import userReducer from './user/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	restarauntsReducer,
	categoryReducer,
	user: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
