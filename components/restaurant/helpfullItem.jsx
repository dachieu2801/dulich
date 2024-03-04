import styles from "@/styles/restaurant/helpfullItem.module.css";

export default function HelpfullItem({srcImg,text,other}) {
  
  
  return(
    <div className={styles.container}>
      {
      other ?  
       <p style={{marginTop:26,color: '#136397'}}> + </p> :
       <img style={{marginTop:26}} src={srcImg} alt="Icon_hh" /> 
       }
       <p className={`${styles.text} ${other ? styles.other :''}`}> {text}</p>
    </div>
  )
}