import navbarsections from '../../Sources/navbar.json'
import './Navbar.css'
export default function Navbar({activeSection}){
    return (
        <div className='navbar'>
            {navbarsections.navbarsections.map( (res,index) => {
                return (
                    <a href={"#" + res.link} key={index} className={`nav-link ${activeSection === res.link ? 'active' : ''}`} >
                        <i className={res.icon}></i>
                    </a>
                )
            })}
        </div>
    )
  }
