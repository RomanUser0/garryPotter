import { Link } from 'react-router-dom'
import Styles from './socialNetwork.module.css'
import { Facebook, Instagram, Youtube } from 'lucide-react'



function SocialNetwork() {
    return(
        <div className={Styles.socialNetwork}>
            <Link to={'#'}><Youtube /></Link>
            <Link to={'#'}><Facebook /></Link>
            <Link to={'#'}><Instagram /></Link>
        </div>
    )
}

export default SocialNetwork