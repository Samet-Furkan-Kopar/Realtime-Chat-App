import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        selectedUser: null,
        conversations:[],
        filteredConversations: [],
      
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = null;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        deleteSelectedUser: (state) => {
            state.selectedUser = "";
        },
        setConversations: (state, action) => {
            state.conversations = action.payload;
        },
        deleteConversations: (state) => {
            state.conversations = [];
        },
        setFilteredConversations: (state, action) => {
            state.filteredConversations = action.payload;
        },
        deleteFilteredConversations: (state) => {
            state.filteredConversations = [];
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
