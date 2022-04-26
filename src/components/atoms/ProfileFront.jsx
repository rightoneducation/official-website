import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import LinkedIn from "../../images/linkedin-icon.svg";

const useStyles = makeStyles({
  teamCards: {
    justifyContent: "space-around"
  },
  profilePhoto: {
    marginBottom: "10px",
    paddingLeft: "10px"
    // border: "5px solid white",
    // borderRadius: "50%",
    // boxShadow: "0px 20px 30px -15px rgba(0,0,0,0.7)",
  },
  // jobTitle: {
  //   height: "60px",
  //   marginTop: "10px",
  //   textAlign: "center",
  //   color: "white",
  //   backgroundBlendMode: "multiply",
  //   background: "rgba(39, 2, 48, 0.377)",
  //   padding: "8px 15px 20px 15px",
  // },
});

function Front (props) {
    const { photo, name, linkedIn, title } = props.profile;
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
          {/* <div>
            <Typography
              variant="h6"
              style={{
                fontSize: "18px",
                fontStyle: "italic",
                textAlign: "center",
                marginBottom: "unset",
              }}
            >
              {name}
            </Typography>
          </div> */}
          {/* <a target="_blank" href={linkedIn} rel="noopener noreferrer">
            <img
              src={LinkedIn}
              width="20px"
              height="20px"
              style={{ margin: "0 0 -2px 6px" }}
              alt="member-profile-photos"
            />
          </a> */}
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
          {/* <Typography
            variant="body2"
            style={{ fontWeight: "300", lineHeight: "1.2" }}
          >
            <p dangerouslySetInnerHTML={{__html : title}} />
          </Typography> */}
        </Grid>
      </div>
    );
}

export default Front;