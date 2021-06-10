import React, { useState } from "react";
import css from "./Biler.module.css";

function Biler() {
  const [isOpened, toggleBox] = useState(false);
  let handleDrop = () => {
    toggleBox(!isOpened);
  };
  return (
    <div>
      <p className={css.label}>Biler</p>
      <div onClick={handleDrop} className={css.input_block}>
        <div  className={css.container_row}>
          <p>0</p>
        </div>
      </div>

      {/* DROPDOWN HERE */}
      <div className={`${css.drop_open} ${isOpened ? "" : css.drop_open_hide}`}>
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
