import styles from "@/styles/home/favorite_destination.module.css";
import Link from "next/link";
export default function FavoriteDestination(props) {
    return (
        <div className={`${styles.destination}`}>
            <div className={`${styles.txt}`}>Điểm đến yêu thích</div>
            <div className={`${styles.list}`}>
                <div className={`${styles.list_item}`}>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/nha_trang.png" alt="Nha Trang" />
                        </div>
                        <span>Nha Trang</span>
                    </Link>
                </div>
                <div className={`${styles.list_item}`}>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/da_nang.png" alt="Nha Trang" />
                        </div>
                        <span>Đà Nẵng</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/vung_tau.png" alt="Nha Trang" />
                        </div>
                        <span>Bà Rịa - Vũng Tàu</span>
                    </Link>
                </div>
                <div className={`${styles.list_item}`}>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/ha_long.png" alt="Nha Trang" />
                        </div>
                        <span>Hạ Long</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/phu_quoc.png" alt="Nha Trang" />
                        </div>
                        <span>Phú Quốc</span>
                    </Link>
                </div>
                <div className={`${styles.list_item}`}>
                    <Link href="#" className={`${styles.item}`}>
                        <div className={`img_dl ${styles.img}`}>
                            <img src="/images/home/hoi_an.png" alt="Nha Trang" />
                        </div>
                        <span>Hội An</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}