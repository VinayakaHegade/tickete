import styles from "./CheckoutMain.module.css";
import BookingSummary from "./booking-summary/bookinSummary";
import ConfirmAndPay from "./confirm-and-pay/confirmAndPay";

const CheckoutMain = () => {
  return (
    <article className={styles.checkoutMain}>
      <ConfirmAndPay />
      <BookingSummary/>
    </article>
  );
};

export default CheckoutMain;
