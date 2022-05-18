import React, { useState } from 'react';
import { text } from 'stream/consumers';
import { Message } from '../../types/indexUser';


import login from "./index"
type Props = {
    
};
//ik geraak niet aan de handle submit :(  )
const loginForm: React.FC<Props> = () => {
  const [nameInput, setNameInput] = useState<string>('');
    
    return   (
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
             
   
    );
};

export default loginForm;

/**
 * <div className="col-4 mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Login"
                    onChange={(event) => setNameInput(event.target.value)}
                />
            </div>
 */