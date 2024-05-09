import { Outlet } from "react-router-dom";

const Index = () => {

    return (
        <div>
            {/* {modal && <Modals />} */}
            
            <Outlet />
        </div>
    );
};

export default Index;
