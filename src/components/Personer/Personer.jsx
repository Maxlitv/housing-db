import React, { useState } from "react";
import css from "./Personer.module.css";
import ButtonSet from "../Shared/Buttonset/ButtonSet";
import store from "../../data";
import arrow from "../../assets/arrow-down.svg";

function Personer({ data, dispatch }) {
  const decrement = () => {
    if (data.personerData.numberOfAdults <= 0) {
      return;
    }
    dispatch({ type: "adultMinus"});
  };
  const increment = () => {
    if (data.personerData.numberOfAdults >= 2) {
      return;
    }
    dispatch({ type: "adultPlus"});
  };
  const [isOpened, toggleBox] = useState(false);
  let handleDrop = () => {
    toggleBox(!isOpened);
  };
  return (
    <div>
      <p className={css.label}>Personer</p>
      <div onClick={handleDrop} className={css.input_block}>
        <div className={css.container_row}>
          <p>{data.numberOfChildren.total + data.personerData.numberOfAdults}</p>
          <img
            className={`${css.arrow} ${isOpened ? "" : css.arrow_up}`}
            src={arrow}
            alt=""
          />
        </div>
      </div>
      {/* <div className={`${css.container_row} ${css.row_padding} ${isOpened?'':css.drop_open_hide}`}></div> */}
      {/* WE OPEN DROPDOWN HERE */}
      <div className={`${css.drop_open} ${isOpened ? "" : css.drop_open_hide}`}>
        <div className={`${css.container_row} ${css.row_padding}`}>
          <div className={css.name}>Voksne</div>
          <div className={css.button_set}>
            <button onClick={decrement} className={css.counter}>-</button>
            <div className={css.renderAmount}>
              {data.personerData.numberOfAdults}
            </div>
            <button onClick={increment} className={css.counter}>+</button>
          </div>
        </div>
        <ButtonSet
          total={data.numberOfChildren.total}
          marker="age0_2"
          dispatch={dispatch}
          numberOfChildren={data.numberOfChildren.age0_2}
          ageSpecs={data.ageSpecs.age0_2}
        />
        <ButtonSet
          total={data.numberOfChildren.total}
          marker="age3_5"
          dispatch={dispatch}
          numberOfChildren={data.numberOfChildren.age3_5}
          ageSpecs={data.ageSpecs.age3_5}
        />
        <ButtonSet
          total={data.numberOfChildren.total}
          marker="age6_9"
          dispatch={dispatch}
          numberOfChildren={data.numberOfChildren.age6_9}
          ageSpecs={data.ageSpecs.age6_9}
        />
        <ButtonSet
          total={data.numberOfChildren.total}
          marker="age10_17"
          dispatch={dispatch}
          numberOfChildren={data.numberOfChildren.age10_17}
          ageSpecs={data.ageSpecs.age10_17}
        />
        <ButtonSet
          total={data.numberOfChildren.total}
          marker="age18up"
          dispatch={dispatch}
          numberOfChildren={data.numberOfChildren.age18up}
          ageSpecs={data.ageSpecs.age18up}
        />
      </div>
    </div>
  );
}

export default Personer;
