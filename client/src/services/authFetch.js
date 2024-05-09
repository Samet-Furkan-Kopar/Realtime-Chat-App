import { postJSON } from './request';
import { BASEURL } from './baseUrl';

export const userRegister = (data) => postJSON(`${BASEURL}/auth/user-register`, data);
export const login = (data) => postJSON(`${BASEURL}/auth/login`, data);
// export const googleLogin = () => googlePost(`${BASEURL}/google-login`);
