import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="https://www.tickete.co">
        <Image src="logo.svg" alt="tickete logo" width={126} height={32} />
      </Link>
      <div className={styles.checkout}>
        <Image src="lock.svg" alt="lock" width={20} height={20} />
        <span>Checkout</span>
      </div>
      <button className={styles.helpButton}>
        <Image src="question.svg" alt="question mark" width={20} height={20} />
        <span>Help</span>
      </button>
    </header>
  );
};

export default Header;
