import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Logout  from '@mui/icons-material/Logout'

const Header = () => {
  return (
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
            <Avatar alt="Remy Sharp" src="../assets/images/Lionel_Messi.jpg" />
          </Stack>
          <p>Lionel Messi</p>
          <IconButton aria-label="logout" style={{color:'white'}}>
            <Logout />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
