import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/route-control/PrivateRoutes";
import PublicRoutes from "./utils/route-control/PublicRoutes";
import MainLayouts from "./layouts/main";
import Home from "./pages/home";
import AuthLayout from "./pages/auth";
import Login from "./pages/auth/Login";
import Notifications from "./components/Notifications";
import Register from "./pages/auth/Register";

export default function App() {
    return (
        <>
            <Notifications />
            <Routes>
                <Route element={<PrivateRoutes />}>
                <Route path="/" element={<MainLayouts />}>
                    <Route index element={<Home />} />
                </Route>
                </Route>
                <Route element={<PublicRoutes />}>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
