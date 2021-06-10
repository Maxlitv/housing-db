import React from "react";
import css from "./Personer.module.css";
import ButtonSet from "../Shared/Buttonset/ButtonSet";

function Personer({ data }) {
  return (
    <div>
      <p className={css.label}>Samlet indkomst efter skat pr. md.</p>
      <div className={css.input_block}>
        <div className={css.container_row}>
          <p>{data.personerData.total}</p>
        </div>
      </div>

      {/* WE OPEN DROPDOWN HERE */}
      <div className={css.drop_open}>
        <div className={`${css.container_row} ${css.row_padding}`}>
          <div className={css.name}>Voksne</div>
          <div className={css.button_set}>
            <button className={css.counter}>-</button>
            <div className={css.renderAmount}>{data.personerData.total}</div>
            <button className={css.counter}>+</button>
          </div>
        </div>
        <ButtonSet />
        <ButtonSet />
        <ButtonSet />
        <ButtonSet />
      </div>
    </div>
  );
}

export default Personer;
