import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Tickete Checkout</h1>
      </header>
      <main className={styles.main}>
        Confirm and Pay
      </main>
    </div>
  );
}
