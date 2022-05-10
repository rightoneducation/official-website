import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  advisorPhoto: {
    width: "350px",
    height: "625px",
    
    
  },
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
      {/* <Grid container alignItems="center"> */}
        <Grid item justify="center" xs={12}>
        <div className="advisor-profile">
        <a href={linkedIn} target='_blank' rel="noopener noreferrer">
          <img 
            src={photo} 
            className={styles.advisorPhoto} 
            alt='' 
            />
        </a>
        </div>
        </Grid>
        {/* <Grid item>
        <h3 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h3>
          <h5 className={styles.jobTitle}>{title}</h5>
        </Grid>
      </Grid>
      <Grid>
        <p style={{fontSize: '.9rem'}}>{profile}</p>
      </Grid> */}
    </Grid>
  )
}

export default Advisor;