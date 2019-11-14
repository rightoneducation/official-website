import React from 'react'
import { Item, Image } from 'semantic-ui-react'

function singleWhy(props) {
  const { title, featureImage, description } = props.valueprop
  return (
     <Item className='why-righton-wrapper'>
        <div className='list-image'>
          <Image src={featureImage} alt="CHANGE IMAGE" width='100%' />
        </div>
        <div className='why-righton-list'>
          <Item.Header>{title}</Item.Header>
          <Item.Description>{description}</Item.Description>
        </div>
      </Item>
  )
}

export default singleWhy;