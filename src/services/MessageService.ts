import axios from '../axios';
import { Message } from '../types/indexUser';

const getAllMessagesByFriends = (id: string) => axios.get<Message[]>('/messages/'+id);

const MessageService = {
    getAllMessagesByFriends,
};

export default MessageService;
