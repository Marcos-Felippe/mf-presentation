import React from "react";
import styles from "./skills.module.css";
import { roboto_mono } from "@/app/page";

const Skills = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.divItem}>
            <div className={roboto_mono.className}>
                <h2 className={styles.webTitle}>Web Apps</h2>
            </div>
            <p className={styles.desc}>Responsive applications for multiple operating systems and browsers.</p>
            <div className={styles.items}>
                <div className={styles.item_web}>
                    <div className={styles.iconNav}></div>
                    <div className={styles.iconNav}></div>
                    <div className={styles.iconNav}></div>
                    <div className={styles.iconNav}></div>
                </div>
            </div>
        </div>

        <div className={styles.divItem}>
            <div className={roboto_mono.className}>
                <h2 className={styles.mobileTitle}>Mobile Apps</h2>
            </div>
            <p className={styles.desc}>Hybrid application development for Android and iOS.</p>
            <div className={styles.items}>
            
                <div className={styles.item_apple}>
                    <div className={styles.iconApple}></div>
                </div>
                <div className={styles.item_android}>
                    <div className={styles.iconAndroid}></div>
                </div>
            </div>
        </div>

        <div className={styles.divItem}>
            <div className={roboto_mono.className}>
                <h2 className={styles.apiTitle}>And More</h2>
            </div>
            <p className={styles.desc}>API, Micro-Services, Cloud Functions and much more BackEnd Development.</p>
            <div className={styles.items}>
                <div className={styles.item_api}></div>
                <div className={styles.item_api}></div>
            </div>
        </div>
    </div>
  );
};

export default Skills;