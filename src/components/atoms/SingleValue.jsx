import React from 'react'
import { Grid, Card, CardContent } from "@material-ui/core";

function singleValue(props) {
  const { featureImage } = props.singleValue
  const { imgBackground } = props.singleValue
  const { header } = props.singleValue
  const { description } = props.singleValue
  const { textBackground } = props.singleValue

  return (

    <Card style={{
      borderRadius: "30px",
      margin: "10px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", padding: "0px",
    }} className="value-card">

      <CardContent style={{
        padding: "0px",
        display: "flex", justifyContent: "center", backgroundColor: textBackground
      }} >
        <CardContent style={{
          padding: "0px",
          width: "45%",
          backgroundColor: imgBackground
        }} className="value-img">
          <img
            src={featureImage}
            alt="right-on-education-our-values"
            width="100%"
            height="100%"
          /></CardContent>
        <CardContent style={{
          padding: "0px", width: "55%",
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: textBackground
        }} className="value-text">
          <CardContent width="100%">
            <h4 className='values-header'>{header}</h4>
            <p className='values-text'>{description}</p>
          </CardContent>
        </CardContent>
      </CardContent>

    </Card>


  );
}
export default singleValue;