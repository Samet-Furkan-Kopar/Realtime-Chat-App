import {store} from "../store"
import {userActions} from "./userSlice"

export const setUser = (data) => store.dispatch(userActions.setUser(data))
export const deleteUser = () => store.dispatch(userActions.deleteUser())
export const setSelectedUser= (data) => store.dispatch(userActions.setSelectedUser(data))
export const deleteSelectedUser = () => store.dispatch(userActions.deleteSelectedUser())
export const _setConversations= (data) => store.dispatch(userActions.setConversations(data))
export const _deleteConversations = () => store.dispatch(userActions.deleteConversations())

