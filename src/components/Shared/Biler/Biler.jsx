import React, { useState } from "react";
import css from "./Biler.module.css";
import arrow from "../../../assets/arrow-down.svg";

function Biler({numberOfCars, dispatch}) {
  const discrement = () => {
    if (numberOfCars <= 0) {
      return;
    }
    dispatch({ type: "carMinus"});
  };
  const increment = () => {
    if (numberOfCars >= 8) {
      return;
    }
    dispatch({ type: "carPlus"});
  };
  const [isOpened, toggleBox] = useState(false);
  let handleDrop = () => {
    toggleBox(!isOpened);
  };
  return (
    <div>
      <p className={css.label}>Biler</p>
      <div onClick={handleDrop} className={css.input_block}>
        <div className={css.container_row}>
          <p>{numberOfCars}</p>
          <img
            className={`${css.arrow} ${isOpened ? "" : css.arrow_up}`}
            src={arrow}
            alt=""
          />
        </div>
      </div>

      {/* DROPDOWN HERE */}
      <div className={`${css.drop_open} ${isOpened ? "" : css.drop_open_hide}`}>
        <div className={`${css.container_row} ${css.row_padding}`}>
          <div className={css.name}>Biler</div>
          <div className={css.button_set}>
            <button onClick={discrement} className={css.counter}>-</button>
            <div className={css.renderAmount}>{numberOfCars}</div>
            <button onClick={increment} className={css.counter}>+</button>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Biler;
