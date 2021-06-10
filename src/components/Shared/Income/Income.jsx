import React from "react";
import css from "./Income.module.css";

function Income() {
  return (
    <div className={css.container}>
      <p className={css.label}>Samlet indkomst efter skat pr. md.</p>
      <input
        placeholder="0 kr"
        className={css.input_savings}
        controls="no"
        type="number"
      />
    </div>
  );
}

export default Income;
