import React from 'react'
import Footer from '../Components/Footer/Footer'
import KeyProblem from '../Components/Key_Problem/KeyProblem'

export default function Home() {
  return (
    <div className='home'>
        <div className="home-cont">
            <KeyProblem/>
            <Footer/>
        </div>
    </div>
  )
}
