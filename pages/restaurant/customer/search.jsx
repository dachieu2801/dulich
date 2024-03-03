import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/restaurant/home-customer.module.css";
import search from "@/styles/restaurant/search-customer.module.css";
import Image from "next/image";
import SearchRestaurant from "@/components/header/box_search/search_restaurant";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/header/header_2";
import Footer from "@/components/footer/footer";
import TwoPointRangeSlider from "@/components/TwoPointRangeSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Home() {
  const daysOfWeek = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "CN",
  ];

  let listPage = [];
  for (let i = 0; i < 3; i++) {
    listPage.push(i);
  }

  let listRestaurant = [];
  for (let index = 0; index < 10; index++) {
    listRestaurant.push({
      name: "Terraço Sky Bar & Restaurant - Khách sạn La Sinfonía Del Rey Hotel & Spa",
      address: "64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam",
      price: "50k - 650k",
      rate: "4.0",
      comment: "Tuyệt vời",
      review: "(156 đánh giá)",
      food_title: "Bánh mì",
      food_note: "Món Việt, Món Nhật",
    });
  }

  const [getShow, setShow] = useState(true);
  const pageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="img_dl slick-arrow custom-prev-arrow"
      onClick={(e) => {
        const newPage = currentPage - 1;
        if (newPage >= 0) {
          setCurrentPage(newPage);
        }
      }}
    >
      <img src="/images/restaurant/previous.svg" alt="Icon" />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="img_dl slick-arrow custom-next-arrow"
      onClick={(e) => {
        const newPage = currentPage + 1;
        if (newPage < listPage.length) {
          setCurrentPage(newPage);
        }
      }}
    >
      <img src="/images/restaurant/next.svg" alt="Icon" />
    </div>
  );

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
  };

  // handle sort
  const [sort, getSort] = useState("propose");

  const chooseSort = (type) => {
    getSort(type);
  };

  const [showOpenTime, setShowOpenTime] = useState(false);
  const boxOpenTime = useRef(null);

  const handleClickOutOpenTime = (event) => {
    if (boxOpenTime.current && !boxOpenTime.current.contains(event.target)) {
      setShowOpenTime(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutOpenTime);
    return () => {
      document.removeEventListener("mousedown", handleClickOutOpenTime);
    };
  }, []);

  // const [showOpenTime, setShowOpenTime] = useState({});
  // const boxOpenTime = useRef({});
  // const selectedElementRef = useRef(null);

  // const handleOpenTime = (index) => {
  //   setShowOpenTime((prevShowOpenTime) => ({
  //     ...prevShowOpenTime,
  //     [index]: true,
  //   }));
  // };

  // const handleClickOutside = (event, index) => {
  //   if (
  //     boxOpenTime.current[index] &&
  //     !boxOpenTime.current[index].contains(event.target)
  //   ) {
  //     setShowOpenTime((prevShowOpenTime) => ({
  //       ...prevShowOpenTime,
  //       [index]: false,
  //     }));
  //     console.log("Closed OpenTime Box: ", index);
  //   }
  // };

  const [expand, isExpand] = useState(true);
  // handle open/close filter
  const chooseExpand = () => {
    if (expand) {
      isExpand(false);
    } else {
      isExpand(true);
    }
  };

  const [expand1, isExpand1] = useState(true);
  const chooseExpand1 = () => {
    if (expand1) {
      isExpand1(false);
    } else {
      isExpand1(true);
    }
  };

  const [expand2, isExpand2] = useState(true);
  const chooseExpand2 = () => {
    if (expand2) {
      isExpand2(false);
    } else {
      isExpand2(true);
    }
  };

  const [expand3, isExpand3] = useState(true);
  const chooseExpand3 = () => {
    if (expand3) {
      isExpand3(false);
    } else {
      isExpand3(true);
    }
  };

  const [expand4, isExpand4] = useState(true);
  const chooseExpand4 = () => {
    if (expand4) {
      isExpand4(false);
    } else {
      isExpand4(true);
    }
  };

  const [expand5, isExpand5] = useState(true);
  const chooseExpand5 = () => {
    if (expand5) {
      isExpand5(false);
    } else {
      isExpand5(true);
    }
  };

  const [expand6, isExpand6] = useState(true);
  const chooseExpand6 = () => {
    if (expand6) {
      isExpand6(false);
    } else {
      isExpand6(true);
    }
  };

  const [expand7, isExpand7] = useState(true);
  const chooseExpand7 = () => {
    if (expand7) {
      isExpand7(false);
    } else {
      isExpand7(true);
    }
  };

  const [expand8, isExpand8] = useState(true);
  const chooseExpand8 = () => {
    if (expand8) {
      isExpand8(false);
    } else {
      isExpand8(true);
    }
  };

  const [expand9, isExpand9] = useState(true);
  const chooseExpand9 = () => {
    if (expand9) {
      isExpand9(false);
    } else {
      isExpand9(true);
    }
  };

  // handle open/close filter on mobile
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 450);
    isExpand(!(window.innerWidth < 450));
    console.log(expand);
  }, []);

  const clickFilterMobi = () => {
    if (isSmallScreen) {
      chooseExpand();
    }
  };

  // breadcrumb
  const breadcrumbItems = [
    {
      href: "/",
      text: "Trang chủ",
    },
    {
      href: "/restaurant/customer/home",
      text: "Restaurant",
    },
    {
      href: "/restaurant/customer/search",
      text: "Hà Nội",
    },
  ];

  const [menuSliderIndex, setMenuSliderIndex] = useState(0);

  const MenuItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: "Richico Apartments And Hotel",
    imgSrc:
      (index + 1) % 3 === 0
        ? "/images/restaurant/room.png"
        : (index + 1) % 3 === 1
        ? "/images/restaurant/restaurant.png"
        : "/images/restaurant/restaurant2.png",
    distance: "14 m",
  }));

  const handleMenuSliderChange = (increment) => {
    const newMenuSliderIndex = menuSliderIndex + increment;
    if (newMenuSliderIndex >= 0 && newMenuSliderIndex <= MenuItems.length - 6) {
      setMenuSliderIndex(newMenuSliderIndex);
    }
  };

  return (
    <>
      <Head>
        <title>Tìm kiếm Nhà hàng</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.home}>
        <div className={search.box_search}>
          <SearchRestaurant></SearchRestaurant>
        </div>
        <div className={search.block_restaurant}>
          <Breadcrumb items={breadcrumbItems} className={search.breadcrumb} />
          <p className={search.block_restaurant_title}>Nhà hàng tại Hà Nội</p>
          <p className={search.count_restaurant}>156 nhà hàng tại Hà Nội</p>

          {/* Tìm kiếm nhà hàng theo bộ lọc */}
          <div className={search.block_bottom}>
            <div className={search.block_filter}>
              <div
                className={search.block_filter_top}
                onClick={clickFilterMobi} // ???
              >
                <img src="/images/restaurant/icon_filter.svg" alt="icon" />
                <span>Bộ lọc</span>
              </div>

              <div
                className={search.block_filter_mid}
                style={{ display: expand ? "block" : "none" }}
              >
                {/* Khoảng giá */}
                <div
                  className={search.block_range_price}
                  style={{ paddingBottom: expand1 ? "60px" : "0" }}
                >
                  <div
                    className={` ${search.range_price_top} unselectable`}
                    onClick={chooseExpand1}
                  >
                    <div className={search.range_price_top1}>
                      <img
                        src="/images/restaurant/icon_range_price.svg"
                        alt="icon"
                      />
                      <span>Khoảng giá</span>
                    </div>
                    <img
                      src={
                        expand1
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div style={{ display: expand1 ? "block" : "none" }}>
                    <TwoPointRangeSlider value={100000000} />
                  </div>
                </div>

                {/* Đánh giá nhà hàng */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand2 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand2}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Đánh giá nhà hàng</span>
                    </div>
                    <img
                      src={
                        expand2
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand2 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="1" name="restaurant" />
                      <label htmlFor="1">
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                      </label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="2" name="restaurant" />
                      <label htmlFor="2">
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                      </label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="3" name="restaurant" />
                      <label htmlFor="3">
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                      </label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="4" name="restaurant" />
                      <label htmlFor="4">
                        <img src="/images/restaurant/star.svg" />
                        <img src="/images/restaurant/star.svg" />
                      </label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="4" name="restaurant" />
                      <label htmlFor="5">
                        <img src="/images/restaurant/star.svg" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Dịch vụ */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand3 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand3}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Dịch vụ</span>
                    </div>
                    <img
                      src={
                        expand3
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand3 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="order" name="restaurant" />
                      <label htmlFor="order">Dịch vụ đặt bàn</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="delivery" name="restaurant" />
                      <label htmlFor="delivery">
                        Nhà hàng tự giao (Delivery)
                      </label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="take_away" name="restaurant" />
                      <label htmlFor="take_away">
                        Khách hàng tự lấy (Take away)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Voucher */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand4 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand4}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Voucher</span>
                    </div>
                    <img
                      src={
                        expand4
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand4 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="voucher" name="restaurant" />
                      <label htmlFor="voucher">Nhà hàng có voucher</label>
                    </div>
                  </div>
                </div>

                {/* Mở cửa */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand5 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand5}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Mở cửa</span>
                    </div>
                    <img
                      src={
                        expand5
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand5 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="open" name="restaurant" />
                      <label htmlFor="open">Đang mở cửa</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="close" name="restaurant" />
                      <label htmlFor="close">Đóng cửa</label>
                    </div>
                  </div>
                </div>

                {/* Khoảng cách */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand6 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand6}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Khoảng cách</span>
                    </div>
                    <img
                      src={
                        expand6
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand6 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="under1" name="restaurant" />
                      <label htmlFor="under1">&lt; 1Km</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="from1to2" name="restaurant" />
                      <label htmlFor="from1to2">1 - 2Km</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="form2to3" name="restaurant" />
                      <label htmlFor="form2to3">2 - 3Km</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="from3to5" name="restaurant" />
                      <label htmlFor="from3to5">3 - 5Km</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="over5" name="restaurant" />
                      <label htmlFor="over5">&gt; 5Km</label>
                    </div>
                  </div>
                </div>

                {/* Ẩm thực */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand7 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand7}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Ẩm thực</span>
                    </div>
                    <img
                      src={
                        expand7
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand7 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="vietnamese"
                        name="restaurant"
                      />
                      <label htmlFor="vietnamese">Món Việt</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="chinese" name="restaurant" />
                      <label htmlFor="chinese">Món Trung</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="korean" name="restaurant" />
                      <label htmlFor="korean">Món Hàn</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="japanese" name="restaurant" />
                      <label htmlFor="japanese">Món Nhật</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="indian" name="restaurant" />
                      <label htmlFor="indian">Món Ấn</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="us_uk" name="restaurant" />
                      <label htmlFor="us_uk">Món Âu - Mỹ</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="thailand" name="restaurant" />
                      <label htmlFor="thailand">Món Thái</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="spainish" name="restaurant" />
                      <label htmlFor="spainish">Món Tây Ban Nha</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="italian" name="restaurant" />
                      <label htmlFor="italian">Món Ý</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="french" name="restaurant" />
                      <label htmlFor="french">Món Pháp</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="other" name="restaurant" />
                      <label htmlFor="other">Khác</label>
                    </div>
                  </div>
                </div>

                {/* Loại nhà hàng */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand8 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand8}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Loại nhà hàng</span>
                    </div>
                    <img
                      src={
                        expand8
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand8 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="buffet" name="restaurant" />
                      <label htmlFor="buffet">Buffet</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="steak" name="restaurant" />
                      <label htmlFor="steak">Steak</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="hotpot" name="restaurant" />
                      <label htmlFor="hotpot">Lẩu</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="sushi" name="restaurant" />
                      <label htmlFor="sushi">Sushi</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="drink" name="restaurant" />
                      <label htmlFor="drink">Nhậu</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="bar" name="restaurant" />
                      <label htmlFor="bar">Bar</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="bbq" name="restaurant" />
                      <label htmlFor="bbq">BBQ</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="seafood" name="restaurant" />
                      <label htmlFor="seafood">Hải sản</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="hotpot_grill"
                        name="restaurant"
                      />
                      <label htmlFor="hotpot_grill">Lẩu & Nướng</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="vegetarian"
                        name="restaurant"
                      />
                      <label htmlFor="vegetarian">Chay</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="pizza" name="restaurant" />
                      <label htmlFor="pizza">Pizza</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="coffee_tea"
                        name="restaurant"
                      />
                      <label htmlFor="coffee_tea">Cà phê & Trà</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="rice" name="restaurant" />
                      <label htmlFor="rice">Cơm gia đình và văn phòng</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="streetfood"
                        name="restaurant"
                      />
                      <label htmlFor="streetfood">Ẩm thực đường phố</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="noodle" name="restaurant" />
                      <label htmlFor="noodle">Bún & Phở</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="fastfood" name="restaurant" />
                      <label htmlFor="fastfood">Đồ ăn nhanh</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="fastfood" name="restaurant" />
                      <label htmlFor="fastfood">Bánh mì</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input
                        type="checkbox"
                        id="restaurant"
                        name="restaurant"
                      />
                      <label htmlFor="restaurant">Nhà hàng</label>
                    </div>
                  </div>
                </div>

                {/* Bữa ăn */}
                <div
                  className={search.block_type_restaurant}
                  style={{ paddingBottom: expand9 ? "30px" : "0" }}
                >
                  <div
                    className={` ${search.type_restaurant_top} unselectable`}
                    onClick={chooseExpand9}
                  >
                    <div className={search.type_restaurant_top1}>
                      <img
                        src="/images/restaurant/writing_black.svg"
                        alt="icon"
                      />
                      <span>Bữa ăn</span>
                    </div>
                    <img
                      src={
                        expand9
                          ? "/images/restaurant/icon_arr_up.svg"
                          : "/images/restaurant/icon_arr_down.svg"
                      }
                      alt="icon"
                    />
                  </div>
                  <div
                    className={search.list_type_restaurant}
                    style={{ display: expand9 ? "flex" : "none" }}
                  >
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="breakfast" name="restaurant" />
                      <label htmlFor="breakfast">Ăn sáng</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="lunch" name="restaurant" />
                      <label htmlFor="lunch">Ăn trưa</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="dinner" name="restaurant" />
                      <label htmlFor="dinner">Ăn tối</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="brunch" name="restaurant" />
                      <label htmlFor="brunch">Brunch</label>
                    </div>
                    <div className={search.type_restaurant}>
                      <input type="checkbox" id="drinks" name="restaurant" />
                      <label htmlFor="drinks">Đô uống</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bộ lọc */}
              <div className={search.block_filter_bottom}>
                <div
                  className={` ${search.block_expand} unselectable`}
                  style={{ display: expand ? "flex" : "none" }}
                  onClick={chooseExpand}
                >
                  <span>Thu gọn</span>
                  <img
                    src="/images/restaurant/icon_arr_up_blue.svg"
                    alt="icon"
                  />
                </div>
                <div
                  className={` ${search.block_expand} unselectable`}
                  style={{ display: !expand ? "flex" : "none" }}
                  onClick={chooseExpand}
                >
                  <span>Mở rộng</span>
                  <img
                    src="/images/restaurant/icon_arr_down_blue.svg"
                    alt="icon"
                  />
                </div>
              </div>
            </div>

            <div className={search.block_list_restaurant}>
              <div className={search.block_sort}>
                <button
                  className={`${search.sort} ${
                    sort == "propose" ? search.active_sort : ""
                  }`}
                  onClick={() => chooseSort("propose")}
                >
                  Đề xuất
                </button>
                <button
                  className={`${search.sort} ${
                    sort == "increase" ? search.active_sort : ""
                  }`}
                  onClick={() => chooseSort("increase")}
                >
                  Giá tăng dần
                </button>
                <button
                  className={`${search.sort} ${
                    sort == "decrease" ? search.active_sort : ""
                  }`}
                  onClick={() => chooseSort("decrease")}
                >
                  Giá giảm dần
                </button>
                <button
                  className={`${search.sort} ${
                    sort == "highest_rate" ? search.active_sort : ""
                  }`}
                  onClick={() => chooseSort("highest_rate")}
                >
                  Đánh giá cao nhất
                </button>
              </div>
              <div className={search.list_restaurant}>
                {listRestaurant.map((restaurant, index) => (
                  <Link className={search.restaurant} key={index} href="">
                    <div className={search.block_img}>
                      <Image
                        layout="fill"
                        src="/images/restaurant/chair.png"
                        alt="restaurant"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.description_food}>
                        <div className={styles.description_food}>
                          <span className={styles.custom_title}>
                            {restaurant.food_title}
                          </span>
                          <p className={styles.note}>{restaurant.food_note}</p>
                        </div>

                        <div
                          className={styles.open_time}
                          ref={(e) => {
                            boxOpenTime.current = e;
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowOpenTime(true);
                          }}
                        >
                          <p className={styles.note}>Giờ mở cửa</p>
                          <img src={`/images/restaurant/info-circle.svg`} />
                          {/* Box hiển thị giờ mở cửa */}
                          {showOpenTime ? (
                            <div
                              key={index}
                              className={`${search.box_opentime}`}
                            >
                              <div className={`${search.body_opentime}`}>
                                <h2>Giờ mở cửa</h2>
                                {daysOfWeek.map((day, i) => (
                                  <div
                                    key={i}
                                    className={`${search.item_opentime}`}
                                  >
                                    <div className={`${search.txt_opentime}`}>
                                      {day}
                                    </div>
                                    <div className={`${search.opentime}`}>
                                      8:00 - 20:00
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className={styles.description_menu}>
                        <p className={styles.title_description}>
                          {restaurant.name}
                        </p>
                        <div className={styles.rating}>
                          <img
                            className={styles.img_writing}
                            src={`/images/restaurant/writing.svg`}
                            alt="image"
                          />
                          <div className={styles.rate}>
                            <p className={styles.rate_color}>
                              {restaurant.rate}
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
                              {restaurant.comment}
                            </p>
                            <span className={styles.review}>
                              {restaurant.review}
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
                          <p className={styles.title_address}>
                            {restaurant.address}
                          </p>
                        </div>

                        <div className={styles.condition}>
                          <div className={styles.main_condition_1}>
                            <img src="/images/restaurant/food.svg" alt="icon" />
                            <p className={styles.order}>Đặt bàn</p>
                          </div>
                          <div className={styles.main_condition_2}>
                            <img
                              src="/images/restaurant/delivery.svg"
                              alt="icon"
                            />
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
                              {restaurant.price}
                            </span>
                            /người
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                <div className={search.pagination}>
                  <CustomPrevArrow />
                  <Slider ref={pageRef}>
                    <div className={search.list_page}>
                      {listPage?.map((page, i) => (
                        <Link
                          href=""
                          key={i}
                          onClick={(e) => {
                            e.preventDefault();
                            setShow(true);
                            setCurrentPage(page);
                          }}
                          className={`${search.page_number} ${
                            getShow && currentPage === i
                              ? search.page_active
                              : ""
                          }`}
                        >
                          <p>{page + 1}</p>
                        </Link>
                      ))}
                    </div>
                  </Slider>
                  <CustomNextArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Danh sách nhà hàng xung quanh Homestay */}
        <div className={search.main_restaurant}>
          <h1 className={search.title_restaurant}>
            Nhà hàng xung quanh Homestay
          </h1>
          <div className={search.custom_slide}>
            <button
              className={search.btn_slide_meunu}
              onClick={() => handleMenuSliderChange(-1)}
            >
              {"<"}
            </button>
            <div className={search.menu_slide}>
              <div className={search.main_menu}>
                {MenuItems.slice(menuSliderIndex, menuSliderIndex + 6).map(
                  (menuItem) => (
                    <div className={search.imageContainer} key={menuItem.id}>
                      <div className={search.item_menu}>
                        <img
                          className={search.taco}
                          src={menuItem.imgSrc}
                          alt="image"
                        />
                        <div className={search.title_menu}>
                          <p className={search.title}>{menuItem.title}</p>
                          <p className={search.distance}>{menuItem.distance}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <button
              className={search.btn_slide_meunu}
              onClick={() => handleMenuSliderChange(1)}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Xem gần đây */}
        <div className={search.suggest}>
          <div className={search.sug_txt}>Xem gần đây</div>
          <div className={search.list}>
            <Slider {...setting}>
              {listRestaurant?.map((restaurant, i) => (
                <div key={i} className={`${search.item}`}>
                  <div>
                    <Link href="#">
                      <div className={`img_dl ${search.item_slide}`}>
                        <img src="/images/restaurant/room.png" alt="Slide 1" />
                      </div>
                    </Link>
                    <div className={`${search.item_body}`}>
                      <Link href="#" className={`${search.title_hotel}`}>
                        {restaurant.name}
                      </Link>
                      <div className={styles.rating}>
                        <img
                          className={styles.img_writing}
                          src={`/images/restaurant/writing.svg`}
                          alt="image"
                        />
                        <div className={styles.rate}>
                          <p className={styles.rate_color}>{restaurant.rate}</p>
                          <span>
                            <img
                              className={styles.img_star}
                              src={`/images/restaurant/star.svg`}
                              alt="image"
                              style={{ marginTop: "0" }}
                            />
                          </span>
                        </div>
                        <div className={styles.comment}>
                          <p className={styles.title_comment}>
                            {restaurant.comment}
                          </p>
                          <span className={styles.review}>
                            {restaurant.review}
                          </span>
                        </div>
                      </div>

                      <div className={`${search.address}`}>
                        <div className={`img_dl ${search.img_add}`}>
                          <img
                            src="/images/restaurant/directions.svg"
                            alt="Icon"
                          />
                        </div>

                        <p>64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
