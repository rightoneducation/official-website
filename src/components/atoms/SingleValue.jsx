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
      width: "445px", height: "200px", borderRadius: "30px",
      margin: "10px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)", padding: "0px",
    }}>
      <CardContent style={{
        width: "445px", height: "200px", padding: "0px",
        display: "flex", alignItems: "flex-end", justifyContent: "left", backgroundColor: imgBackground
      }}>
        <img
          src={featureImage}
          alt="right-on-education-our-values"
          width="200px"
        />
        <CardContent style={{
          width: "245px", height: "200px", padding: "0px",
          display: "flex", alignItems: "center", justifyContent: "left",
          paddingLeft: "22px", paddingRight: "29px", backgroundColor: textBackground
        }}>
          <div>
            <h4 className='values-header'>{header}</h4>
            <p className='values-text'>{description}</p>
          </div>
        </CardContent>
      </CardContent>


    </Card>


  );
}
export default singleValue;