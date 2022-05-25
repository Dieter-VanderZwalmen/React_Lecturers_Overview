import React from 'react';
import { Message } from '../../types/indexUser';


//welke types heb je?
type Props = {
    messages: Array<Message>;
    setSelectedMessage: (message: Message) => void;
};

// <props> betekent dat deze functie gebruik zal maken van props "{ messages }: Props" betekent dat we messages uit props halen
const MessagesOverviewTable: React.FC<Props> = ({ messages }: Props) => {
    if(messages.length == 0){
        return (
            <div className="col-8">
            <h3>Your friends have been quiet lately…</h3>
            </div>

        );
    } else
    return   (
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
                    {/*messages && betekent render enkel de rijen wnr de message niet leeg is */ }
                    {messages &&
                        messages.map((message, index) => (
                            <tr key={index}>
                                <td>{message.author}</td>
                                <td>{new Date(message.dateSent).getDay()}-{new Date(message.dateSent).getMonth()}-{new Date(message.dateSent).getFullYear()}</td>
                                <td>{message.text}</td>
                                
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default MessagesOverviewTable;
