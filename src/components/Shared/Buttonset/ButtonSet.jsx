import React from "react";
import css from "../Buttonset/ButtonSet.module.css";

function ButtonSet({ ageSpecs, numberOfChildren, dispatch, marker, total }) {
  const decrement = () => {
    if (numberOfChildren <= 0){
      return
    }
    dispatch({type:'numberDown', marker})
  };
  const increment = () => {
    if (total >= 8){
      return
    }
    dispatch({type:'numberChange', marker})

  };
  return (
    <div className={css.container_row}>
      <div className={css.born_flex}>
        <div className={css.name}>Børn</div>
        <div className={css.born_description}>{ageSpecs}</div>
      </div>
      <div className={css.button_set}>
        <button onClick={decrement} className={css.counter}>
          -
        </button>
        <div className={css.renderAmount}>
          <p>{numberOfChildren}</p>
        </div>
        <button onClick={increment} className={css.counter}>+</button>
      </div>
    </div>
  );
}

export default ButtonSet;
