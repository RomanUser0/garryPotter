import Styles from './mainPage.module.css'
import mobileImageFon from '../../assets/image/hp-f1-harry-ron-class-homepage-mobile-hero.jpg'
import { Link } from 'react-router-dom'

import maps_image_1 from '../../assets/image/WW_Mocks_ARTICLE_HERO_3.png'
import maps_image_2 from '../../assets/image/HP-F6-half-blood-prince-draco-malfoy-looking-concerned-web-landscape.jpg'
import maps_image_3 from '../../assets/image/WB-F4-cedric-and-amos-diggory-at-triwizard-tournament-web-landscape.png'
import maps_image_4 from '../../assets/image/HP-F6-half-blood-prince-draco-malfoy-reaching-looking-serious-web-landscape.jpg'


function MainPage() {
    return (
        <div className={Styles.mainPage}>
            <div className={Styles.mobile}>
                <div className={Styles.main_image_mobile}>
                    <img src={mobileImageFon} />
                </div>
                <div className={Styles.description_wrapper}>
                    <div className={Styles.description}>
                        <h2>Max rolls out across more European countries</h2>
                        <p>The streaming service Max is still on its journey across Europe. Today, Max arrives officially in France and Poland.</p>
                        <Link to={'#'}>LEARN MORE</Link>
                    </div>
                </div>
                <div className={Styles.maps}>
                    <div className={Styles.maps_item}>
                        <div className={Styles.maps_item_image}>
                            <img src={maps_image_1} />
                        </div>
                        <h3>MOVIE MARATHON,ANYONE</h3>
                        <p>How you can stream the Harry Potter films, wherever you are</p>
                        <div className={Styles.down_fon}></div>
                    </div>
                    <div className={Styles.maps_item}>
                        <div className={Styles.maps_item_image}>
                            <img src={maps_image_2} />
                        </div>
                        <h3>POTTAH</h3>
                        <p>The ultimate Draco Malfoy quiz</p>
                        <div className={Styles.down_fon}></div>
                    </div>
                    <div className={Styles.maps_item}>
                        <div className={Styles.maps_item_image}>
                            <img src={maps_image_3} />
                        </div>
                        <h3>BADGER POWER</h3>
                        <p>Watch: What does it mean to be a Hufflepuff?</p>
                        <div className={Styles.down_fon}></div>
                    </div>
                    <div className={Styles.maps_item}>
                        <div className={Styles.maps_item_image}>
                            <img src={maps_image_4} />
                        </div>
                        <h3>MALFOY, DRACO MALFOY</h3>
                        <p>The Draco Malfoy wordsearch</p>
                        <div className={Styles.down_fon}></div>
                    </div>
                </div>

                <div className={Styles.poll}>
                     <div className={Styles.poll_wrapper}>
                        <div className={Styles.poll_content}>
                                <p>POLL</p>
                                <h2>Which wizarding career would you rather have?</h2>
                                <div className={Styles.poll_button}>
                                    <button>HALER</button>
                                    <button>CURSE BREAKER</button>
                                    <button>AUROR</button>
                                    <button>HOGWARTS PROFESSOR</button>
                                </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}


export default MainPage