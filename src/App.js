import { useState } from "react";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

import styles from "./App.module.css";
import logo from "./images/logo.svg";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [customTip, setCustomTip] = useState("");

  function handleBillChange(event) {
    if (
      event.target.value === "" ||
      (event.target.value >= 0 && event.target.value <= 3000)
    ) {
      setBillAmount(event.target.value);
    }
  }

  function handlePeopleChange(event) {
    if (
      event.target.value === "" ||
      (event.target.value >= 0 && event.target.value <= 3000)
    ) {
      setPeopleAmount(event.target.value);
    }
  }

  function handleTipButtonClick(event) {
    if (billAmount > 0 && peopleAmount > 0) {
      Array.from(event.target.parentElement.children).forEach((button) =>
        button.classList.remove(styles["selected"])
      );
      event.target.classList.add(styles["selected"]);

      const tipAmount =
        ((billAmount / peopleAmount) * parseInt(event.target.textContent)) /
        100;
      const total = billAmount / peopleAmount + tipAmount;
      setTipAmount(tipAmount.toFixed(2));
      setTotal(total.toFixed(2));
    }
  }

  function handleCustomTipChange(event) {
    if (billAmount > 0 && peopleAmount > 0) {
      if (
        event.target.value === "" ||
        (event.target.value > 0 && event.target.value <= 100)
      ) {
        Array.from(event.target.parentElement.children).forEach((button) =>
          button.classList.remove(styles["selected"])
        );
        setCustomTip(event.target.value);
        const tipAmount =
          ((billAmount / peopleAmount) * parseInt(event.target.value)) / 100;
        const total = billAmount / peopleAmount + tipAmount;
        setTipAmount(tipAmount.toFixed(2));
        setTotal(total.toFixed(2));
      }
    }
  }

  function handleResetClick(event) {
    setBillAmount("");
    setPeopleAmount("");
    setCustomTip("");
    setTipAmount("0.00");
    setTotal("0.00");
    Array.from(
      event.target.parentElement.previousElementSibling.children[3].children
    ).forEach((button) => button.classList.remove(styles["selected"]));
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className="logo" />
      <div className={styles.calculatorBox}>
        <InputBox
          billAmount={billAmount}
          peopleAmount={peopleAmount}
          handleBillChange={handleBillChange}
          handleTipButtonClick={handleTipButtonClick}
          customTip={customTip}
          handleCustomTipChange={handleCustomTipChange}
          handlePeopleChange={handlePeopleChange}
        />
        <OutputBox
          tipAmount={tipAmount}
          total={total}
          handleResetClick={handleResetClick}
        />
      </div>
    </div>
  );
}

export default App;
