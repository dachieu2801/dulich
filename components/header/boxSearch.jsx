import styles from '@/styles/header/box_search.module.css';
import { useEffect, useState } from 'react';
import moment from 'moment';
import SearchHotel from './box_search/search_hotel';
import SearchRestaurant from './box_search/search_restaurant';
import SearchFlight from './box_search/search_flight';
import SearchHomeStay from './box_search/search_homestay';

export default function BoxSearch(props) {

    const [currentDay, setCurrentDay] = useState(''); //ngay hien tai
    const [currentMonth, setCurrentMonth] = useState(''); //thang hien tai

    const [activeMenu, setActiveMenu] = useState('ks'); //Bien gan gia tri cho phan menu tren thanh search
    //Su kien click vao item menu search
    const clickMenu = (e, active) => {
        setActiveMenu(active);
    }

    useEffect(() => {
        //Lay ngay thang thuc
        const currentDay = moment().format('DD');
        const currentMonth = moment().format('MM');
        setCurrentDay(currentDay);
        setCurrentMonth(currentMonth);
    }, []);


    return (
        <div className={`${styles.box_banner}`}>
            <div className={`${styles.banner_wrap}`}>
            
                <div className={`${styles.box_date}`}>
                    <span className={`${styles.day}`}>{currentDay}</span>
                    <div className={`${styles.ke}`}></div>
                    <span className={`${styles.month}`}>Tháng {currentMonth}</span>
                </div>
             

                <div className={`${styles.box_search}`}>
                    <div className={`${styles.box_top}`}>
                        <div className={`${styles.box_menu}`}>
                            <div className={`${styles.menu_item} ${activeMenu == 'ks' ? styles.menu_active : ''}`} onClick={(e) => clickMenu(e, 'ks')}>
                                Khách sạn
                            </div>
                            <div className={`${styles.menu_item} ${activeMenu == 'nh' ? styles.menu_active : ''}`} onClick={(e) => clickMenu(e, 'nh')}>
                                Nhà hàng
                            </div>
                            <div className={`${styles.menu_item} ${activeMenu == 'cb' ? styles.menu_active : ''}`} onClick={(e) => clickMenu(e, 'cb')}>
                                Chuyến bay
                            </div>
                            <div className={`${styles.menu_item} ${activeMenu == 'ht' ? styles.menu_active : ''}`} onClick={(e) => clickMenu(e, 'ht')}>
                                Homestay
                            </div>
                        </div>
                        <div className={`${styles.map}`}>
                            <div className={`img_dl ${styles.img_map}`}>
                                <img src="/images/header/icon_map.svg" alt="Icon" />
                            </div>
                            <span className={`${styles.text_map}`}>Mở bản đồ</span>
                        </div>
                    </div>
                    {
                        activeMenu == 'ks' ? <SearchHotel></SearchHotel> :
                            activeMenu == 'nh' ? <SearchRestaurant></SearchRestaurant> :
                                activeMenu == 'cb' ? <SearchFlight></SearchFlight> :
                                    activeMenu == 'ht' ? <SearchHomeStay></SearchHomeStay> : ''

                    }
                </div>
            </div>
             <div className={`${styles.box_more}`}>
                <div className={`${styles.kedoc}`}></div>
                <div className={`${styles.more_item}`}>
                    <div className={`img_dl ${styles.item}`}>
                        <img src="/images/header/facebook.svg" alt="Icon" />
                    </div>
                    <div className={`img_dl ${styles.item}`}>
                        <img src="/images/header/twitter.svg" alt="Icon" />
                    </div>
                    <div className={`img_dl ${styles.item}`}>
                        <img src="/images/header/instagram.svg" alt="Icon" />
                    </div>
                    <div className={`img_dl ${styles.item}`}>
                        <img src="/images/header/youtube.svg" alt="Icon" />
                    </div>
                </div>
                <div className={`${styles.kedoc}`}></div>
            </div>

        </div>
    )

}