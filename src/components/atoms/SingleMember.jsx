import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import Front from './ProfileFront'
import Back from './ProfileBack'
import cn from "classnames";


function SingleMember(props) {
  const { variant, id} = props.profile;
  const [showBack, setShowBack] = useState(false);
  function handleClick() {
    if (variant === "click") {
      setShowBack(!showBack);
    }
  }
  return (
    <div>
      <div tabIndex={id} onClick={handleClick} className={cn("flip-card-outer")} >
        <div className={cn("flip-card-inner", {
          showBack
        })}>
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <Front {...props} />
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <Back {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMember;