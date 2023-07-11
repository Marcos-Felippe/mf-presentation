import React from 'react'
import styles from "./info.module.css";
import { roboto_mono } from '@/app/page';


const Info = () => {
  return (
    <div className={styles.container}>

        <div className={styles.bubles_container}>
            <div className={styles.bubles1}></div>
            <div className={styles.bubles2}></div>
            <div className={styles.bubles3}></div>
        </div>

        <div className={styles.title_container}>
            <div className={roboto_mono.className}>
                <h2 className={styles.title}>summary</h2>
            </div>
            
        </div>

        <ul>
            <li className={styles.li}>
                19 years old
            </li>
            <li className={styles.li}>
                Studying Control and Automation Engineering at PUC-Campinas University in Brazil.
            </li>
            <li className={styles.li}>
                Backend developer skills (apis, databases, authentication, microservices...).
            </li>
            <li className={styles.li}>
                Frontend developer skills (css, tailwind, bootstrap, authentication...).
            </li>
            <li className={styles.li}>
                Automation and Data Analysis skills (pandas, tensorflow, jupyter, machine learning...).
            </li>
        </ul>
    </div>
  )
}

export default Info