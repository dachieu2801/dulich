import styles from "@/styles/home/filght.module.css";
import Link from "next/link";
import { useState } from "react";
export default function PopularFlightRoute(props) {
    const [getShow, setShow] = useState('hn');
    const list = [0, 1, 3, 4, 5, 6];
    return (
        <div className={`${styles.filght}`}>
            <div className={`${styles.top}`}>
                <div className={`${styles.txt}`}>
                    Đường bay phổ biến
                </div>
                <div className={`${styles.suggest}`}>
                    <div className={`${styles.suggest_item} ${getShow == 'hn' ? styles.active : ''}`} onClick={(e) => { setShow('hn') }}>
                        Hà Nội
                    </div>
                    <div className={`${styles.suggest_item} ${getShow == 'dn' ? styles.active : ''}`} onClick={(e) => { setShow('dn') }}>
                        Đà Nẵng
                    </div>
                    <div className={`${styles.suggest_item} ${getShow == 'hue' ? styles.active : ''}`} onClick={(e) => { setShow('hue') }}>
                        Huế
                    </div>
                    <div className={`${styles.suggest_item} ${getShow == 'kh' ? styles.active : ''}`} onClick={(e) => { setShow('kh') }}>
                        Khánh Hòa
                    </div>
                    <div className={`${styles.suggest_item} ${getShow == 'hcm' ? styles.active : ''}`} onClick={(e) => { setShow('hcm') }}>
                        Hồ Chí Minh
                    </div>
                </div>
            </div>
            <div className={`${styles.list}`}>
                {
                    list?.map((item, key) => (
                        <div key={key} className={`${styles.item}`}>
                            <div className={`${styles.infor}`}>
                                <div className={`img_dl ${styles.img_infor}`}>
                                    <img src="/images/home/icon_brand.svg" alt="Icon" />
                                </div>
                                <div className={`${styles.txt_infor}`}>
                                    <div className={`${styles.txt_top}`}>
                                        <p>Hà Nội</p>
                                        <div className={`img_dl ${styles.txt_img}`}>
                                            <img src="/images/home/icon_ten.svg" alt="ICON" />
                                        </div>
                                        <p>Đà Nẵng</p>
                                    </div>
                                    <div className={`${styles.txt_bottom}`}>
                                        <div className={`img_dl ${styles.txt_img}`}>
                                            <img src="/images/header/ngaydi.svg" alt="ICON" />
                                        </div>
                                        <p>20/06/2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.money}`}>
                                <span>Từ</span>
                                <p>2.321.356 đ</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`${styles.box_btn_xt}`}>
                <Link href="#" className={`${styles.btn_xt}`}>
                    <span>Xem thêm</span>
                    <div className={`img_dl ${styles.img_xt}`}>
                        <img src="/images/home/icon_xt.svg" alt="Icon" />
                    </div>
                </Link>
            </div>
        </div>
    )
}