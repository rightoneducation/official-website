import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  teamCards: {
    justifyContent: "space-around"
  },
  profileBack: {
    marginBottom: "10px",
    paddingLeft: "10px"
  },
});

function Back (props) {
    const { photo, back, linkedIn, title } = props.profile;
    const styles = useStyles();
    return (
      <div>
        <div container className={styles.teamCards}>
          <div>
            <img
              src={back}
              width="100%"
              className={styles.profileBack}
              alt="right-on-education-team-member-info"
            />
          </div>
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
    );
}

export default Back;