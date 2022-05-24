
import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import LoginService from '../../services/loginService';
import { Message,Response,StatusMessage,User } from '../../types/indexUser';



const login: React.FC = () => {
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    //async functie met parameter naam
    const login = async (name: string) => {
        try {
            //res == het resultaat van login => res is dus gelijk aan X of Y  (nog in te vullen)
            //laat loginservice error gooien indien het niet lukt??
            //login returned naam van user
            const res: AxiosResponse<JSON> = await LoginService.login("Dieter");//deze lijn zou een error moeten gooien hopelijk indien het niet lukt
            sessionStorage.setItem("loggedinUser", name)
            
            setStatusMessages([{message: "User is ingelogd", type: 'success'}])

        } catch (error: any) {
            //hier moeten we eigenlijk gewoon een fout melding kunnen geven
            setStatusMessages([...statusMessages, {message: error, type: "error"} ])
            
        }
    }

    //wat te doen als je op submit duwt
    const handleSubmit = (event: any) => {
        //overschrijf de default
        event.preventDefault()

        if (nameInput.trim() === '') {
            setStatusMessages([{ message: 'Please fill in name.', type: 'error' }]);
        //while(statusMessages.length > 0) { statusMessages.pop(); }
        

        //neem de naam van het form
        //login(nameInput)
    }
   
    
    return  <section className="row justify-content-center">
         <LoginForm
                
            />   
            </section>
};