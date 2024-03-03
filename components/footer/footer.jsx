import styles from "@/styles/footer.module.css";
import Link from "next/link";
export default function Footer() {

    const list_introduce = [
        {
            link: '#',
            txt: 'Giới thiệu chung',
        },
        {
            link: '#',
            txt: 'Liên hệ',
        },
        {
            link: '#',
            txt: 'Điều khoản sử dụng',
        },
        {
            link: '#',
            txt: 'Chính sách bảo mật',
        },
        {
            link: '#',
            txt: 'Quy định về thanh toán',
        },
        {
            link: '#',
            txt: 'Quy định về xác nhận thông tin đặt hàng',
        },
        {
            link: '#',
            txt: 'Chính sách về hủy đặt phòng và hoàn trả tiền',
        },
    ];

    const list_link = [
        {
            txt: 'Facebook',
            img: '/images/footer/facebook.svg',
            link: '#'
        },
        {
            txt: 'Twitter',
            img: '/images/footer/twitter.svg',
            link: '#'
        },
        {
            txt: 'Instagram',
            img: '/images/footer/instagram.svg',
            link: '#'
        },
        {
            txt: 'Youtube',
            img: '/images/footer/youtube.svg',
            link: '#'
        },
    ];

    const list_blog = [
        {
            txt: 'Tin tức đó đây',
            link: '#'
        },
        {
            txt: 'Bản sắc văn hóa',
            link: '#'
        },
        {
            txt: 'Ẩm thực vùng miền',
            link: '#'
        },
        {
            txt: 'Điểm dùng chân',
            link: '#'
        },
        {
            txt: 'Tin tức',
            link: '#'
        },
        {
            txt: 'Tin khuyến mãi',
            link: '#'
        },
        {
            txt: 'Kinh nghiệm du lịch',
            link: '#'
        },
        {
            txt: 'Mẹo vặt đi máy bay',
            link: '#'
        },
        {
            txt: 'Điểm du lịch',
            link: '#'
        },
    ];
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.body}`}>
                <div className={`${styles.box01}`}>
                    <div className={`${styles.company}`}>
                        <div className={`${styles.address}`}>
                            <div className={`${styles.txt}`}>
                                Công ty Cổ phần Thanh toán Hưng Hà
                            </div>
                            <div className={`${styles.office}`}>
                                <div className={`img_dl ${styles.img}`}>
                                    <img src="/images/footer/icon_address.svg" alt="icon" />
                                </div>
                                <div className={`${styles.txt_office}`}>
                                    <p>VP1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội</p>
                                    <p>VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên</p>
                                    <p>VP3: Tầng 2, Số 1 đường Trần Nguyên Đán, KĐT Định Công, Hoàng Mai, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.phone}`}>
                            <div className={`img_dl ${styles.img}`}>
                                <img src="/images/footer/icon_phone.svg" alt="icon" />
                            </div>
                            <p>Hotline: 1900633682 - ấn phím 1</p>
                        </div>
                        <div className={`${styles.email}`}>
                            <div className={`img_dl ${styles.img}`}>
                                <img src="/images/footer/icon_mail.svg" alt="icon" />
                            </div>
                            <p>Email hỗ trợ: timviec365.vn@gmail.com</p>
                        </div>
                    </div>
                    <div className={`${styles.map}`}>
                        <div className={`${styles.txt}`}>
                            Tim kiếm chúng tôi trên Google maps
                        </div>
                        <div className={`${styles.gg_map}`}>
                            <img src="/images/footer/map.png" alt="Map" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.box02}`}>
                    <div className={`${styles.introduce}`}>
                        <div className={`${styles.txt}`}>Về chúng tôi</div>
                        <div className={`${styles.list}`}>
                            {
                                list_introduce?.map((item, key) => (
                                    <Link href={item.link} key={key} className={`${styles.item}`}>
                                        {item.txt}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${styles.link}`}>
                        <div className={`${styles.txt}`}>Liên kết với chúng tôi</div>
                        <div className={`${styles.list}`}>
                            {
                                list_link?.map((item, key) => (
                                    <Link href={item.link} key={key} className={`${styles.item}`}>
                                        <div className={`img_dl ${styles.img_link}`}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <p>{item.txt}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${styles.certification}`}>
                        <div className={`${styles.txt}`}>Chứng nhận</div>
                        <div className={`${styles.list}`}>
                            <Link href="#" className="img_dl">
                                <img src="/images/footer/cn1.svg" alt="Icon" />
                            </Link>
                            <Link href="#" className="img_dl">
                                <img src="/images/footer/cn2.svg" alt="Icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${styles.box03}`}>
                    <div className={`${styles.blog}`}>
                        <div className={`${styles.txt}`}>Du lịch Blog</div>
                        <div className={`${styles.list}`}>
                            {
                                list_blog?.map((item, key) => (
                                    <Link href={item.link} key={key} className={`${styles.item}`}>
                                        {item.txt}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${styles.app}`}>
                        <div className={`${styles.txt}`}>Tải app du lịch</div>
                        <div className={`${styles.list}`}>
                            <div className={`${styles.item}`}>
                                <p>Tải app trên Android</p>
                                <div className={`img_dl ${styles.img_app}`}>
                                    <img src="/images/footer/chplay.svg" alt="icon" />
                                </div>
                            </div>
                            <div className={`${styles.item}`}>
                                <p>Tải app trên IOS</p>
                                <div className={`img_dl ${styles.img_app}`}>
                                    <img src="/images/footer/appstore.svg" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}