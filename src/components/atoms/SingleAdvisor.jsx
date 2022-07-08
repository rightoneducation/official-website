import React from 'react'
import { Grid, Card, CardContent, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icon from "../../images/linkedin.png"

const useStyles = makeStyles({
  /*advisorPhoto: {
    width: "350px",
    height: "625px",
    marginTop: "28px"
  },*/

});
function Advisor(props) {
  const { name, photo, profile, title, linkedIn, imBackground, txtBackground } = props.advisor
  const styles = useStyles();
  return (
    <Grid item>
      {/* <Grid container alignItems="center"> */}

      <Card style={{
        width: "335px", height: "635px", alignItems: "center",
        borderRadius: "30px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
        background: txtBackground, margin: "-20px", marginTop: "30px"
      }}>
        <CardContent style={{ background: imBackground, justifyContent: "center", padding: "0px" }}>

          <img
            width="250px"
            style={{
              clipPath: "circle()", marginTop: "24px", marginLeft: "42px",
              marginRight: "42px", marginBottom: "0px"
            }}
            src={photo}
            className={styles.advisorPhoto}
            alt=''
          />

        </CardContent>
        <CardContent style={{ paddingLeft: "26px", paddingRight: "26px", paddingTop: "18px" }}>
          <div className="advisor-header">
            {name}
            <a href={linkedIn}>
              <img
                style={{ float: "right" }}
                width="30px"
                src={icon}
              /></a>
            <div style={{ fontSize: "14px", fontWeight: "400", lineHeight: "30px" }}>
              {title}
            </div>
          </div>
          <div className="advisor-description" style={{ marginTop: "10px" }}>
            {profile}
          </div>
        </CardContent>

      </Card>
      {/* <Grid item>
        <h3 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h3>
          <h5 className={styles.jobTitle}>{title}</h5>
        </Grid>
      </Grid>
      <Grid>
        <p style={{fontSize: '.9rem'}}>{profile}</p>
      </Grid> */}
    </Grid >
  )
}

export default Advisor;