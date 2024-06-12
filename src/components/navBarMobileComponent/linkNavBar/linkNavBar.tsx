import { Link } from "react-router-dom"
import { link } from "./types"
import Styles from './linkNavBar.module.css'



function LinkNavBar(props: link) {
    return <Link className={Styles.link} to={'#'}>{props.name}</Link>
}

export default LinkNavBar