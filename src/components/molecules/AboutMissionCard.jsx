import React from 'react'
import { Box } from "@material-ui/core";
import image from "../../images/mission-desktop.png"

function AboutMissionCard (props) {
  const{styles} = props
    return (
      <img
      src={image}
      alt="mission-card"
      width="30%"
      align="left"
    />
    );
}

export default AboutMissionCard;