import styles from "@/styles/header/box_search.module.css";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SearchRestaurant(props) {
  const [showKeyup, setShowKeyup] = useState(true); //Bien hien thi phan box goi y tim kiem

  //Danh sach anh thuc
  const list_menu = [
    { link: "#", name: "Đặt bàn", img: "/images/header/icon_dat_ban.svg" },
    { link: "#", name: "Giao Món", img: "/images/header/icon_giao_mon.svg" },
    { link: "#", name: "Lấy Hàng", img: "/images/header/icon_lay_hang.svg" },
  ];

  const list_dish = [
    { link: "#", name: "Món Việt" },
    { link: "#", name: "Món Trung" },
    { link: "#", name: "Món Hàn" },
    { link: "#", name: "Món Nhật" },
    { link: "#", name: "Món Ấn" },
    { link: "#", name: "Món Âu - Mỹ" },
    { link: "#", name: "Món Trung" },
    { link: "#", name: "Món Thái" },
    { link: "#", name: "Món Trung" },
    { link: "#", name: "Món Tây Ban Nha" },
    { link: "#", name: "Món Ý" },
    { link: "#", name: "Món Pháp" },
    { link: "#", name: "Món Khác" },
  ];

  const list_cuisine = [
    {
      link: "#",
      img: "/images/header/icon_buffet.svg",
      name: "Buffet",
    },
    {
      link: "#",
      img: "/images/header/icon_steak.svg",
      name: "Steak",
    },
    {
      link: "#",
      img: "/images/header/icon_lau.svg",
      name: "Lẩu",
    },
    {
      link: "#",
      img: "/images/header/icon_sushi.svg",
      name: "Sushi",
    },
    {
      link: "#",
      img: "/images/header/icon_nhau.svg",
      name: "Nhậu",
    },
    {
      link: "#",
      img: "/images/header/icon_bar.svg",
      name: "Bar",
    },
    {
      link: "#",
      img: "/images/header/icon_bbq.svg",
      name: "BBQ",
    },
    {
      link: "#",
      img: "/images/header/icon_hai_san.svg",
      name: "Hải Sản",
    },
    {
      link: "#",
      img: "/images/header/icon_chay.svg",
      name: "Chay",
    },
    {
      link: "#",
      img: "/images/header/icon_pizza.svg",
      name: "Pizza",
    },
    {
      link: "#",
      img: "/images/header/icon_cafe.svg",
      name: "Cà phê & Trà",
    },
    {
      link: "#",
      img: "/images/header/icon_lau_nuong.svg",
      name: "Lẩu nướng",
    },
  ];

  //Dong mo box goi y
  const [showSug, setShowSug] = useState(false);
  const boxSug = useRef(null);
  const handleClickOutSug = (event) => {
    if (boxSug.current && !boxSug.current.contains(event.target)) {
      setShowSug(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSug);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSug);
    };
  }, []);

  const box_search_one = (
    <div className={`${styles.box_search_one}`} style={{ zIndex: 1000 }}>
      <div className={`${styles.box_left_tk}`}>
        <div className={`${styles.top_left_tk}`}>
          {list_menu?.map((menu, key) => (
            <div key={key} className={`${styles.item_menu_tk}`}>
              <div className={`img_dl ${styles.img_tk}`}>
                <img src={menu?.img} alt={`Icon ${menu?.name}`} />
              </div>
              <Link href={menu.link} className={`${styles.menu_name_tk}`}>
                {menu?.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={`${styles.box_txt_tk}`}>Ẩm thực</div>
        <div className={`${styles?.list_dish}`}>
          {list_dish?.map((dish, key) => (
            <div key={key} className={`${styles.item_dish}`}>
              <Link href={dish.link}>{dish.name}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.ke_sug}`}></div>
      <div className={`${styles.box_right_tk}`}>
        <div className={`${styles.box_txt_tk}`}>Ẩm thực</div>
        <div className={`${styles.list_cuisine}`}>
          {list_cuisine?.map((cuisine, key) => (
            <Link
              href={cuisine.link}
              key={key}
              className={`${styles.item_cuisine}`}
            >
              <div className={`img_dl ${styles.img_cuisine}`}>
                <img src={cuisine.img} alt={`Icon ${cuisine.name}`} />
              </div>
              <div className={`${styles.cuisine_txt}`}>{cuisine.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  const box_search_two = () => {
    return (
      <div className={`${styles.box_search_two}`}>
        <div className={`${styles.item_two_tk}`}>
          <div className={`img_dl ${styles.img_two_tk}`}>
            <img src="/images/header/icon_cafe.svg" alt="Icon" />
          </div>
          <div className={`${styles.item_txt_tk}`}>
            <p>Dalat Womder Resort</p>
            <span>Thanh Xuân, Hà Nội</span>
          </div>
        </div>

        <div className={`${styles.item_two_tk}`}>
          <div className={`img_dl ${styles.img_two_tk}`}>
            <img src="/images/header/icon_cafe.svg" alt="Icon" />
          </div>
          <div className={`${styles.item_txt_tk}`}>
            <p>Dalat Womder Resort</p>
            <span>Thanh Xuân, Hà Nội</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.box_body}`}>
        <div className={`${styles.body_item}`}>
          <div className={`${styles.item_txt}`}>
            <div className={`img_dl ${styles.img_item}`}>
              <img src="/images/header/diadiem.svg" alt="Icon" />
            </div>
            <span className={`${styles.item_txt}`}>Điểm đến</span>
          </div>
          <div className={`${styles.inp_text}`}>
            <input type="text" placeholder="Thành phố, khách sạn, điểm đến" />
          </div>
        </div>
        <div className={`${styles.clear}`}></div>
        <div className={`${styles.body_item_res}`}>
          <div className={`${styles.item_txt}`}>
            <div className={`img_dl ${styles.img_item}`}>
              <img src="/images/header/icon_search_black.svg" alt="Icon" />
            </div>
            <span className={`${styles.item_txt}`}>Tìm kiếm</span>
          </div>
          <div className={`${styles.inp_text}`}>
            <input
              type="text"
              placeholder="Tên nhà hàng, món ăn"
              onClick={(e) => {
                setShowSug(true);
              }}
            />
          </div>
        </div>
        <div className={`${styles.body_btn}`}>
          <button className={`img_dl ${styles.btn_search}`}>
            <img src="/images/header/icon_search.svg" alt="Icon" />
          </button>
        </div>

        {showSug ? (
          <div className={`${styles.box_suggest_tk}`} ref={boxSug}>
            {showKeyup ? box_search_one : box_search_two()}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
