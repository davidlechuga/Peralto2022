import React from 'react'
import { List, Image } from 'semantic-ui-react'
import Logo from '../../assets/imagenes-layout/logoPeranto.png'
import '../List/List.scss'


const Listt = ({title, description, createdAt}) => (
  <List>
    <List.Item className='item_list'>
        <Image src={Logo} alt="Twitgov" />
      <List.Content>
        <List.Description className='header_Listt'>{title} </List.Description>
        <List.Description className='header_Listt'>{description} </List.Description>
        <List.Description className='header_Listt'>{new Date(createdAt).toDateString()} </List.Description>

      </List.Content>
    </List.Item>
  </List>
)

export default Listt
