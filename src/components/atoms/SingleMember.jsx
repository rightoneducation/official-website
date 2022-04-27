import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Front from './ProfileFront'
import Back from './ProfileBack'


const useStyles = makeStyles({
  profileFront: {
    width: "360px",
    margin: "20px 10px",
    paddingBottom: "0em"
  },
  profileBack: {
    width: "360px",
    margin: "20px 10px",
    paddingBottom: "0em"
  },
});

function SingleMember (props) {
  const styles = useStyles()
  return (
    <div>
      <Grid>
          <Grid className={styles.profileFront}>
            <Front {...props}/>
          </Grid>
      </Grid>
    </div>
  );
}

export default SingleMember;