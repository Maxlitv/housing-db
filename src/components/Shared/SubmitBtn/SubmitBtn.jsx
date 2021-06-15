import React from "react";
import css from "./SubmitBtn.module.css";

function SubmitBtn({isHidden}) {
  return (
    <div>
      <button disabled={isHidden} className={css.button}>Se boliger</button>
    </div>
  );
}

export default SubmitBtn;
