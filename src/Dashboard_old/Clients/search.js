import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import search from './search.css'

export default class Search extends Component {

  render() {
   
    return (
        <Menu secondary>
             <Menu.Item className='search'>
                <Input icon='search'  placeholder='Search...' />
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item>
                <Button as={Link} to='/clients/new' positive className='clientAdd'>Add Client</Button>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
  }
}
 