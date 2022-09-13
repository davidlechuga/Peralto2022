import React from 'react';
import List from './List';
import {Item} from 'semantic-ui-react'
import './List.scss'

function Lists({lists, imgSrc}) {

  //console.log(imgSrc);

  const img_src = { imgSrc } 
  //console.log(img_src);

  return (
    <div>
      
      <Item.Group >
        {lists.map((item) => (
          <List key={item.id} {...img_src} {...item}> {item.title} </List>
        ))}
      </Item.Group>
    
    </div>
  )
}

export default Lists