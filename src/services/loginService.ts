import axios from '../axios';
import { Message, User } from '../types/indexUser';

const login = (naam : string) => axios.post<JSON>('/users/login');

const LoginService = {
    login
};

export default LoginService;