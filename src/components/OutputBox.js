import styles from "./OutputBox.module.css";

function OutputBox(props) {
  return (
    <div className={styles.displayBox}>
      <div className={styles.tipBox}>
        <div className={styles.tipAmountBox}>
          <p className={styles.tipAmountText}>Tip Amount</p>
          <p className={styles.tipAmountSubtext}>/ person</p>
        </div>
        <p className={styles.tipAmount}>{"$" + props.tipAmount}</p>
      </div>
      <div className={styles.totalBox}>
        <div className={styles.totalAmountBox}>
          <p className={styles.totalAmountText}>Total</p>
          <p className={styles.tipAmountSubtext}>/ person</p>
        </div>
        <p className={styles.tipAmount}>{"$" + props.total}</p>
      </div>
      <button
        className={`${styles.btnReset} ${
          props.tipAmount > 0 && props.total > 0 && styles.active
        }`}
        onClick={props.handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}

export default OutputBox;
