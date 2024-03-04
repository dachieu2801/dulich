
import styles from '@/styles/restaurant/restaurantDetail.module.css'

export default function RestaurantDetail({ restaurantDetail }) {

  return (
    <div>
      <p className={`${styles.title}`}>{restaurantDetail.title}</p>
      <div className={`${styles.section}`}>
        <div>
          <p className={`${styles.mt_8}`}>
            <span>
              <img className={`${styles.me_8}`} src="/images/restaurant/writing.svg" alt="Icon_hh" />
              <span className={`${styles.rate} ${styles.me_4}`}>{restaurantDetail.rating}</span>
              <img className={`${styles.star} ${styles.me_8}`} src="/images/restaurant/star.svg" alt="Icon_hh" />
            </span>
            <span >Tuyệt vời</span>
            <span className={`${styles.evaluate}`}>({restaurantDetail.commentCount} đánh giá)</span>
          </p>
          <p className={`${styles.mt_8}`}>
            <img className={`${styles.me_8}`} src="/images/restaurant/add-detail.svg" alt="Icon_hh" />
            <span>{restaurantDetail.address1}, </span>
            <span className={`${styles.add2}`}>{restaurantDetail.address2}</span>
          </p>
          <p className={`${styles.mt_8}`}>
            <img className={`${styles.me_8}`} src="/images/restaurant/timeopen-detail.svg" alt="Icon_hh" />
            <span className={`${styles.time_open}`}>Đang mở cửa </span>
            <span>
              8:00 - 11:00 <img className={`${styles.ms_4} ${styles.me_4}`} src="/images/restaurant/dot.svg" alt="Icon_hh" /> 13:00 - 18:00
            </span>
          </p>
          <p className={`${styles.mt_8} ${styles.price}`}>
            <img className={`${styles.me_8}`} src="/images/restaurant/dola-detail.svg" alt="Icon_hh" />
            <span>
              {restaurantDetail.price}/người
            </span>
          </p>
          <div className={`${styles.introduct_container} `}>
            <p className={`${styles.introduct} `}>Giới thiệu</p>
            <p className={`${styles.desc} `}>{restaurantDetail.description}</p>
          </div>
        </div>
        <div>
          <p className={styles.society_group}>
            <span>
              Chat ngay
              <img className={styles.ms_8} src="/images/restaurant/mess-detail.svg" alt="Icon_hh" />
            </span>
            <span>
              Chia sẻ
              <img className={styles.ms_8} src="/images/restaurant/share-detail.svg" alt="Icon_hh" />

            </span>
            <span>
              <span className={styles.like}>
                Yêu thích
              </span>
              <img src="/images/restaurant/while-heart-detail.svg" alt="Icon_hh" />
            </span>
          </p>
          <div className={styles.img_detail}>
            <div className={styles.img}>
              <img
                className={styles.image1}
                src={restaurantDetail.imgSrc1}
                alt="hungha"

              />
              <img
                className={styles.image2}
                src={restaurantDetail.imgSrc2}
                alt="hungha"
              />
              {/* click ảnh........................... */}
                <p className={styles.more_img}>
                  Xem thêm 12 bức ảnh
                  <img className={styles.ms_8} src="/images/restaurant/img.svg" alt="Icon_hh" />
                </p>
            </div>
            <div>
              <img
                className={styles.image3}
                src={restaurantDetail.imgSrc3}
                alt="hungha"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}