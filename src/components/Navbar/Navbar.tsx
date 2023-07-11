"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
    return (
      <nav className={styles.container}>
        <Link href="/" className={styles.logo}>MF</Link>
        <div className={styles.links}>
            <DarkModeToggle />
        </div>
      </nav>
    )
  }
  