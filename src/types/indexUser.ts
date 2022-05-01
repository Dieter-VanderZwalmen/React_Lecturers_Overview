export interface User {
    id: number;
    name: string;
    status: string;
    loggedIn: boolean;
    messages: Array<Message> | null;
}

export interface Message {
    id: number;
    dateSent: Date;
    author: string;
    type: string;
    text: string;
}

export interface Friend {
    userID: number;
    friendID: number;


}
