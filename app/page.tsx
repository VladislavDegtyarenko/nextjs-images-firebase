import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <Image src="/170123123536-los-angeles-skyline.jpg" fill alt="" />
      </div>

      <div className={styles.img}>
        <Image src="/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" fill alt="" />
      </div>

      <div className={styles.img}>
        <Image
          src="/los-angeles-california-LATG0221-0bdacf2d59414a04ad9d2515d9419e3a.jpg"
          fill
          alt=""
        />
      </div>
    </main>
  );
}
