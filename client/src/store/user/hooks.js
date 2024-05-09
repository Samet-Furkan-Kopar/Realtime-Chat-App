import {useSelector} from "react-redux"

export const useUser = () => useSelector(state => state.auth.user)
export const useSelectedUser = () => useSelector(state => state.auth.selectedUser)
export const useConversations = () => useSelector(state => state.auth.conversations)
export const useFilteredConversations = () => useSelector(state => state.auth.filteredConversations)