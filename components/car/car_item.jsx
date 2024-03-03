import react, { useEffect, useState } from "react";
import styles from "@/styles/car/car_item.module.css";
import moment from "moment";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CarItem(props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 5];
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
    rows: 3,
    // autoplay: true,
  };
  return (
    
    <>
      <div className={`${styles.list_car}`}>
        <Slider {...settingKs}>
          {data?.map((item, key) => (
            <div key={key} className={styles.card}>
              <div className={styles.car_image}>
                <img src="/images/car/car.png" alt="Toyota Grand New Avanza" />
              </div>
              <div className={styles.car_info}>
                <h2 className={styles.car_title}>Toyota Grand New Avanza</h2>
                <div className={styles.btn} style={{ marginBottom: "10px" }}>
                  <p>Tự lái</p>
                </div>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <div>
                      {" "}
                      <img src="/images/car/map.svg" alt="" />
                      <span>Hà Nội</span>
                    </div>
                    <div>
                      {" "}
                      <img src="/images/car/steering_wheel.svg" alt="" />
                      <span>Số sàn</span>
                    </div>
                    <div>
                      {" "}
                      <img src="/images/car/map.svg" alt="" />
                      <span>5 chỗ ngồi</span>
                    </div>
                  </div>
                  <div className={styles.feature}></div>
                  <div className={styles.feature}>
                    <div>
                      {" "}
                      <img src="/images/car/briefcase.svg" alt="" />
                      <span>1 hành lý lớn</span>
                    </div>
                    <div>
                      {" "}
                      <img src="/images/car/briefcase2.svg" alt="" />
                      <span>1 hành lý nhỏ</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.hotel_money}`}>
                  <div className={`${styles.money_item}`}>
                    <p>2.566.366 đ</p> <span>/Km</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
