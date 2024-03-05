import styles from "@/styles/restaurant/contentEvaluate.module.css";
import {useState} from 'react'

export default function ContentEvaluate(prop) {
  const [isComment, setIsComment] = useState (false)
  
  
  
  return(
    <div className={styles.container}>
       <p className={styles.title}>Tốt đáng để trải nghiệm</p>
       <p className={styles.detailComment}>trờii đẹpp , đồ ăn ngonn , nhan vien dễ thuơng mọi nguời nên thử phòng ốc ổn áp quạ okey</p>
       <p>
         <img style={{ cursor: 'pointer'}} src="/images/restaurant/like.svg" alt="Icon_hh" />
         <span className={styles.rep}>Trả lời</span>
       </p>
    </div>
  )

}