import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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

function SingleMember(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { favoriteShow, favoriteMistake } = props.profile;
  const styles = useStyles()
  return (
    <div>
      <Grid>
        <ReactCardFlip isFlipped={isFlipped}>
          <Grid className={styles.profileCard}>
            <Front {...props} handleFlip={() => setIsFlipped(true)} />
          </Grid>
          <Grid className={styles.profileCard}>
            <Back
              favMistake={favoriteMistake}
              favShow={favoriteShow}
              handleFlip={() => setIsFlipped(false)}
            />
          </Grid>
        </ReactCardFlip>
      </Grid>
    </div>
  );
}

export default SingleMember;