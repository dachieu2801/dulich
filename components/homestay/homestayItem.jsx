import react, { useEffect, useState } from "react";
import styles from "@/styles/homestay/homestay_item.module.css";
import moment from "moment";
import Image from "next/image";
export default function HomestayItem(props) {
  return (
    <div className={styles.list_item}>
      <img
        className={styles.picture}
        src="/images/homestay/homestay_item_1.png"
        alt="hungha"
      />
      <img
        className={styles.heart_icon}
        src="/images/homestay/heart-broken.svg"
        alt="hungha"
      />

      <div>
        <div style={{ padding: "8px 8px 16px 8px" }}>
          <div className={styles.homestay_txt}>
            <p>Nguyên căn</p>
            <p style={{ fontSize: "12px" }}>Biệt thự nhà vườn</p>
          </div>
          <div className={styles.homestay_title}>
            Richico Apartments And Hotel
          </div>
          <div className={styles.homestay_review}>
            <img src="/images/homestay/writing.svg" alt="" />
            <p style={{ color: "#DB242D", fontWeight: "700" }}>9.2</p>
            <img
              src="/images/homestay/star.svg"
              width={16}
              height={16}
              alt=""
            />
            <span style={{ color: "#1C1B1E" }}>Tuyệt vời</span>
            <span style={{ color: "#605D62" }}>(156 đánh giá)</span>
          </div>
          <div className={styles.homestay_location}>
            <img
              src="/images/homestay/directions.svg"
              width={24}
              height={24}
              alt=""
            />
            64, Trần Hưng Đạo, Phú Quốc, Kiên Giang
          </div>
          <div className={styles.homestay_price}>
            <div>2.523.214 đ</div>
            <div className={styles.homestay_price_coupon}>
              <div className={styles.coupon}>
                <p style={{ fontWeight: "600" }}> Mã:</p>
                <p style={{ color: "#489B1C" }}>CHAOPHUQUOC</p>
                <p
                  style={{
                    color: "#DB242D",
                    borderRadius: "8px",
                    background: "#F8D3D5",
                    padding: "2px 4px",
                  }}
                >
                  -8%
                </p>
              </div>
              <div>
                Còn <span style={{ color: "#DB242D" }}>2.321.356 đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
