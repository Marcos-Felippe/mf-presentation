import React from "react";
import styles from "./portfolio.module.css";
import { roboto_mono } from "@/app/page";

const Portfolio = () => {
  return (
    <div className={styles.container}>

        <div className={roboto_mono.className}>
            <h2 className={styles.selectTitle}>languages</h2>
        </div>
        <div className={styles.items}>
        
            <div className={styles.item_lang}>
                <span className={styles.title}>JS (TS)</span>
            </div>
            <div className={styles.item_lang}>
                <span className={styles.title}>Python</span>
            </div>
            <div className={styles.item_lang}>
                <span className={styles.title}>Go</span>
            </div>
            <div className={styles.item_lang}>
                <span className={styles.title}>Dart</span>
            </div>
            <div className={styles.item_lang}>
                <span className={styles.title}>SQL</span>
            </div>
        </div>

        <div className={roboto_mono.className}>
            <h2 className={styles.selectTitle}>tecnologies</h2>
        </div>
        <div className={styles.items}>

            <div className={styles.item_tecs}>
                <span className={styles.title}>React</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Next</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Nest</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Flutter</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Docker</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Mongo</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>MySQL</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Postegre</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Kafka</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Rabbitmq</span>
            </div>
            <div className={styles.item_tecs}>
                <span className={styles.title}>Redis</span>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;