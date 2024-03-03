import Link from "next/link";
import styles from "@/styles/header/header.module.css";
import { useEffect, useRef, useState } from "react";

export default function Header(props) {
  const [showInfor, setShowInfor] = useState(false); //Bien hien thi box thong tin sau dang nhap
  // Su kien hien thi box thong tin
  const clickShowInfor = (e) => {
    showInfor ? setShowInfor(false) : setShowInfor(true);
  };
  //Sự kiện đóng popup thong tin
  const popupRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowInfor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [menuMobile, setMenuMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1024) {
        setMenuMobile(true);
      }
    };

    // Initial update
    checkMobile();

    // Update on window resize
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const clickShowMenu = () => {
    if (menuMobile) {
      setMenuMobile(false);
    } else {
      setMenuMobile(true);
    }
  };
  //End
  return (
    <div className={`${styles.header}`}>
      <div
        className={`img_dl ${styles.icon_menu}`}
        onClick={(e) => {
          clickShowMenu();
        }}
      >
        <img src="/images/header/icon_menu.svg" alt="Icon" />
      </div>
      <div className={`${styles.head_left}`}>
        <Link href={"/"} className={`img_dl ${styles.logo_hh}`}>
          <img src="/images/logo_home.png" alt="Logo" />
        </Link>
        <div
          className={`${styles.box_menu} ${
            menuMobile ? styles.menu_mobile : ""
          }`}
        >
          <div className={`${styles.menu}`}>
            <div className={`${styles.item_menu}`}>
              <Link href="/hotel">Khách sạn</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="/restaurant/customer/home">Nhà hàng</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="/homestay">Homestay</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="#">Chuyến bay</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="/tour/customer/home">Tour</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="/car">Chuyến xe</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="#">Top thương hiệu</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="#">Tiện ích</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="#">Hợp tác</Link>
            </div>
            <div className={`${styles.item_menu}`}>
              <Link href="#">Blog</Link>
            </div>
            <div className={`${styles.item}`}>
              <div className={`${styles.btn_login}`}>
                <Link href="#">Đăng nhập</Link>
              </div>
              <div className={`${styles.btn_regis}`}>
                <Link href="#">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.header_right}`}>
        <div className={`${styles.item_right}`}>
          <div className={`img_dl ${styles.img_item}`}>
            <img src="/images/header/icon_huongdan.svg" alt="icon website" />
          </div>
          <div className={`img_dl ${styles.img_item}`}>
            <img src="/images/header/icon_noti.svg" alt="icon website" />
          </div>
        </div>
        <div
          className={`${styles.item_right} ${styles.mobile}`}
          style={{ display: "none" }}
        >
          <div className={`${styles.btn_login}`}>
            <Link href="#">Đăng nhập</Link>
          </div>
          <div className={`${styles.btn_regis}`}>
            <Link href="#">Đăng ký</Link>
          </div>
        </div>
        <div className={`${styles.item_right} ${styles.mobile}`}>
          <div className={`img_dl ${styles.img_item}`}>
            <img src="/images/header/icon_mess.svg" alt="icon website" />
          </div>
          <div className={`${styles.avatar_user}`}>
            <div
              className={`${styles.box_user}`}
              onClick={(e) => clickShowInfor(e)}
            >
              <div className={`img_dl ${styles?.img_avatar}`}>
                <img src="/images/avatar.png" alt="avatar" />
              </div>
              <div className={`img_dl ${styles.img_inf}`}>
                <img src="/images/header/icon_inf.svg" alt="icon website" />
              </div>
            </div>
            {showInfor ? (
              <div className={`${styles.box_infor}`} ref={popupRef}>
                <div className={`${styles.box_body}`}>
                  <div className={`${styles.box_item}`}>
                    <div className={`img_dl ${styles.item_avatar}`}>
                      <img src="/images/avatar.png" alt="avatar" />
                    </div>
                    <div className="infor_user">
                      <Link href="#" className={`${styles.name}`}>
                        Nguyễn Ngọc Tuyết Phương
                      </Link>
                      <p>ID: 1</p>
                      <p>simmons@example.com</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.box_item} ${styles.border_top} ${styles.flex_de}`}
                  >
                    <Link href="#" className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_tk.svg" alt="Icon" />
                      </div>
                      <span>Tài khoản</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_yt.svg" alt="Icon" />
                      </div>
                      <span>Yêu thích</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_dh.svg" alt="Icon" />
                      </div>
                      <span>Đơn hàng</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_hd.svg" alt="Icon" />
                      </div>
                      <span>Hướng dẫn</span>
                    </Link>
                    <Link href="#" className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_pass.svg" alt="Icon" />
                      </div>
                      <span>Mật khẩu</span>
                    </Link>
                  </div>
                  <div className={`${styles.box_item} ${styles.border_top}`}>
                    <div className={`${styles.item}`}>
                      <div className={`img_dl ${styles.img}`}>
                        <img src="/images/header/icon_logout.svg" alt="" />
                      </div>
                      <span>Đăng xuất</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
