import React from "react";
import css from "./Biler.module.css";

function Biler() {
  return (
    <div>
      <div className={css.input_block}>
        <div className={css.container_row}>
          <p>0</p>
        </div>
      </div>

      {/* DROPDOWN HERE */}
      <div className={css.drop_open}>
        <div className={`${css.container_row} ${css.row_padding}`}>
          <div className={css.name}>Biler</div>
          <div className={css.button_set}>
            <button className={css.counter}>-</button>
            <div className={css.renderAmount}>null</div>
            <button className={css.counter}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biler;
