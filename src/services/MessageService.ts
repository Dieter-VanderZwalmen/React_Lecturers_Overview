import axios from '../axios';
import { Message } from '../types/indexUser';

const getAllMessages = () => axios.get<Array<Message>>('/messages');

const MessageService = {
    getAllMessages,
};

export default MessageService;
