import React from 'react'
import styles from "./info.module.css";
import { roboto_mono } from '@/app/page';
import Link from 'next/link';


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

        <div className={styles.social}>
            <h2 className={styles.socialTitle}>Social</h2>
            <Link href="https://github.com/Marcos-Felippe" className={styles.link}>
                <div className={styles.badgeGH}>
                    <h3 className={styles.titleSocialBadge}>GitHub</h3>
                    <div className={styles.iconGH}></div>
                </div>
            </Link>
            <Link href="https://www.linkedin.com/in/marcos-felippe-ab26b11a4" className={styles.link}>
                <div className={styles.badgeLN}>
                    <h3 className={styles.titleSocialBadge}>Linkedin</h3>
                    <div className={styles.iconLN}></div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Info