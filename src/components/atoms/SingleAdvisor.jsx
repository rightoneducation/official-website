import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // profilePhoto: {
  //   margin: "0 15px 0 0",
  //   width: "80px",
  //   height: "80px",
  //   borderRadius: "50%",
  //   border: "3px solid rgb(202, 45, 104)",
  // },
  // jobTitle: {
  //   borderLeft: "1px solid white",
  //   margin: "5px",
  //   marginLeft: "3px",
  //   color: "white",
  //   padding: "1.5px 10px",
  // },
});
function Advisor (props) {
  const {name, photo, profile,title, linkedIn} = props.advisor
  const styles = useStyles();
  return (
    <Grid container>
      <Grid container alignItems="space-around">
        <Grid item>
        <a href={linkedIn} target='_blank' rel="noopener noreferrer"><img src={photo} className={styles.profilePhoto} alt='' /></a>
        </Grid>
        <Grid item>
        {/* <h3 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h3>
          <h5 className={styles.jobTitle}>{title}</h5> */}
        </Grid>
      </Grid>
      <Grid>
        {/* <p style={{fontSize: '.9rem'}}>{profile}</p> */}
      </Grid>
    </Grid>
  )
}

export default Advisor;