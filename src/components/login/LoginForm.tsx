import React from 'react';
//import { Message } from '../../types/indexUser';
import login from "./index"
type Props = {
    
};

const loginForm: React.FC<Props> = () => {
    
    
    return   (
        
            <div className="login-wrapper">
              <h1>Please Log In</h1>
              <form onSubmit={login}>
                <label>
                  <p>Username</p>
                  <input type="text" />
                </label>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
        
        
    );
};

export default loginForm;