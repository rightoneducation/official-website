import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import Front from './ProfileFront'
import Back from './ProfileBack'
import cn from "classnames";


const useStyles = makeStyles({
  profileFront: {
    width: "360px",
    margin: "20px 10px",
    paddingBottom: "0em"
  },
  // profileBack: {
  //   width: "360px",
  //   margin: "20px 10px",
  //   paddingBottom: "0em"
  // },
});

function SingleMember (props) {
  const [showBack, setShowBack] = useState(false);
  function handleClick() {
    if (props.variant === "click") {
      setShowBack(!showBack);
    }
  }
  const styles = useStyles()
  return (
    <div tabIndex={props.id} onClick={handleClick} className={cn("flip-card-outer")} >
      <div className={cn("flip-card-inner", {
          showBack
        })}>
      <Grid>
          <Grid className={styles.profileFront}>
          <div className="card front">
            <Front {...props}/>
          </div>
          <div className="card back">
            <Back {...props}/>
          </div>
          </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default SingleMember;