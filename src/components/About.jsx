import React, { useContext } from 'react'
import PersonalInfo from './PersonalInfo'
import Contact from './Contact'
import SocialAccounts from './SocialAccounts'
import { AboutContext } from '../contexts/AboutContext'

const About = () => {
  const {abouts} = useContext(AboutContext);
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <PersonalInfo />
        <Contact />
        {
          abouts.map(about => <p className="lead mb-5" key={about?.id}>{about?.description}</p>)
        }
        <SocialAccounts />
      </div>
    </section>
  )
}

export default About