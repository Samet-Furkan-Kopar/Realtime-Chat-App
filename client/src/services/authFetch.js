import { get, post } from './request';
import { BASEURL } from './baseUrl';


export const userRegister = (data) => post(`${BASEURL}/auth/user-register`, data);
export const login = (data) => post(`${BASEURL}/auth/login`, data);
// export const googleLogin = () => googlePost(`${BASEURL}/google-login`);
