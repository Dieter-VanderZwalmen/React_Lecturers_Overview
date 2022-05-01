import React from 'react';
import { Message } from '../../types/indexUser';

type Props = {
    messages: Array<Message>;
    setSelectedMessage: (message: Message) => void;
};

const MessagesOverviewTable: React.FC<Props> = ({ messages }: Props) => {
    return (
        <div className="col-8">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Date sent</th>
                        <th scope="col">Text </th>
                    </tr>
                </thead>
                <tbody>
                    {messages &&
                        messages.map((message, index) => (
                            <tr key={index}>
                                <td>{message.author}</td>
                                <td>{message.dateSent}</td>
                                <td>{message.text}</td>
                                
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default MessagesOverviewTable;
