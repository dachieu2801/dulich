import styles from "@/styles/restaurant/contact.module.css";

export default function Contact(prop) {
  
  
  return(
    <div>
      <div className={styles.icons}>
        <p className={styles.icon_order}>
          <img style={{marginRight:8}} src="/images/restaurant/order.svg" alt="Icon_hh" /> 
          Đặt bàn
        </p>
        <p className={styles.icon_delivery}>
          <img style={{marginRight:8}} src="/images/restaurant/delivery-blue.svg" alt="Icon_hh" /> 
          Giao món
        </p>
        <p className={styles.icon_bag}>
          <img style={{marginRight:8}} src="/images/restaurant/bag.svg" alt="Icon_hh" /> 
          Lấy hàng
        </p>
      </div>
      <p className={styles.contactN}>Liên hệ nhà hàng: 0123456789</p>
      <img className={styles.map} src="/images/restaurant/map.png" alt="Icon_hh" /> 
      <p>64, Trần Hưng Đạo, Phú Quốc, Kiên Giang, Việt Nam</p>
    </div>
  )
}