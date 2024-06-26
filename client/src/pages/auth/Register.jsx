"use client";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import CircularProgress from "@mui/material/CircularProgress";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../services/authFetch";
import { useDispatch } from "react-redux";
import { showNotification } from "../../store/notifications/notificationSlice";

export default function Register() {
    const [progress, setProgress] = useState(false);
    const [visible, setVisible] = useState(false);
    // const currentAccount = useAccount();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object({
        email: yup.string().email("Email Formatı Uygun Değil"),
        password: yup.string().min(6, "Şifre 6 karakterden az olamaz").required("Şifre gerekli*"),
        username: yup
            .string()
            .min(5, "Kullanıcı adı 5 karakterden az olamaz")
            .required("Kullanıcı adı gerekli*"),
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            setProgress(true);

            const response = await userRegister(data);
            console.log(response);
            if (response?.succeded === true) {
                setProgress(false);
                dispatch(
                    showNotification({ type: "info", message: "Kayıt Başarılı" })
                );
                navigate("/auth/login");
            } else {
                //    toast({title: response?.message})
            }
        } catch (Error) {
            // toast({ title: Error?.message });
        } finally {
            setProgress(false);
        }
    };

    const EndAdorment = ({ visible, setVisible }) => {
        return (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setVisible(!visible)}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    {visible ? <VisibilityIcon color="secondary" /> : <VisibilityOffIcon />}
                </IconButton>
            </InputAdornment>
        );
    };

    return (
        <div className="h-screen bg-login flex flex-col items-center justify-center mx-auto ">
            <div className=" p-5 flex flex-col items-center justify-center bg-[#b5cbd7] h-[420px] xl:w-[450px] w-[350px] rounded-md shadow-xl">
                <h3 className="text-3xl font-semibold my-5 text-black">
                    Register <span className="text-blue-500">Chat</span>
                    <span className="text-[#242424]">App</span>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        variant="outlined"
                        id="email"
                        label="Email"
                        sx={{ color: "white" }}
                        // type={visible ? "text" : "password"}
                        type={"email"}
                        autoComplete="current-password"
                        color="info"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color="info" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        variant="outlined"
                        id="username"
                        label="Username"
                        sx={{ color: "white" }}
                        // type={visible ? "text" : "password"}
                        type={"username"}
                        autoComplete="current-password"
                        color="info"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle color="info" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        variant="outlined"
                        id="password"
                        label="Şifre"
                        sx={{ color: "white" }}
                        type={visible ? "text" : "password"}
                        autoComplete="current-password"
                        color="info"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        InputProps={{
                            endAdornment: <EndAdorment visible={visible} setVisible={setVisible} />,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HttpsIcon color="info" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2  , textTransform: "capitalize" }}
                        color="info"
                        disabled={progress}
                        startIcon={
                            progress ? (
                                <CircularProgress color="inherit" size={"16px"} />
                            ) : (
                                <LoginIcon />
                            )
                        }
                    >
                        Register
                    </Button>
                </form>
                <Link to='/auth/login' className='text-sm text-[#242424] mb-2 hover:underline hover:text-blue-600 inline-block'>
                Already have an account?
					</Link>
            </div>
        </div>
    );
}
