import React, {useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Logout  from '@mui/icons-material/Logout'
import { PropTypes } from 'prop-types'
import { Usuario } from '../../dominio/usuario'

const Header = (props) => {

   const logout = () => {
    window.location.href = '/'
   }

  const [usuarioLogeado, setusuarioLogeado] = useState({})
   
   useEffect(()=>{
     let usuarioJson = localStorage.getItem("usuarioLogeado")
     if(usuarioJson != null){
      console.info(JSON.parse(usuarioJson))
      let usuario = Usuario.fromJson(JSON.parse(usuarioJson))
      console.info(usuario)
      setusuarioLogeado(usuario)  
     }
     
   }
   ,[])

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
            <Avatar src={usuarioLogeado.foto} alt={usuarioLogeado.name} />
          </Stack>
          <p>{usuarioLogeado.name}</p>
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
