import { X } from 'lucide-react'
import Styles from './navBarMobuile.module.css'
import { props } from './types'
import LinkNavBar from './linkNavBar/linkNavBar'
import SelectNavBar from './selectNavBar/selectNavBar'
import SocialNetwork from '../socialNetwork/socialNetwork'





function NavBarMobuile(props: props) {


    return (
        <div className={props.navBar ? Styles.navBarMobile : Styles.active}>
            <div className={Styles.navBarContainer}>
                <div className={Styles.close}><X onClick={() => props.navBarClose()} className={Styles.lucideX} /></div>
                <div className={Styles.list_link}>
                    <SelectNavBar links={[{ name: 'NEWS' }, { name: 'FEATURES' }]} seduction='NEWS & FEATURES' />
                    <SelectNavBar links={[{ name: 'QUIZZES' }, { name: 'PUZZLES' }]} seduction='QUIZZES & PUZZLES' />
                    <LinkNavBar name='J.K. ROWLING ARCHIVE' />
                    <SelectNavBar links={[{ name: 'BOOKS' }, { name: 'FILMS' }, { name: 'PORTKEY GAMES' }, { name: 'ON STAGE' }, { name: 'EXPERIENCES' }]} seduction='DISCOVER' />
                    <LinkNavBar name='HOGWARTS SORTING' />
                    <LinkNavBar name='PATRONUS EXPERIENCE' />
                    <LinkNavBar name='FAST FILES' />
                    <LinkNavBar name='PORTRAIT MAKER' />
                    <LinkNavBar name='SHOP' />
                </div>
                <SocialNetwork />
            </div>
        </div>
    )
}


export default NavBarMobuile