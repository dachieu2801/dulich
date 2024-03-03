import styles from "@/styles/hotel/list_city.module.css";
import Link from "next/link";

export default function ListCity() {
    const list = [1, 2, 3, 4, 5, 6, 6, 2, 3, 4, 5, 2, 4, 2, 1, 2, 3, 5, 6];
    return (
        <div className={styles.city}>
            <div className={styles.txt}>Khách sạn theo tỉnh, thành phố</div>
            <div className={styles.list}>
                {
                    list?.map((item, key) => (
                        <Link key={key} href={'#'} className={styles.item}>
                            Hà Nội
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}