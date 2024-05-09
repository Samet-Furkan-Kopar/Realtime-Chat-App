import { postJSON, get } from './request';
import { BASEURL } from './baseUrl';


export const getConversations = () => get(`${BASEURL}/messages`);//users
export const sendMessage = (id,data) => postJSON(`${BASEURL}/messages/send/${id}`, data);
export const getMessage = (id) => get(`${BASEURL}/messages/${id}`);
