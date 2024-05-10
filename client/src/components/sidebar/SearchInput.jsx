// import { useEffect, useState } from "react";
import { useConversations } from "../../store/user/hooks";
import { _setConversations } from "../../store/user/actions";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { showNotification } from "../../store/notifications/notificationSlice";
const SearchInput = () => {
    const [search, setSearch] = useState("");
    // // const [data, setData] = useState("");
    const conversations = useConversations();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
		e.preventDefault();
		if (search.length <= 3) {
            
			return dispatch(
                showNotification({ type: "info", message: "En az 3 karakter ile arama yapınız!"})
            );
		}

		const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			_setConversations([conversation]);
			setSearch("");
		} else {
            _setConversations([]);
            dispatch(
                showNotification({ type: "error", message: "Kullancıı bulunamadı!" })
            );
        }
	};
    return ( 
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2">
            <input
                className="p-2 bg-[#1d2328] rounded-2xl"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search..."
            />
            <button type="submit" className="btn btn-circle bg-[#64748B] text-black">
                <SearchIcon  />
            </button>
        </form>
    );
};

export default SearchInput;
