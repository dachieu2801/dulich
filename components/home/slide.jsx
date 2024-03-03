import styles from "@/styles/home/slide.module.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function Slide(props) {
  const [getShow, setShow] = useState(true);
  const sliderRef = useRef(null);
  const [currentKs, setCurrentKs] = useState(0);
  const [currentHt, setCurrentHt] = useState(0);
  const CustomPrevArrow = (props) => (
    <div {...props} className="img_dl slick-arrow custom-prev-arrow">
      <img src="/images/home/previous.svg" alt="Icon" />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="img_dl slick-arrow custom-next-arrow">
      <img src="/images/home/next.svg" alt="Icon" />
    </div>
  );

  const settingKs = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentKs(newIndex);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1, // Điều chỉnh số hàng cho màn hình nhỏ
        },
      },
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1, // Điều chỉnh số hàng cho màn hình nhỏ hơn nữa
        },
      },
    ],
  };

  const settingHt = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentKs(newIndex);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1, // Điều chỉnh số hàng cho màn hình nhỏ
        },
      },
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // Điều chỉnh số hàng cho màn hình nhỏ hơn nữa
        },
      },
    ],
  };

  const list_ks = [
    { txt: "Khách sạn căn hộ", img: "/images/home/ks1.png", link: "#" },
    { txt: "Khu nghỉ dưỡng", img: "/images/home/ks2.png", link: "#" },
    { txt: "Nhà nghỉ", img: "/images/home/ks3.png", link: "#" },
    { txt: "Bungalow", img: "/images/home/ks4.png", link: "#" },
  ];

  const list_ht = [
    { txt: "Căn hộ cao cấp", img: "/images/home/ht1.png", link: "#" },
    { txt: "Nhà nguyên căn", img: "/images/home/ht2.png", link: "#" },
    { txt: "Homestay", img: "/images/home/ht3.png", link: "#" },
    { txt: "Biệt thự nhà vườn", img: "/images/home/ht4.png", link: "#" },
    { txt: "Bungalow", img: "/images/home/ht5.png", link: "#" },
  ];

  return (
    <div className={styles.slide_home}>
      <div className={`${styles.slide_left}`}>
        <div className={`${styles.slide_left_top}`}>
          <div
            className={`${styles.slide_btn} ${
              getShow ? styles.slide_active : ""
            }`}
            onClick={(e) => {
              setShow(true);
            }}
          >
            Khách sạn
          </div>
          <div
            className={`${styles.slide_btn} ${
              !getShow ? styles.slide_active : ""
            }`}
            onClick={(e) => {
              setShow(false);
            }}
          >
            Homestay
          </div>
        </div>
        <div className={`${styles.desciption_slide}`}>
          {getShow ? (
            <>
              <div>Khách sạn</div>
              <p>Khách sạn căn hộ:</p>
              <span>
                Căn hộ đủ nội thất, nằm trong chung cư, có phòng riêng và các
                dịch vụ như khách sạn.
              </span>
            </>
          ) : (
            <>
              <div>Homestay</div>
              <p>Căn hộ cao cấp:</p>
              <span>
                Được cung cấp bởi cá nhân, cho thuê cả căn đầy đủ tiện nghi bếp,
                phòng ngủ, phòng khách.
              </span>
            </>
          )}
        </div>
      </div>
      <div className={`${styles.slide_right}`}>
        {getShow ? (
          <Slider {...settingKs} ref={sliderRef}>
            {list_ks?.map((ks, key) => (
              <Link
                href={ks.link}
                key={key}
                className={`${styles.item_slide} ${
                  currentKs === key ? styles.current_slide : ""
                }`}
              >
                <div className={`img_dl ${styles.img_slide}`}>
                  <img src={ks.img} alt="Slide 1" />
                </div>
                <p>{ks.txt}</p>
              </Link>
            ))}
          </Slider>
        ) : (
          <Slider {...settingHt} ref={sliderRef}>
            {list_ht?.map((ht, key) => (
              <Link
                href={ht.link}
                key={key}
                className={`${styles.item_slide} ${
                  currentKs === key ? styles.current_slide : ""
                }`}
              >
                <div className={`img_dl ${styles.img_slide}`}>
                  <img src={ht.img} alt="Slide 1" />
                </div>
                <p>{ht.txt}</p>
              </Link>
            ))}
          </Slider>
        )}
        <Link href="#" className={`${styles.btn_xt}`}>
          <span>Xem thêm</span>
          <div className={`img_dl ${styles.img_xt}`}>
            <img src="/images/home/icon_xt.svg" alt="Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}
