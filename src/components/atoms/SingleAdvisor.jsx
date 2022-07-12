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


  const IMAGE_WIDTHS = {
    "edge": "100px",
    "side": "200px",
    "center": "250px"
  }


  return (
    <Grid item style={{
      width: "100%", height: "100%", background: txtBackground,
      borderRadius: "30px"
    }}>
      <Grid container style={{
        width: "100%", height: "40%", background: imBackground, borderRadius: "30px"
      }}>
        <img
          width={IMAGE_WIDTHS[position]}
          style={{
            clipPath: "circle()", marginTop: "24px", marginLeft: "42px",
            marginRight: "42px", marginBottom: "0px"
          }}
          src={photo}
          className={styles.advisorPhoto}
          alt=''
        />
      </Grid>
    </Grid>
  )
}

export default Advisor;