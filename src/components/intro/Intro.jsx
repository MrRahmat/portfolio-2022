import React from 'react';

import './Intro.modules.css';
import Me from '../../img/1.jpg'

function Intro() {
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2>Hi there, My Name is</h2>
                <h1>Vladimir Shelkovnikov<span>|</span></h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">
                            Web Developer
                        </div>
                        <div className="intro-title-item">
                            React, Next
                        </div>
                        <div className="intro-title-item">
                            DevOps
                        </div>
                        <div className="intro-title-item">
                            Information Security
                        </div>
                    </div>
                </div>
                <div className="intro-description">
                    Long story short - Go fuck yourself, you little cunt!    
                </div>
            </div>
        </div>
        <div className="intro-right">
            <div className='intro-bg'>
            <img src={Me} alt='name' className='intro-img'/>
            </div>
            
        </div>
    </div>
  )
}

export default Intro