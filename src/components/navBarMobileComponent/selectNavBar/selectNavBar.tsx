import { ChevronRight } from 'lucide-react'
import Styles from './selectNavBar.module.css'
import { Link } from 'react-router-dom'
import { links } from './types'
import { useState } from 'react'



function SelectNavBar(props: links) {

    const [active, setActive] = useState(false)


    return (
        <div className={Styles.select}>
            <button onClick={() => setActive(!active)} className={Styles.seduction}>{props.seduction} <ChevronRight className={active ? Styles.active : Styles.noActive}/></button>
            <div className={active ? Styles.select_item : Styles.item_active}>{props.links.map((item) => <Link key={item.name} to={'#'}>{item.name}</Link>)}</div>
            
        </div>
    )
}

export default SelectNavBar