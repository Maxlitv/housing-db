import React from "react";
import css from "./Savings.module.css";

function Savings() {
  return (
    <div className={css.container}>
      <p className={css.label}>Din opsparing til ny bolig</p>
      <input
        placeholder="0 kr"
        className={css.input_savings}
        controls="no"
        type="number"
      />
    </div>
  );
}

export default Savings;
