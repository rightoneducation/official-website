import React from 'react'
import { Item, Image } from 'semantic-ui-react'

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
      <Item className='single-col'>
        <div className='feature-images'>
          <center><Image src={featureIcon} width='100%' className="App-logo" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
        </div>
        <Item.Header as='h4' className='feature-title'>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
      </Item>
  )
}

export default singleFeature;