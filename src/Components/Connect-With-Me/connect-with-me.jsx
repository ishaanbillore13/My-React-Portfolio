import './connect-with-me.css'
import Icon from '../../assets/icons/icons'
import connectwithme from '../../Sources/connectwithme.json'

export default function ConnectWithMe(){
    return (
        <div className="connect-with-me">
            <h2>{connectwithme.heading}</h2>
            <div className='contact-me-icons'>
            {connectwithme.sites.map( (res,index) => {
                return (
                <a href={res.url} key={index}>
                    <Icon name={res.icon} size={45} />
                </a>
                )
            })}
            </div>
        </div>
    )
}