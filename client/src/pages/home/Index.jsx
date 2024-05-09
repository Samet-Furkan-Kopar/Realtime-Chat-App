// import Button from "../../components/button";
// import { deleteUser } from "../../store/user/actions";
import MessageContainer from "../../components/messsages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <div className="flex sm:h-[450px] md:h-[550px]  overflow-hidden bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
