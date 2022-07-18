import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  teamCards: {
    justifyContent: "space-around"
  }
});

function Front(props) {
  const { photo, back, linkedIn, title, hover } = props.profile;
  const styles = useStyles();
  const [profileImg, setProfileImg] = useState(photo);
  const handleMouseOver = () => {
    setProfileImg(hover)
  };

  const handleMouseOut = () => {
    setProfileImg(photo)
  };

  console.log(profileImg)

  return (
    <div>
      <div container className={styles.teamCards}>
        <div className={styles.profilePhoto}>
          <img
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            src={profileImg}
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