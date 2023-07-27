import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.container}>
            <div>@2023 <br /><strong>MF Presentation</strong>.</div>
            <div className={styles.items}>
                <div>Made by</div>
                <div className={styles.div}><strong className={styles.name}>Marcos Felippe</strong>.</div>
                <div className={styles.icons}>
                    <Link href="https://github.com/Marcos-Felippe" className={styles.link}>
                        <div className={styles.socialGH}></div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/marcos-felippe-ab26b11a4" className={styles.link}>
                        <div className={styles.socialLN}></div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;