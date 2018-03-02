import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import errorGif from '../404.gif'


const Error = () => (
    <Link to='/'>
        <img src={errorGif} style={{width: '100%', marginTop:'3%', height: 600}} />
    </Link>
)


export default Error