/* eslint-disable react/prop-types */
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { useUser } from "../../store/user/hooks";

export default function PrivateRoutes() {
    const user = useUser();
    const location = useLocation(); 
    const outlet = useOutlet();
    if (!user?._id ) {
        return (   
            <Navigate
                to="/auth/login"
                replace={true}
                state={{
                    return_url: location.pathname,
                }}
            />
        );
    }
    return [outlet];
}


