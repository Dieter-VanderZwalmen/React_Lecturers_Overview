import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import MessageService from '../../services/MessageService';
import { Message } from '../../types/indexUser';
import MessagesOverviewTable from './MessagesOverviewTable';
import FriendMessagesOverviewTable from './FriendMessagesOverviewTable';

const MessageOverview: React.FC = () => {
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
        const res: AxiosResponse<Array<Message>> = await MessageService.getAllMessages();
        setMessages(res.data);
    };

    return (
        <section className="row justify-content-center">
            <MessagesOverviewTable
                messages={messages}
                setSelectedMessage={setSelectedMessage}
            />
            
        </section>
    );
};

export default MessageOverview;
