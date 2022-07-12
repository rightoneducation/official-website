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

  const CARD_CLASSES = {
    "edge": "advisor-card-edge",
    "side": "advisor-card-side",
    "center": "advisor-card-center"
  }

  const IMAGE_WIDTHS = {
    "edge": "150px",
    "side": "200px",
    "center": "250px"
  }

  const CARD_Z = {
    "edge": "-1",
    "side": "1",
    "center": "2"
  }

  const HEADER = {
    "edge": "advisor-header-edge",
    "side": "advisor-header-side",
    "center": "advisor-header-center"
  }

  const TITLE = {
    "edge": "advisor-title-edge",
    "side": "advisor-title-side",
    "center": "advisor-title-center"
  }

  const LINKEDINICON = {
    "edge": "20px",
    "side": "25px",
    "center": "30px"
  }

  const DESCRIPTION = {
    "edge": "advisor-description-edge",
    "side": "advisor-description-side",
    "center": "advisor-description-center",
  }

  return (
    <Grid item style={{ zIndex: CARD_Z[position] }}>
      <Card className={CARD_CLASSES[position]} style={{
        borderRadius: "30px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", background: txtBackground,
        margin: "-20px"
      }}>
        <CardContent
          style={{ background: imBackground, display: "flex", alignItems: "center", justifyContent: "center", padding: "0px" }}>
          <img
            width={IMAGE_WIDTHS[position]}
            style={{
              clipPath: "circle()",
              marginTop: "10%"
            }}
            src={photo}
            className={styles.advisorPhoto}
            alt=''
          />
        </CardContent>
        <CardContent style={{ paddingLeft: "7%", paddingRight: "7%", paddingTop: "5%" }}>
          <div className={HEADER[position]}>
            {name}
            <a href={linkedIn}>
              <img
                style={{ float: "right" }}
                width={LINKEDINICON[position]}
                src={icon}
              /></a>
            <div className={TITLE[position]}>
              {title}
            </div>
          </div>
          <div className={DESCRIPTION[position]} style={{ marginTop: "2%" }}>
            {profile}
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Advisor;