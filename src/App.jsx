import { useEffect, useRef, useState, useMemo } from 'react'
import './App.css'
import Certifications from './Components/Certifications/certifications'
import ConnectWithMe from './Components/Connect-With-Me/connect-with-me'
import Education from './Components/Education/education'
import Header from './Components/Header/header'
import Navbar from './Components/Navbar/Navbar'
import ProfessionalExperience from './Components/Professional-Experience/professional-experience'
import Skills from './Components/Skills/skills'
import NavbarData from './Sources/navbar.json'
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are
import darkOptions from './Components/BackgroundThemes/Dark-Theme'
import ThemeToggler from './Components/Theme-Toggler/theme-toggler'


const components = {
  Header,
  ProfessionalExperience,
  Skills,
  Education,
  Certifications,
  ConnectWithMe
}
function App() {
  const [activeSection, setActiveSection] = useState(components[0]);
  const sectionsRef = useRef([])

  const getPrefferedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light';
  }

  const [theme, setTheme] = useState(getPrefferedTheme());
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const options = useMemo(
    () => (darkOptions),
    [],
  );

  return (
    <>
      <ThemeToggler theme={theme} setTheme={setTheme} />
      {theme === 'dark' && init && <Particles options={options} />}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Navbar activeSection={activeSection} />
      </div>
          {NavbarData.navbarsections.map((res, index) => {
            const Component = components[res.link];
            return (
              <section
                id={res.link}
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
              >
                <Component />
              </section>
            );
          })}
    </>
  );
}


export default App
