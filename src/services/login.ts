import axios from '../axios';
import { Message, User } from '../types/indexUser';

const login = (user : User) => axios.post<Array<Message>>('/users/login');

const LoginService = {
    login
};

export default LoginService;
