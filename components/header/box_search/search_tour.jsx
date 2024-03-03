import styles from '@/styles/header/box_search.module.css';
import search from '@/styles/tour/customer/component_search.module.css';
import React, { useEffect, useRef, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function SearchTour(props) {
    const [showSuggest, setShowSuggest] = useState(false);

    const boxSuggest = useRef(null);
    const boxChildSuggest = useRef(null);
    const handleClickOut = (event) => {
        if (!boxSuggest.current?.contains(event.target) && !boxChildSuggest.current?.contains(event.target)) {
            setShowSuggest(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOut);
        return () => {
            document.removeEventListener('mousedown', handleClickOut);
        };
    }, []);

    return (
        <div className={search.block_search}>
            <div className={search.block_detail_search}>

                <div className={search.detail1}>
                    <div className={search.detail1_top}>
                        <div>
                            <img src="/images/header/diadiem.svg" alt="Icon" />
                        </div>
                        <span>Bạn muốn đi đâu</span>
                    </div>
                    <input type="text" placeholder="Thành phố" onClick={() => setShowSuggest(!showSuggest)} ref={boxSuggest} />
                </div>
                <div className={search.detail2}>
                    <div className={search.detail2_top}>
                        <div>
                            <img src="/images/tour/icon_car.svg" alt="Icon" />
                        </div>
                        <span>Ngày khởi hành</span>
                    </div>
                </div>
                <div className={search.detail3}>
                    <div className={search.detail3_top}>
                        <div>
                            <img src="/images/tour/icon_address.svg" alt="Icon" />
                        </div>
                        <span>Khởi hành từ</span>
                    </div>
                </div>
            </div>
            <button className={search.btn_search}>
                <img src="/images/header/icon_search.svg" alt="Icon" />
            </button>

            {/* Box goi y dia diem */}
            {
                showSuggest ? (
                    <div className={`${search.box_suggest_location}`} ref={boxChildSuggest}>
                        <div className={`${styles.box_suggest}`}>
                            <div className={`${styles.box_suggest_item}`}>
                                <div className={`${styles.suggest_title}`}>
                                    Tìm kiếm gần đây
                                </div>
                                <div className={`${styles.list_suggest}`}>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/hotel.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 tháng 7 - 16 tháng 7, 1 Phòng, 2 khách</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/diadiem.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 tháng 7 - 16 tháng 7, 1 Phòng, 2 khách</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.ke_sug}`}></div>
                            <div className={`${styles.box_suggest_item}`}>
                                <div className={`${styles.suggest_title}`}>
                                    Gợi ý
                                </div>
                                <div className={`${styles.list_suggest}`}>
                                    <div className={`${styles.item_suggest}`}>
                                        <div className={`img_dl ${styles.img_suggest}`}>
                                            <img src="/images/header/hotel.svg" alt="Icon" />
                                        </div>
                                        <div className={`${styles.txt_suggest}`}>
                                            <p>Phú Quốc</p>
                                            <span>12 khách sạn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}