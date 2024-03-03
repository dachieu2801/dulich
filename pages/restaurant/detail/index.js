
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header/header_2";
import BoxSearch from "@/components/header/box_search/search_restaurant";
import Footer from "@/components/footer/footer";
import RestaurantDetail from "@/components/restaurant/restaurantDetail"
import styles from "@/styles/restaurant/detail.module.css";


export default function Detail(props) {

  const restaurantDetail = {
    id: 1,
    title: `The Shells Resort & Spa Phú Quốc`,
    imgSrc1: `/images/restaurant/img-detail1.png`,
    imgSrc2: `/images/restaurant/img-detail1.png`,
    imgSrc3: `/images/restaurant/img-detail2.png`,
    rating: 9.2,
    commentCount: 156,
    address1: `64, Trần Hưng Đạo`,
    address2: `Phú Quốc, Kiên Giang`,
    timeOpen: 'ádas',
    price: '50k - 650k',
    description: 'Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Hải Châu của Đà Nẵng, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm The Marble Mountains nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng mát-xa, xông khô và bốn tắm nước nóng ngay trong khuôn viên.'
  }


  return (
    <>
      <Head>
        <title>The Shells Resort & Spa Phú Quốc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Header></Header>
        <div className={`${styles.container}`}>
          <div className={`${styles.boxsearch}`}>
            <BoxSearch></BoxSearch>
          </div>
          <RestaurantDetail restaurantDetail={restaurantDetail}/>
        </div>
      </div>
    </>
  )
}