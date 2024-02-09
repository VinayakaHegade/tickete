import CheckoutMain from "./components/checkout-main/checkoutMain";
import Header from "./components/header/header";
import HeaderTimer from "./components/header/timer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderTimer />
      <main className={styles.main}>
        <CheckoutMain />
      </main>
    </div>
  );
}
