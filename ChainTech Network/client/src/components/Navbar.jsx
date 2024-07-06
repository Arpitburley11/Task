import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav container'>
      <Link to={'/'}>Home</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/logout'}>Logout</Link>
    </div>
  )
}
