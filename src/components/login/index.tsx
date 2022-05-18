import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import LoginService from '../../services/loginService';
import LoginForm from './LoginForm';
import MessagesOverviewTable from '../message-overview/MessagesOverviewTable';


const login: React.FC = () => {

    const login = async () => {
        const res: AxiosResponse<JSON> = await LoginService.login("marlene");
        return res;
    };
    if ( login.arguments["status"] != "success: true"  )
    {
        return (
            <section className="row justify-content-center">
                <LoginForm
                
                />
                
            </section>
        );

    }
    if (login.arguments["status"] == "success: true")
    {
        return (
            <section className="gelukt ">
                
                
            </section>
        );
    
    }else 
    return ( <section className="de els">
                
                
    </section>);

    
  

    
};

export default login;

