import styles from "@/styles/restaurant/auth.module.css";

export default function Auth(prop) {
  
  
  return(
    <div>
      <img  src="/images/restaurant/avatar.png" alt="avatar" /> 
      <div>
        <p>Arlene McCoy</p>
        <p>
          <img  src="/images/restaurant/pencil.svg" alt="avatar" /> 
          <span className={styles.beardDay}>14/05/2022</span>
        </p>
      </div>
    </div>
  )
}