import styles from "@/styles/home/list_homestay.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
export default function ListHomeStay(props) {
    const data = [1, 2, 3, 4, 5, 6];
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };
    const settingKs = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2, // Điều chỉnh số hàng cho màn hình nhỏ
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1, // Điều chỉnh số hàng cho màn hình nhỏ hơn nữa
                },
            },
        ]
    };
    return (
        <div className={`${styles.list_hotel}`}>
            <Slider {...settingKs}>
                {
                    data?.map((item, key) => (
                        <div key={key} className={`${styles.item_hotel}`}>
                            <div className={`${styles.item_top}`}>
                                <Link href="#" className={`${styles.slide_img}`}>
                                    <Slider {...setting}>
                                        <div className={`img_dl ${styles.item_slide}`}>
                                            <img src="/images/home/img_ks.png" alt="Slide 1" />
                                        </div>
                                        <div className={`img_dl ${styles.item_slide}`}>
                                            <img src="/images/home/img_ks.png" alt="Slide 1" />
                                        </div>
                                    </Slider>
                                </Link>
                                <div className={`img_dl ${styles.img_love}`}>
                                    <img src="/images/home/icon_love.svg" alt="Icon" />
                                </div>
                            </div>
                            <div className={`${styles.item_body}`}>
                                <div className={`${styles.hotel_infor}`}>
                                    <div className={`${styles.item_body_1}`}>
                                        <div className={`${styles.txt_homestay}`}>
                                            Phòng riêng
                                        </div>
                                        <div className={`${styles.type_homestay}`}>
                                            Biệt thự nhà vườn
                                        </div>
                                    </div>
                                    <Link href="#" className={`${styles.title_hotel}`}>
                                        Richico Apartments And Hotel ichico Apartments And Hotel
                                    </Link>

                                    <div className={`${styles.total_evaluate}`}>
                                        <div className={`img_dl ${styles.img_dg}`}>
                                            <img src="/images/home/icon_dg.svg" alt="Icon" />
                                        </div>
                                        <p className="red">9.2</p>
                                        <div className={`img_dl ${styles.img_star_red}`}>
                                            <img src="/images/home/icon_star_red.svg" alt="Icon" />
                                        </div>
                                        <p>Tuyệt vời</p>
                                        <span>(156 đánh giá)</span>
                                    </div>
                                    <div className={`${styles.address}`}>
                                        <div className={`img_dl ${styles.img_add}`}>
                                            <img src="/images/home/icon_add.svg" alt="Icon" />
                                        </div>
                                        <p>64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam</p>
                                    </div>
                                </div>
                                <div className={`${styles.hotel_money}`}>
                                    <div className={`${styles.money_item1}`}>
                                        <span>Mã:</span>
                                        <p>CHAOPHUQUOC</p>
                                        <div>-8%</div>
                                    </div>
                                    <div className={`${styles.money_item2}`}>
                                        <div className={`${styles.item1}`}>
                                            <p>2.523.214 đ</p>
                                        </div>
                                        <div className={`${styles.item2}`}>
                                            <span>Còn</span> <p>2.321.356 đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}