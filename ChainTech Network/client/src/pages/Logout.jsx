import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    const logoutUser = ()=>{
        console.log(localStorage.getItem("user"))
    }

    useEffect(()=>{
        logoutUser();
        navigate('/login')
    },[navigate])

  return(
    <></>
  )
}
