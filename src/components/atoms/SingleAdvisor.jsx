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
  const { position } = props
  const { name, photo, profile, title, linkedIn, imBackground, txtBackground } = props.advisor
  const styles = useStyles();
  var linkedInVisible = ('block');

  return (
    <Grid item>
      <Card className="advisor-card" style={{
        borderRadius: "30px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", background: txtBackground,
        margin: "20px"
      }}>
        <CardContent
          style={{ background: imBackground, display: "flex", alignItems: "center", justifyContent: "center", padding: "0px" }}>
          <img

            style={{
              width: "65%",
              clipPath: "circle()",
              marginTop: "10%"
            }}
            src={photo}
            className={styles.advisorPhoto}
            alt=''
          />
        </CardContent>
        <CardContent style={{ paddingLeft: "7%", paddingRight: "6%", paddingTop: "5%" }}>
          <div className="advisor-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {name}
              <a href={linkedIn} target="_blank">
                <img
                  style={{ float: "right", display: linkedInVisible }}
                  width="18px"
                  src={icon}
                /></a>
            </div>
            <div className="advisor-title">
              {title}
            </div>
          </div>
          <div className="advisor-description" style={{ marginTop: "2%" }}>
            {profile}
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Advisor;