import React from "react";
import css from "./SubmitBtn.module.css";

function SubmitBtn({isHidden}) {
  const clickHandler = () =>{
    alert('Further step is in development.')
  }
  return (
    <div>
      <button disabled={isHidden} onClick={clickHandler} className={css.button}>Se boliger</button>
    </div>
  );
}

export default SubmitBtn;
