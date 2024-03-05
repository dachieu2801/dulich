import styles from "@/styles/restaurant/auth.module.css";

export default function Auth(prop) {
  
  
  return(
    <div className={styles.container}>
      <img className={styles.avartar} src="/images/restaurant/avatar.png" alt="avatar" /> 
      <div>
        <p className={styles.nameAuth}>Arlene McCoy</p>
        <p>
          <img className={styles.icon} src="/images/restaurant/pencil.svg" alt="avatar" /> 
          <span className={styles.beardDay}>14/05/2022</span>
        </p>
      </div>
    </div>
  )
}