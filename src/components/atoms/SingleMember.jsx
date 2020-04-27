import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Front from './ProfileFront'
import Back from './ProfileBack'
import LinkedIn from '../../images/linkedin-icon.svg'

const useStyles = makeStyles({
  profileCard: {
  padding: "1em",
  width: "280px",
  border: "10px solid white",
  margin: "auto 10px",
  paddingRight: "0em",
  paddingBottom: "0em",
  color: "white",
  background: "linear-gradient(250deg, rgb(129, 8, 156) 1.99%, #662AAF 50.9%), rgb(112, 35, 129)",
  mixBlendMode: "multiply",
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

})

function SingleMember (props) {
  const {name, linkedIn, photo, title, favoriteShow, favoriteMistake, isFlipped} = props.profile
  const { handleFlip } = props  
  const styles = useStyles()
  return (
    <div>
    <Grid className={styles.profileCard}>
      <Grid container alignItems="center">
        <Typography variant="h6" style={{ fontStyle: "italic", marginBottom: "unset" }}>
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
      <Grid container alignItems="center"  className={styles.jobTitle}>
        <Typography variant="subtitle2" style={{ fontWeight: "300", lineHeight: "1.2" }}>
        {title}
        </Typography>
      </Grid>
      <ReactCardFlip isFlipped={isFlipped}>
        <Front photo={photo} handleFlip={() => handleFlip()} />
        <Back
          favMistake={favoriteMistake}
          favShow={favoriteShow}
          handleFlip={() => handleFlip()}
        />
      </ReactCardFlip>
    </Grid>
    </div>
  );
}

export default SingleMember;