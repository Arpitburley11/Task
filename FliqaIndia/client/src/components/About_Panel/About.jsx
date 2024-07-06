import './About.css'
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <div className='section'>
      <dic className="content">
        <div className="left">
            <div className="abtImg"><img src='/about.jpg' alt=''/></div>
        </div>
        <div className="right">
            <h1>Are you looking for the best Bulk SMS & WhatsApp Marketing Services in Kolkata? We can help</h1>

            <p>Turain Software Pvt. Ltd. offers end-to-end SMS marketing and web development solutions. Here you will get the best team of digital marketers, web developers, business analytics, and app developers. Our team understands business needs perfectly and plans accordingly to deliver the most effective web design and development, digital marketing, and graphic design services. We strive to bring all your web development solutions under one umbrella.<br/><br/>If cost is a matter of worry for you, Turain's affordable SMS & web solutions will delight you. We offer high-quality services at an affordable cost. Based on your needs, we will customize our packages and offer you the most suitable one.
            </p>

            <Link className='btn' to='/'>Read More</Link>
        </div>
      </dic>
    </div>
  )
}
