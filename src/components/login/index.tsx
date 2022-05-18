import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import LoginService from '../../services/loginService';
import LoginForm from './LoginForm';
import MessagesOverviewTable from '../message-overview/MessagesOverviewTable';




const login: React.FC = () => {

    //async functie met parameter naam
    const login = async (name: string) => {
        try {
            //res == het resultaat van login => res is dus gelijk aan X of Y  (nog in te vullen)
            //laat loginservice error gooien indien het niet lukt??
            const res = await LoginService.login("Dieter");

            //key logginUser zou gelijk moeten gesteld worden aan de naam 
            sessionStorage.setItem("loggedinUser", name)

            //setStatusMessages([{message: "User is ingelogd", type: succes}])

            window.location.reload();


        } catch (error: any) {
            //hier moeten we eigenlijk gewoon een fout melding kunnen geven
            //setStatusMessage([...statusMessages, {message: error, type: "error"} ])
            
        }
       //hier zou ik moeten kunnen zeggen return naar messages pagina
       //of return deze pagina
       //of ik maak deze functie void
        

    }
    //wat te doen als je op submit duwt
    const handleSubmit = (event: any) => {
        //overschrijf de default
        event.preventDefault()

        //while(statusMessages.length > 0) { statusMessages.pop(); }
        

        //neem de naam van het form
        //login(nameInput)
    }
   
    
    return  <section className="row justify-content-center">
         <LoginForm
                
            />   
            </section>
};

export default login;

