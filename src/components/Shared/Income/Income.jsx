import React from "react";
import css from "./Income.module.css";

function Income({ downPayment, dispatch, showErrorTip }) {
  const inputHandler = (e) => {
    let input = Number(e.target.value);
    if (input >= 1000000) {
      dispatch({ type: "showErrorTipDown", marker: "downPayment" });
    } else {
      dispatch({ type: "hideErrorTipDown", marker: "downPayment" });
    }
    dispatch({ type: "downPayment", payload: input });
  };
  return (
    <div className={css.container}>
      <p className={css.label}>Samlet indkomst efter skat pr. md.</p>
      <input
        value={downPayment}
        onChange={inputHandler}
        placeholder="0 kr./md."
        className={css.input_savings}
        controls="no"
        type="number"
      />

      {showErrorTip && (
        <p className={css.error_msg}>
          Skal være et positivt tal mindre end 1.000.000
        </p>
      )}
    </div>
  );
}

export default Income;
