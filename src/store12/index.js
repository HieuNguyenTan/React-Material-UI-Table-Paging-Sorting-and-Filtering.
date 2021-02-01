import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import user from './user'
import users from './users'

const reducer = combineReducers({
  user, users,
})

const store = configureStore({
  reducer,
})

export default store;