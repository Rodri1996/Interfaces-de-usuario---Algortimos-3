import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Logout  from '@mui/icons-material/Logout'
import { PropTypes } from 'prop-types'
import { useHistory } from 'react-router-dom'
import { WindowSharp } from '@mui/icons-material'


const Header = (props) => {

   const logout = () => {
    //  history.push('/')
    window.location.href = '/'
   }

  // const esLogin = () => this.props.navigate.state.key !=='/'
  //window.location.href !=='/'

  
  return(
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
        <Box sx={{ display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        width:'100%', 
        flexGrow: 1,
        }}>

          <Typography variant="h6" component="div" >
            Admin Panel
          </Typography>
         
          <Stack spacing={2}>
            <Avatar src="/Lionel_Messi.jpg" />
          </Stack>
          <p>Lionel Messi</p>
          <IconButton aria-label="logout" style={{color:'white'}} onClick={logout}>
            <Logout />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

Header.propTypes = {
    history: PropTypes.object, 
}

export default Header
