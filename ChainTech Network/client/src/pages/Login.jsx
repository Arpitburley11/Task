import { useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email, password
      })

      //Handle error and notifying 
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({})
        navigate('/account')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container wrapper mt-xl-5">
      <form action="" onSubmit={loginUser}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="E-mail" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
      </form>
    </div>
  )
}

