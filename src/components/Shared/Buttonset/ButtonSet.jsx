import React from "react";
import css from "../Buttonset/ButtonSet.module.css";

function ButtonSet() {
  return <div className={css.container_row}>
      <div className={css.born_flex}>
        <div className={css.name}>Børn</div>
        <div className={css.born_description}>0-2 år</div>
      </div>
      <div className={css.button_set}>
        <button className={css.counter}>-</button>
        <div className={css.renderAmount}><p>null</p></div>
        <button className={css.counter}>+</button>
      </div>
    </div>
}

export default ButtonSet;
