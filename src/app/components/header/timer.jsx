import styles from "./timer.module.css";

const HeaderTimer = () => {
  return (
    <section className={styles.timer}>
      <p className={styles.timerMessage}>Holding your tickets for 30:00</p>
    </section>
  );
};

export default HeaderTimer;
