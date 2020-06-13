import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";
import FlipCard from "react-flipcard-2";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Front from './ProfileFront'
import Back from './ProfileBack'


const useStyles = makeStyles({
  profileCard: {
  padding: "1em",
  width: "280px",
  height: "330px",
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
  const removeFlippyCardStyle = {
    padding: "0",
    boxShadow: "none"
  }  
  const styles = useStyles()
  return (
    <div>
        <Grid>
          <Flippy
          flipOnHover={true}
          flipOnClick={true}
          flipDirection="horizontal"
        >
          <FrontSide style={removeFlippyCardStyle}>
          <Grid className={styles.profileCard}>
            <Front {...props} handleFlip={() => handleFlip()} />
          </Grid>
          </FrontSide>
          <BackSide style={removeFlippyCardStyle}>
          <Grid className={styles.profileCard}>
            <Back
              favMistake={favoriteMistake}
              favShow={favoriteShow}
              handleFlip={() => handleFlip()}
            />
          </Grid>
        </BackSide>
        </Flippy>
      </Grid>
    </div>
  );
}

export default SingleMember;