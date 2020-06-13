import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import LinkedIn from "../../images/linkedin-icon.svg";

const useStyles = makeStyles({
  profilePhoto: {
    cursor: "pointer",
    width: "180px",
    marginLeft: "-15px",
    marginBottom: "10px",
    borderTop: "10px solid white",
    borderLeft: "10px solid white",
  },
  jobTitle: {
    marginTop: "10px",
    marginBottom: "10px",
    height: "50px",
    color: "white",
    backgroundBlendMode: "multiply",
    background: "rgba(39, 2, 48, 0.377)",
    padding: "10px 20px",
  }
});

function Front (props) {
    // const {handleFlip} = props
    const { photo, name, linkedIn, title } = props.profile;
    const styles = useStyles();
    return (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <img
            src={photo}
            width="100%"
            className={styles.profilePhoto}
            alt="right-on-education-team-member"
          />
        </div>
        <Grid container alignItems="center">
          <Typography
            variant="h6"
            style={{
              fontSize: "18px",
              fontStyle: "italic",
              marginBottom: "unset",
            }}
          >
            {name}
          </Typography>
          <a target="_blank" href={linkedIn} rel="noopener noreferrer">
            <img
              src={LinkedIn}
              width="20px"
              height="20px"
              style={{ margin: "0 0 -2px 6px" }}
              alt="member-profile-photos"
            />
          </a>
        </Grid>
        <Grid container alignItems="center" className={styles.jobTitle}>
          <Typography
            variant="body2"
            style={{ fontWeight: "300", lineHeight: "1.2" }}
          >
            {title}
          </Typography>
        </Grid>
      </div>
    );
}

export default Front;