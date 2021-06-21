import React from "react";
import css from "./Savings.module.css";

function Savings({ savings, dispatch, showErrorTip }) {
  const inputHandler = (e) => {
<<<<<<< HEAD
    let input1 = Number(e.target.value);
    new Intl.NumberFormat().format(input1)
    if (input1 >= 100000000) {
=======
    let input = Number(e.target.value);
    if (input >= 100000000) {
>>>>>>> 434df2a3b6069c936ce5bdbb57b61d58c7655750
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
