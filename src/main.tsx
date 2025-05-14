import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResponsiveAppBar from './components/Navbar.tsx'
import App from './App.tsx'
import Card from './components/Card.tsx'
import SectionTitle from './components/Section-title.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Award from './components/Award.tsx'
import Footer from './components/Footer.tsx'
import ContactForm from './components/Contact.tsx'
import Tarif from './components/Tarifs.tsx'
import Hero from './components/Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveAppBar />
    <App />
    <Card />
    <section id="projects-section">
      <SectionTitle sectionTitle="Projects" txt="I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between."/>
      <Projects />
    </section>
    <section id="skills-section">
      <SectionTitle sectionTitle="Skills" txt="After 3 years of web developement, here are some skills that I have acquired."/>
      <Skills />
    </section>
    <section id="awards-section">
      <SectionTitle sectionTitle="Awards" txt="I'm proud to have received the following awards:"/>
      <Award />
    </section>
    <section id="contact-section">
      <SectionTitle sectionTitle='Contact' txt='Feel free to contact me if you have any questions or inquiries.'/>
      <ContactForm />
    </section>
    <Footer /> 
  </StrictMode>,
)
