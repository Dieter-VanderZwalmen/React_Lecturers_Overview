import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import MessageService from '../../services/MessageService';
import { Message } from '../../types/indexUser';
import MessagesOverviewTable from './MessagesOverviewTable';
import FriendMessagesOverviewTable from './FriendMessagesOverviewTable';

const MessageOverview: React.FC = () => {
    //hier zorgen we ervoor dat messages waarde krijgt door getMessages op te roepen die dan setMessages oproept
    //bij de eerste render zal messages leeg zijn van daar de [] na deze render gaat react kijken naar de sideeffects => useEffect()
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    //als je states veranderen wordt er opnieuw gerenderd



    //als de waarde van getMssages veranderd wordt useEffect uitgevoerd
    //getMessages geeft messages waarde
    //messages wordt gereturned in de messageOverViewTable
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
