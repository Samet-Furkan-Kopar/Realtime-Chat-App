// import { useEffect, useState } from "react";
// import { useConversations } from "../../store/user/hooks";
// import { _setConversations } from "../../store/user/actions";

const SearchInput = () => {
    // const [search, setSearch] = useState("");
    // // const [data, setData] = useState("");
    // const conversations = useConversations();

    // const filteredConversations = conversations?.find((conversation) => {
    //     return conversation.username.toLowerCase().includes(search.toLowerCase());
    // });
 

    // useEffect(() => {
    //   if (search?.length > 3) {
    //     setTimeout(() => {
    //       _setConversations(filteredConversations);
    //     }, 1000);
    //   }
    // }, [search,filteredConversations]);

    // console.log(filterConversationsByUsername);

    return (
        <form className="flex items-center justify-center gap-2">
            <input
                className="p-2 bg-[#1d2328] rounded-2xl"
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search..."
            />
            {/* <SearchIcon color='black' className=''/> */}
        </form>
    );
};

export default SearchInput;
