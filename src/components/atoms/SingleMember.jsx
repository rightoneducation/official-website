import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Front from './ProfileFront'
import Back from './ProfileBack'


const useStyles = makeStyles({
  profileFront: {
  padding: "1em",
  width: "270px",
  border: "10px solid white",
  margin: "20px 10px",
  paddingBottom: "0em",
  color: "white",
  background: "linear-gradient(45deg, rgb(129, 8, 156) 10.5%, #662AAF 75.9%), rgb(112, 35, 129)",
  mixBlendMode: "multiply",
  },
  profileBack: {
  display: "flex",
  alignItems: "center",
  padding: "1em",
  height: "305px",
  border: "10px solid white",
  margin: "-70px 10px",
  color: "white",
  background: "linear-gradient(180deg, rgb(129, 8, 156) 1.99%, #662AAF 50.9%), rgb(112, 35, 129)",
  mixBlendMode: "multiply"
  }
})

function SingleMember (props) {
  const { favoriteShow, favoriteMistake } = props.profile
  // const { handleFlip } = props
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
          <Grid className={styles.profileFront}>
            <Front {...props}/>
          </Grid>
          </FrontSide>
          <BackSide style={removeFlippyCardStyle}>
            <Grid className={styles.profileBack}>
              <Back
                favMistake={favoriteMistake}
                favShow={favoriteShow}
              />
            </Grid> 
          </BackSide>
        </Flippy>
      </Grid>
    </div>
  );
}

export default SingleMember;