import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.container}>
            <div>@2023 <strong>MF Presentation</strong>.</div>
            <div className={styles.items}>
                <div>Made by</div>
                <div className={styles.div}><strong className={styles.name}>Marcos Felippe</strong>.</div>
                <Link href="https://github.com/Marcos-Felippe" className={styles.link}>
                    <div className={styles.social}></div>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;