import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/auth.slice'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({ reducer: rootReducer })

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector
