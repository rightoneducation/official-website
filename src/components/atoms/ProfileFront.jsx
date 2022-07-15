import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  teamCards: {
    justifyContent: "space-around"
  },
  profilePhoto: {
    // width: "290px",
    // height: "300px",
    // margin: "20px 10px",
    //marginBottom: "10px",

  },
});

function Front(props) {
  const { photo, back, linkedIn, title, hover } = props.profile;
  const styles = useStyles();
  return (
    <div>
      <div container className={styles.teamCards}>
        <div>
          <img
            src={photo}
            width="100%"
            alt="right-on-education-team-member"
          />
        </div>
        <div
          container
          alignItems="center"
          justify="center"
        >
          <a href={linkedIn} target='_blank' rel="noopener noreferrer">
            <img
              src={title}
              width="100%"
              alt="member-title"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Front;