import Header from "./components/header/header";
import HeaderTimer from "./components/header/timer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeaderTimer/>
      <main className={styles.main}>
        Confirm and Pay
      </main>
    </div>
  );
}
