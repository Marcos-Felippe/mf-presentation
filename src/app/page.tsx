import styles from "./page.module.css";
import { Roboto_Mono } from "next/font/google";
import Portfolio from "@/components/Portfolio/Portfolio";
import Info from "@/components/Info/Info";
import Skills from "@/components/Skills/Skills";

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={styles.maincont}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={roboto_mono.className}>
            <p className={styles.titleType}>
              Hi!
            </p>
            <h1 className={styles.title}>
              Welcome to my presentation website.
            </h1>
          </div>
          
          <p className={styles.desc}>
            My name is Marcos Felippe, and i have been a programmer since 2017.
            Let`s see some of my skills as a programmer...
          </p>

          <div className={styles.bubles_container}>
            <div className={styles.bubles1}></div>
            <div className={styles.bubles2}></div>
            <div className={styles.bubles3}></div>
          </div>

        </div>
        <div className={styles.item_img_cont}>
          <div className={styles.item_img}>

          </div>
        </div>
      </div>

      <Info/>

      <Skills/>

      <Portfolio/>
      
    </div>
  )
}
