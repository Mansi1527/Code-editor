import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';
const Container=styled(AppBar)`
    background:#060606;
    height:9vh;
`
const Header = () => {
  return (
    <div>
    <Container position='static'>
        <Toolbar 
        className=''
        ></Toolbar>
    </Container>
    </div>
  )
}

export default Header
