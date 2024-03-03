import styles from "@/styles/hotel/list_suggest.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function ListSuggest() {
  const data = [1, 2, 3, 4, 5, 6, 7, , 9, 10, 11, 12];
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
  };
  return (
    <div className={styles.suggest}>
      <div className={styles.sug_txt}>Xem gần đây</div>
      <div className={styles.list}>
        <Slider {...setting}>
          {data?.map((item, key) => (
            <div key={key} className={`${styles.item}`}>
              <div>
                <Link href="#">
                  <div className={`img_dl ${styles.item_slide}`}>
                    <img src="/images/home/img_ks.png" alt="Slide 1" />
                  </div>
                </Link>
              </div>
              <div className={`${styles.item_body}`}>
                <Link href="#" className={`${styles.title_hotel}`}>
                  Richico Apartments And Hotel ichico Apartments And Hotel
                </Link>
                <div className={`${styles.item_body_1}`}>
                  <div className={`${styles.list_star}`}>
                    <div className={`img_dl ${styles.img_star}`}>
                      <img src="/images/home/icon_star.svg" alt="Icon" />
                    </div>
                    <div className={`img_dl ${styles.img_star}`}>
                      <img src="/images/home/icon_star.svg" alt="Icon" />
                    </div>
                    <div className={`img_dl ${styles.img_star}`}>
                      <img src="/images/home/icon_star.svg" alt="Icon" />
                    </div>
                  </div>
                  <div className={`${styles.type_hotel}`}>Khu nghỉ dưỡng</div>
                </div>
                <div className={`${styles.address}`}>
                  <div className={`img_dl ${styles.img_add}`}>
                    <img src="/images/home/icon_add.svg" alt="Icon" />
                  </div>
                  <p>64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
