import axios from '../axios';
import { User } from '../types/indexUser';

const getUser = (identifier: string) => axios.get<User>('/users/' + identifier);

const UserService = {
    getUser
};

export default UserService;
