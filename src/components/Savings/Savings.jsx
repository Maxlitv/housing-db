import React from "react";
import css from "./Savings.module.css";

function Savings({ savings, dispatch, showErrorTip }) {
  const inputHandler = (e) => {
    let input = Number(e.target.value);
    if (input >= 100000000) {
      dispatch({ type: "showErrorTip", marker: "savings" });
    } else {
      dispatch({ type: "hideErrorTip", marker: "savings" });
    }

    dispatch({ type: "savings", payload: input });
  };
  return (
    <div className={css.container}>
      <p className={css.label}>Din opsparing til ny bolig</p>
      <input
        onChange={inputHandler}
        placeholder="0 kr."
        className={css.input_savings}
        controls="no"
        type="number"
        value={savings}
      />
      {showErrorTip && (
        <p className={css.error_msg}>
          Beløbet skal være mindre end 100.000.000
        </p>
      )}
    </div>
  );
}

export default Savings;
