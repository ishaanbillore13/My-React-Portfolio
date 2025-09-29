import header from '../../Sources/header'
import introduction from '../../Sources/introduction'
import './header.css'
import { TypeAnimation } from 'react-type-animation';
import ThemeToggler from '../Theme-Toggler/theme-toggler';

export default function Header() {

  return (
    <>
        <div className='flex-applier'>
          <div className='intro'>
            <img src="/assets/icon.png" className="header-icon" alt="icon" />
            <div>
              <p className='he'>Hey There,</p>
              <h2 className="header-name-row">
                I am <span className="header-name">{header.name}</span>
                <span className="wave">👋</span>
              </h2>
              <h6 className="type-animation" data-speed="0.5">
                <TypeAnimation
                  sequence={[
                    '👨‍💻 Frontend Engineer', 1000,
                    '🎨 UI/UX Tweaker', 1000,
                    '🏗️ DevOps Builder', 1000,
                    '☁️ Cloud Deployer', 1000,
                    '🐳 Docker + K8s Wrangler', 1000,
                    '🎯 Code that delivers', 1000
                  ]}
                  style={{ fontSize: '2em' }}
                  repeat={Infinity}
                  speed={160}
                  cursor={true}
                />
              </h6>
            </div>
          </div>
          <div className="button-row">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}>
              <button className="button resume">
                View & Download Resume <i className="bi bi-download"></i>
              </button>
            </a>
            <a href="#ConnectWithMe" style={{ textDecoration: 'none' }}>
              <button className="button contact">Contact Me <i className="bi bi-person-lines-fill"></i></button>
            </a>
          </div>
          <div className='intro-reverse'>
            <p>
              <TypeAnimation
                sequence={[
                  introduction.introduction,
                  introduction.introduction
                ]}
                repeat={0}
                speed={160}
                cursor={true}
              />
            </p>
          </div>
        </div>
    </>
  );
}