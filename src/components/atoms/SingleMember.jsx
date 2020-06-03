import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Front from './ProfileFront'
import Back from './ProfileBack'


const useStyles = makeStyles({
  profileCard: {
  padding: "1em",
  width: "280px",
  border: "10px solid white",
  margin: "auto 10px",
  paddingRight: "0em",
  paddingBottom: "0em",
  color: "white",
  background: "linear-gradient(180deg, rgb(129, 8, 156) 1.99%, #662AAF 50.9%), rgb(112, 35, 129)",
  mixBlendMode: "multiply",
  }
})

function SingleMember (props) {
  const { favoriteShow, favoriteMistake, isFlipped} = props.profile
  const { handleFlip } = props  
  const styles = useStyles()
  return (
    <div>
    <Grid>
      <ReactCardFlip isFlipped={isFlipped}>
        <Grid className={styles.profileCard}>
          <Front {...props} handleFlip={() => handleFlip()} />
        </Grid>
        <Grid className={styles.profileCard}>
          <Back
            favMistake={favoriteMistake}
            favShow={favoriteShow}
            handleFlip={() => handleFlip()}
          />
        </Grid>
      </ReactCardFlip>
    </Grid>
    </div>
  );
}

export default SingleMember;