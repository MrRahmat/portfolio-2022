import './About.modules.css';
import Me from '../../img/card.png';

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="card bg"></div>
        <div className="card">
          <img src={Me} alt="card"/>
        </div>
      </div>
      <div className="about-right">
        Right
      </div>
    </div>
  )
}

export default About