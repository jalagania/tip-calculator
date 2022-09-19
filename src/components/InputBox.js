import styles from "./InputBox.module.css";

function InputBox(props) {
  const tipsArray = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <div className={styles.dataBox}>
      <div className={styles.inputLabelWrapper}>
        <p>Bill</p>
        {props.billAmount !== "" && +props.billAmount === 0 && (
          <p className={styles.warning}>Can't be zero</p>
        )}
      </div>
      <input
        type="number"
        placeholder="0"
        className={`${styles.inputBill} ${
          props.billAmount !== "" &&
          +props.billAmount === 0 &&
          styles.redOutline
        }`}
        value={props.billAmount}
        onChange={props.handleBillChange}
      />
      <p>Select Tip %</p>
      <div className={styles.tipBoxes}>
        {tipsArray.map((tip, index) => (
          <button
            className={styles.btnTip}
            onClick={props.handleTipButtonClick}
            key={index}
          >
            {tip}
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className={styles.custom}
          value={props.customTip}
          onChange={props.handleCustomTipChange}
        />
      </div>
      <div className={styles.inputLabelWrapper}>
        <p>Number of People</p>
        {props.peopleAmount !== "" && +props.peopleAmount === 0 && (
          <p className={styles.warning}>Can't be zero</p>
        )}
      </div>
      <input
        type="number"
        placeholder="0"
        className={`${styles.inputPeople} ${
          props.peopleAmount !== "" &&
          +props.peopleAmount === 0 &&
          styles.redOutline
        }`}
        value={props.peopleAmount}
        onChange={props.handlePeopleChange}
      />
    </div>
  );
}

export default InputBox;
