import styles from "@/styles/home/blog.module.css";
import Link from "next/link";
export default function ListBlog(props) {
    const list = [1, 2, 3, 4];
    return (
        <div className={`${styles.blog}`}>
            <div className={`${styles.txt}`}>
                Cẩm nang du lịch
            </div>
            <div className={`${styles.list}`}>
                <div className={`${styles.blog_left}`}>
                    <div className={`img_dl ${styles.img_left}`}>
                        <img src="/images/home/blog.png" alt="Blog" />
                    </div>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.title}`}>
                            Kinh nghiệm đi du lịch Buôn Ma Thuột từ A - Z mọi du khách cần biết
                        </div>
                        <div className={`${styles.describe}`}>
                            Du lịch đang trở thành xu hướng mới được khách du lịch mọi lứa tuổi yêu thích. Không chỉ có cơ hội hòa mình giữa thiên nhiên hùng vĩ, tận hưởng khí hậu ấm áp, khô nóng đặc trưng, du khách còn được khám phá văn hóa Tây Nguyên, gặp gỡ những người dân bản địa thân thiện, vui vẻ. Bạn đang lên kế hoạch cho chuyến du lịch Buôn Ma Thuột mà vẫn gặp khó khăn khi lên lịch trình, lựa chọn điểm đến?
                        </div>
                        <div className={`${styles.other}`}>
                            <div className={`${styles.author}`}>
                                <span>Tác giả:</span>
                                <p>Nguyễn Ngọc Tuyết Phương</p>
                            </div>
                            <p className={`${styles.date}`}>20/10/2022</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.blog_right}`}>
                    {
                        list?.map((item, key) => (
                            <div key={key} className={`${styles.item}`}>
                                <div className={`img_dl ${styles.img_item}`}>
                                    <img src="/images/home/blog.png" alt="Blog" />
                                </div>
                                <div className={`${styles.content}`}>
                                    <div className={`${styles.title}`}>
                                        Kinh nghiệm đi du lịch Buôn Ma Thuột từ A - Z mọi du khách cần biết
                                    </div>
                                    <div className={`${styles.describe}`}>
                                        Du lịch đang trở thành xu hướng mới được khách du lịch mọi lứa tuổi yêu thích. Không chỉ có cơ hội hòa mình giữa thiên nhiên hùng vĩ, tận hưởng khí hậu ấm áp, khô nóng đặc trưng, du khách còn được khám phá văn hóa Tây Nguyên, gặp gỡ những người dân bản địa thân thiện, vui vẻ. Bạn đang lên kế hoạch cho chuyến du lịch Buôn Ma Thuột mà vẫn gặp khó khăn khi lên lịch trình, lựa chọn điểm đến?
                                    </div>
                                    <div className={`${styles.other}`}>
                                        <div className={`${styles.author}`}>
                                            <span>Tác giả:</span>
                                            <p>Nguyễn Ngọc Tuyết Phương</p>
                                        </div>
                                        <p className={`${styles.date}`}>20/10/2022</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
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