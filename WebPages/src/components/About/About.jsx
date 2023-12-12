import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="section2" id="sec2">
            <div className="heading">
                <h3>Get to know more</h3>
                <h1>About me</h1>
            </div>
            <div className="abtContent">
                <div className="left">
                    <img className='img' src="src/assets/White.vector.png" alt=""/>
                </div>
                <div className="right">
                    <div className="expedu">
                        <div className="cont">
                            <img src="src/assets/award-fill.png" alt=""/>
                            <h1>Experience</h1>
                            <h4>6 Months+ <br />Web Development</h4>
                        </div>
                        <div className="cont">
                            <img src="src/assets/graduation-cap-fill.png" alt=""/>
                            <h1>Education</h1>
                            <h4>Bachlor Of Computer <br />Applications</h4>
                        </div>
                    </div>
                        <p>"👋 Hey , I'm Rajeev Bhardwaj, A passionate web developer with over 6 months of hands-on experience. Transforming ideas into stunning digital solutions is my forte. From captivating portfolio websites to dynamic sales/service platforms, I craft user-centered experiences that leave a lasting impression. Let's collaborate and bring your vision to life!"</p>
                </div>
            </div>
        </div>
  )
}

export default About