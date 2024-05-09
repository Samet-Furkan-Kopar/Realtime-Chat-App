import LogoutIcon from "@mui/icons-material/Logout";
import { deleteUser, deleteSelectedUser } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const logout = async () => {
       Promise.all([deleteUser(), deleteSelectedUser()]);
        localStorage.clear();
        navigate("/auth/login");
    };

    return (
        <div className="mt-auto glassmorphism">
            <LogoutIcon onClick={logout} className="w-6 h-6 cursor-pointer" />
        </div>
    );
};

export default LogoutButton;
