import styles from "@/styles/restaurant/home-customer.module.css";
import React, { useState } from "react";
import BoxSearch from "@/components/header/boxSearch";
import SearchRestaurant from "@/components/header/box_search/search_restaurant";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home(props) {
  const settingKs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
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
    ],
  };

  const [activeMenu, setActiveMenu] = useState("ks"); //Bien gan gia tri cho phan menu tren thanh search
  //Su kien click vao item menu search
  const clickMenu = (e, active) => {
    setActiveMenu(active);
  };
  const [foodSliderIndex, setFoodSliderIndex] = useState(0);
  const [menuSliderIndex, setMenuSliderIndex] = useState(0);

  const FoodImages = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    path:
      index + 1 < 13
        ? `/images/restaurant/sushi.png?id=${index + 1}`
        : `/images/restaurant/steak.png?id=${index + 1}`,
  }));

  const MenuItems = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title:
      "Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey Hotel & Spa",
    imgSrc:
      index + 1 > 3
        ? "/images/restaurant/chair.png"
        : "/images/restaurant/taco.png",
    rating: 4.2,
    commentCount: 156,
    priceRange: "50k - 650k/người",
  }));

  const RecentlyViewedItems = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    title: `Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey Hotel & Spa`,
    imgSrc: `/images/restaurant/room.png`,
    rating: 4.0,
    commentCount: 156,
    address: `64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam`,
  }));

  const handleFoodSliderChange = (increment) => {
    const newFoodSliderIndex = foodSliderIndex + increment;
    if (
      newFoodSliderIndex >= 0 &&
      newFoodSliderIndex <= FoodImages.length - 14
    ) {
      setFoodSliderIndex(newFoodSliderIndex);
    }
  };

  const handleMenuSliderChange = (increment) => {
    const newMenuSliderIndex = menuSliderIndex + increment;
    if (newMenuSliderIndex >= 0 && newMenuSliderIndex <= MenuItems.length - 3) {
      setMenuSliderIndex(newMenuSliderIndex);
    }
  };

  const generateItems = () => {
    const items = [];

    for (let i = 0; i < 9; i++) {
      items.push(
        <div key={i} className={styles.item_new_restaurant}>
          <img
            className={styles.img_new_res}
            src={`/images/restaurant/taco_ngang.png`}
            alt="icon"
          />
          <div className={styles.description}>
            <div className={styles.description_food}>
              <span className={styles.custom_title}>Bánh mì</span>
              <p className={styles.note}>Món Việt, món Nhật</p>
            </div>
            <div className={styles.description_menu}>
              <p className={styles.title_description}>
                Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey
                Hotel & Spa
              </p>
              <div className={styles.rating}>
                <img
                  className={styles.img_writing}
                  src={`/images/restaurant/writing.svg`}
                  alt="image"
                />
                <div className={styles.rate}>
                  <p className={styles.rate_color}>4.0</p>
                  <span>
                    <img
                      className={styles.img_star}
                      src={`/images/restaurant/star.svg`}
                      alt="image"
                    />
                  </span>
                </div>
                <div className={styles.comment}>
                  <p className={styles.title_comment}>Tuyệt vời</p>
                  <span className={styles.review}>(156 đánh giá)</span>
                </div>
              </div>

              <div className={styles.address}>
                <img
                  src="/images/restaurant/directions.svg"
                  alt="icon"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                <p className={styles.title_address}>
                  64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam
                </p>
              </div>

              <div className={styles.condition}>
                <div className={styles.main_condition_1}>
                  <img src="/images/restaurant/food.svg" alt="icon" />
                  <p className={styles.order}>Đặt bàn</p>
                </div>
                <div className={styles.main_condition_2}>
                  <img src="/images/restaurant/delivery.svg" alt="icon" />
                  <p className={styles.delivery}>Giao món</p>
                </div>
                <div className={styles.main_condition_3}>
                  <img src="/images/restaurant/bag.svg" alt="icon" />
                  <p className={styles.pickup}>Lấy hàng</p>
                </div>
              </div>

              <div className={styles.price}>
                <p className={styles.price_style}>
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    50k - 650k
                  </span>
                  /người
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return items;
  };

  const generateRecentlyViewedItems = () => {
    return RecentlyViewedItems.map((item) => (
      <div key={item.id} className={styles.item_new_room}>
        <img className={styles.img_new_room} src={item.imgSrc} alt="icon" />
        <div className={styles.description}>
          <div className={styles.description_menu}>
            <p className={styles.title_description}>{item.title}</p>
            <div className={styles.rating}>
              <img
                className={styles.img_writing}
                src={`/images/restaurant/writing.svg`}
                alt="image"
              />
              <div className={styles.rate}>
                <p className={styles.rate_color}>{item.rating}</p>
                <span>
                  <img
                    className={styles.img_star}
                    src={`/images/restaurant/star.svg`}
                    alt="image"
                  />
                </span>
              </div>
              <div className={styles.comment}>
                <p className={styles.title_comment}>Tuyệt vời</p>
                <span className={styles.review_1}>
                  ({item.commentCount} đánh giá)
                </span>
              </div>
            </div>
            <div className={styles.address}>
              <img
                src="/images/restaurant/directions.svg"
                alt="icon"
                style={{
                  width: 24,
                  height: 24,
                }}
              />
              <p className={styles.title_address}>{item.address}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Head>
        <title>Nhà hàng</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.background_image}>
          <Header></Header>
          <BoxSearch></BoxSearch>
        </div>
        <div className={styles.body}>
          <div className={styles.custom_food}>
            <button
              className={styles.btn_slide}
              onClick={() => handleFoodSliderChange(-1)}
            >
              {"<"}
            </button>
            <div className={styles.food_slide}>
              <div className={styles.imageContainer}>
                {FoodImages.slice(foodSliderIndex, foodSliderIndex + 10).map(
                  (image) => (
                    <div className={styles.item_food} key={image.id}>
                      <img src={image.path} alt={image.id} />
                      <div>{image.id < 13 ? "Sushi" : "Steak"}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            <button
              className={styles.btn_slide}
              onClick={() => handleFoodSliderChange(1)}
            >
              {">"}
            </button>
          </div>

          <div className={styles.main_restaurant}>
            <h1 className={styles.title_restaurant}>Nhà hàng nổi bật</h1>
            <div className={styles.custom_slide}>
              <button
                className={styles.btn_slide_meunu}
                onClick={() => handleMenuSliderChange(-1)}
              >
                {"<"}
              </button>
              <div className={styles.menu_slide}>
                <div className={styles.main_menu}>
                  {MenuItems.slice(menuSliderIndex, menuSliderIndex + 3).map(
                    (menuItem) => (
                      <div className={styles.imageContainer} key={menuItem.id}>
                        <div className={styles.item_menu}>
                          <img
                            className={styles.taco}
                            src={menuItem.imgSrc}
                            alt="image"
                          />
                          <div className={styles.title_menu}>
                            <p className={styles.title}>{menuItem.title}</p>
                            <div className={styles.rating}>
                              <img
                                className={styles.img_writing}
                                src={`/images/restaurant/writing.svg`}
                                alt="image"
                              />
                              <div className={styles.rate}>
                                <p className={styles.rate_color}>
                                  {menuItem.rating}
                                </p>
                                <span>
                                  <img
                                    className={styles.img_star}
                                    src={`/images/restaurant/star.svg`}
                                    alt="image"
                                  />
                                </span>
                              </div>
                              <div className={styles.comment}>
                                <p className={styles.title_comment}>
                                  Tuyệt vời
                                </p>
                                <span className={styles.review}>
                                  ({menuItem.commentCount} đánh giá)
                                </span>
                              </div>
                            </div>
                            <div className={styles.price}>
                              <p className={styles.price_style}>
                                {menuItem.priceRange}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <button
                className={styles.btn_slide_meunu}
                onClick={() => handleMenuSliderChange(1)}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className={styles.new_restaurant}>
            <h1 className={styles.title_restaurant}>Nhà hàng mới nhất</h1>
            <div className={styles.item_restaurant}>{generateItems()}</div>
            <div className={styles.more_option}>
              <button className={styles.btn_more}>Xem thêm</button>
              <img
                src={`/images/restaurant/arrow-narrow-right.svg`}
                alt="icon"
              />
            </div>
          </div>
        </div>

        <div className={styles.recently}>
          <div className={styles.main_recently}>
            <h1 className={styles.title_recently}>Xem gần đây</h1>
            <div className={styles.recently_slide}>
              <button
                className={styles.btn_slide_recently}
                onClick={() => handleMenuSliderChange(-1)}
              >
                {"<"}
              </button>
              <div className={styles.item_recently}>
                <div className={styles.container_recently}>
                  {generateRecentlyViewedItems()}
                </div>
              </div>
              <button
                className={styles.btn_slide_recently}
                onClick={() => handleMenuSliderChange(1)}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
