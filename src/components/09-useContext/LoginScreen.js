import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const LoginScreen = () => {
    
    const { setUser } = useContext(UserContext);

    const userInfo ={
        id: 123,
        name: 'David',
        email: 'testEmail@email.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            

            <button
                className= 'btn btn-primary'
                onClick= { () => setUser(userInfo) }
            >
                Login
            </button>
        </div>
    )
}