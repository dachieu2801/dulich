import react, { useEffect, useState } from "react";
import styles from "@/styles/homestay/homestay_recent_item.module.css";
import moment from "moment";
import Image from "next/image";
export default function HomestayRecentItem(props) {
  return (
    <div className={styles.list_item}>
      <img
        className={styles.picture}
        src="/images/homestay/homestay_item_2.png"
        alt="hungha"
      />

      <div>
        <div style={{ padding: "8px 8px 16px 8px" }}>
          <div className={styles.homestay_txt}>
            <p>Nguyên căn</p>
            <p style={{ fontSize: "12px" }}>Biệt thự nhà vườn</p>
          </div>
          <div className={styles.homestay_title}>
            Richico Apartments And Hotel Richico Apartments And Hotel
          </div>
          <div style={{ marginBottom: "8px" }}>
            <img src="/images/homestay/rating.svg" alt="" />
            <img src="/images/homestay/rating.svg" alt="" />
            <img src="/images/homestay/rating.svg" alt="" />
          </div>
          <span className={styles.box_txt}>Khu nghỉ dưỡng</span>
          <div className={styles.homestay_location}>
            <img
              src="/images/homestay/directions.svg"
              width={24}
              height={24}
              alt=""
            />
            64, Trần Hưng Đạo, Phú Quốc, Kiên Giang
          </div>
        </div>
      </div>
    </div>
  );
}
