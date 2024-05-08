import {store} from "../store"
import {userActions} from "./userSlice"

export const setUser = (data) => store.dispatch(userActions.setUser(data))
export const deleteUser = () => store.dispatch(userActions.deleteUser())
export const setToken = (data) => store.dispatch(userActions.setToken(data))
export const deleteToken = () => store.dispatch(userActions.deleteToken())