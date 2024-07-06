import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => {
                    setUser(data)
                })
        }
    }, [])

    const logoutUser = async () => {
        try {
          await axios.post('/logout');
    
          // Clear user data from context
          setUser(null);
    
          // Optionally, redirect to login page after successful logout
          navigate('/login')

        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

    return (
        <UserContext.Provider value={{ user, setUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}