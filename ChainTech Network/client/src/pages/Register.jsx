import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/register', {
        name, email, password
      })

      //Handle error with the data at backend
      if (data.error) {
        toast.error(data.error);
      } else {
        setData('')
        toast.success("User has been created successfully.")
        navigate('/login')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container wrapper mt-xl-5">
      <div className="cont">
        <form action="" onSubmit={registerUser}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />
          </div>
          <button type='submit' className="btn">Login</button>
          <div className="register-link">
            <p>
              <span>Already have an account? </span>
              <Link to={'/login'}><b className="pointer">login</b></Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}



