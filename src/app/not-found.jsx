import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons"
import styles from "../Components/Css/custom404.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export  default function Custom404() {

    return<div className={styles.custom404Container}>

    <FontAwesomeIcon icon={faFaceDizzy} className={styles.icon404}></FontAwesomeIcon>
    <h1>404 - Page Not Found</h1>
    </div>
  }