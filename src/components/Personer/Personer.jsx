import React, { useState } from "react";
import css from "./Personer.module.css";
import ButtonSet from "../Shared/Buttonset/ButtonSet";
import store from "../../data";

function Personer({ data }) {
  const [isOpened, toggleBox ] = useState(false);
let handleDrop = () =>{
    toggleBox(!isOpened)
  }
  return (
    <div>
      <p className={css.label}>Personer</p>
      <div onClick={handleDrop} className={css.input_block}>
        <div className={css.container_row}>
          <p>{data.personerData.total}</p>
        </div>
      </div>
{/* <div className={`${css.container_row} ${css.row_padding} ${isOpened?'':css.drop_open_hide}`}></div> */}
      {/* WE OPEN DROPDOWN HERE */}
<div className={`${css.drop_open} ${isOpened?'':css.drop_open_hide}`}>
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