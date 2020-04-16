import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Front from '../atom/Front'
import Back from '../atom/Back'
import LinkedIn from '../../images/linkedin-icon.svg'

function SingleMember (props) {
  const {name, linkedIn, photo, title, favoriteShow, favoriteMistake, isFlipped} = props.profile
  const { handleFlip } = props  
  return (
    <div>
    <Grid className="card profile-card">
      <Grid container alignItems="center" className="title">
        <Typography variant="h6" style={{ fontStyle: "italic", marginBottom: "unset" }}>
          {name}
        </Typography>
          <a target="_blank" href={linkedIn} rel="noopener noreferrer">
            <img
              src={LinkedIn}
              width="20px"
              height="20px"
              style={{ margin: "0 0 -2px 6px" }}
            />
          </a>
      </Grid>
      <Grid container alignItems="center" className="title job-title-banner">
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