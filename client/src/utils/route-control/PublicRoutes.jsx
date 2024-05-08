/* eslint-disable react/prop-types */
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { useToken, useUser } from "../../store/user/hooks";

export default function PublicRoutes() {
    const user = useUser();
    const token = useToken();
    const location = useLocation(); 
    const outlet = useOutlet();
 console.log('user', user);
 console.log('token', token);
    if (user?._id ) {
        return (   
            <Navigate
                to="/"
                replace={true}
                state={{
                    return_url: location.pathname,
                }}
            />
        );
    }
    return [outlet];
}


