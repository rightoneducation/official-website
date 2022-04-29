import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  teamCards: {
    justifyContent: "space-around"
  },
  profilePhoto: {
    marginBottom: "10px",
    paddingLeft: "10px"
  },
});

function Front (props) {
    const { photo, back, linkedIn, title } = props.profile;
    const styles = useStyles();
    return (
      <div>
        <Grid container className={styles.teamCards}>
          <Grid>
            <img
              src={photo}
              width="100%"
              className={styles.profilePhoto}
              alt="right-on-education-team-member"
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={styles.jobTitle}
        >
          <a href={linkedIn} target='_blank' rel="noopener noreferrer">
          <img
            src={title}
            width="100%"
            alt="member-title"
          />
          </a>
        </Grid>
      </div>
    );
}

export default Front;