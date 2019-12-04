import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { colors, sort } from './reducers'

const dev = process.env.NODE_ENV !== 'production'
const middlewares = dev ? [reduxThunk, createLogger({ collapsed: true })] : []

export const makeStore = (initialState, options) => {
  return createStore(
    combineReducers({ colors, sort }),
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}