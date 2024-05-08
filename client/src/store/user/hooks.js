import {useSelector} from "react-redux"

export const useUser = () => useSelector(state => state.auth.user)
export const useToken= () => useSelector(state => state.auth.token)