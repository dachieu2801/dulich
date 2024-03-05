import styles from "@/styles/restaurant/evaluate.module.css";

import { Progress } from 'antd';
import {useState, useEffect} from 'react'

import Auth from '@/components/restaurant/auth'
import Auth2 from '@/components/restaurant/auth2'
import ContentEvaluate from '@/components/restaurant/contentEvaluateItem'

export default function Evaluate(props) {
  const [rate, setRate] = useState (4.2)
  const [percent, setPercent] = useState (((rate/5)*100))
  const [seeTypeEva, setSeeTypeEva] = useState ('Mới nhất')
  useEffect(() => {
    setPercent((rate/5)*100)
  }, [rate]); 
  
  //change seeTypeEva
  function seeTypeEvaHandle(e) {
    setSeeTypeEva(e.target.innerHTML)
  }

  return(
    <>
      <p className={styles.rateTitle}>Đánh giá</p>
      {/* box */}
      <div className={styles.rateBox}>
        <div className={styles.sectionRate}>
          <Progress
            className={styles.custom_progress}
            size= {200}
            type="circle"  percent={percent} 
            format={() => ``}
            strokeColor='#136397'
            strokeLinecap='#E6E1E6'
          />
          <div className={styles.innerText}>
            <p className={styles.rateNumber}>{rate}</p>
            <p className={styles.ratestring}>{rate === 5 ? 'Xuất xắc' : rate >= 4 ? 'Tuyệt vời' : rate >= 3? 'Tốt' : 'Không hài lòng' }</p>
          </div>
        </div>
        <div >
            <div className={styles.dashboardRate}>
               <p style={{width:92}}>Giá cả</p>
               <Progress className={styles.widthRow} percent={(225/347)*100} size={[430, 8]} type="line" format={() => ``}  />
               <p>225</p>
            </div>
            <div className={styles.dashboardRate}>
               <p style={{width:92}}>Dịch vụ</p>
               <Progress className={styles.widthRow} percent={(112/347)*100} size={[430, 8]} type="line" format={() => ``}  />
               <p>112</p>
            </div>
            <div className={styles.dashboardRate}>
               <p style={{width:92}}>Không gian</p>
               <Progress className={styles.widthRow} percent={(5/347)*100} size={[430, 8]} type="line" format={() => ``}  />
               <p>5</p>
            </div>
            <div className={styles.dashboardRate}>
               <p style={{width:92}}>Đồ ăn</p>
               <Progress className={styles.widthRow} percent={(5/347)*100} size={[430, 8]} type="line" format={() => ``}  />
               <p>5</p>
            </div>   
        </div>   
      </div>
       
      <div className={styles.evaComment}>
         <div className={styles.headEvaComment}>
           <div className={styles.navEvaComment}>
              <p 
                onClick={(e)=>seeTypeEvaHandle(e)}
                className={seeTypeEva === 'Mới nhất' ? styles.focuspEvaComment : styles.pEvaComment}
              >
                Mới nhất</p>
              <p 
                 onClick={(e)=>seeTypeEvaHandle(e)}
                className={seeTypeEva === 'Cũ nhất' ? styles.focuspEvaComment : styles.pEvaComment}
              >
                Cũ nhất
              </p>
              <p 
                onClick={(e)=>seeTypeEvaHandle(e)}
                className={seeTypeEva === 'Điểm thấp nhất' ? styles.focuspEvaComment : styles.pEvaComment}
              >
                Điểm thấp nhất
              </p>
              <p 
                onClick={(e)=>seeTypeEvaHandle(e)}
                className={seeTypeEva === 'Điểm cao nhất' ? styles.focuspEvaComment : styles.pEvaComment}
              >
                Điểm cao nhất
              </p>
           </div>
           <div>
             <img src="/images/restaurant/writing-red.svg" alt="Icon_hh" /> 
             <span className={styles.icon}>Đánh giá</span>
           </div>
         </div>
         <div className={styles.comment}>
            <Auth/>
            <ContentEvaluate/>
         </div>
      </div>
    </>
  )
}