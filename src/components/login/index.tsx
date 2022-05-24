
import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import LoginService from '../../services/loginService';
import { Message,Response,StatusMessage,User } from '../../types/indexUser';
import classNames from 'classnames';
import { json } from 'stream/consumers';
import MessageOverview from '../message-overview';

const Login: React.FC = () => {
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
    const [nameInput, setNameInput] = useState<string>("");

    //async functie met parameter naam
    const login = async (name: string) => {
        try {
            //res == het resultaat van login => res is dus gelijk aan X of Y  (nog in te vullen)
            //laat loginservice error gooien indien het niet lukt??
            //login returned naam van user
            setStatusMessages([{ message: 'trying to log in with the name.', type: 'success' }]);
            
            await LoginService.login('{"name": "'+name+'"}');//deze lijn zou een error moeten gooien hopelijk indien het niet lukt

            setStatusMessages([{ message: 'Logging in.', type: 'success' }]);
            sessionStorage.setItem("loggedinUser", name)
            setStatusMessages([{message: "User is ingelogd", type: 'success'}])
            

            //rederict naar messages??
        } catch (any) {
            //hier moeten we eigenlijk gewoon een fout melding kunnen geven
            setStatusMessages([...statusMessages, {message: "Naam niet gevonden", type: "error"} ])
            setNameInput('');
        }
    }

    //wat te doen als je op submit duwt
    const handleSubmit = (event: any) => {
        //overschrijf de default
        event.preventDefault()

        if (nameInput.trim() === '') {
            setStatusMessages([{ message: 'Please fill in name.', type: 'error' }]);
        }else{
            login(nameInput);
        }
        //while(statusMessages.length > 0) { statusMessages.pop(); }
        

        //neem de naam van het form
        //login(nameInput)
    }
   
    
    return   (
        <section className="row justify-content-center">
            {statusMessages && (
                <ul className="list-unstyled col-4 mb-3">
                    {statusMessages.map(({ message, type }, index) => (
                        <li
                            key={index}
                            className={classNames({
                                'text-danger': type === 'error',
                                'text-success': type === 'success',
                            })}
                        >
                            {message}
                        </li>
                    ))}
                </ul>
            )}
        <div className="col-4 mb-3">
        <form onSubmit={handleSubmit}>
                      <label>
                          Name:
                          <input
                              className="m-sm-2"
                              type="text"
                              value={nameInput}
                              onChange={(event) => setNameInput(event.target.value)}
                          />
                      </label>
                      <input type="submit" value="Submit" />
                  </form>
                  </div>
                  </section>
               
     
      );
    };
export default Login;