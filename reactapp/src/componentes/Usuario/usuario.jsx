import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, Stack } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple, grey } from '@mui/material/colors'
import { usuarioService } from '../../services/usuarioService'
import {TablaUsuarios} from '../tabla/tablaUsuarios'


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secundary:{
      main: '#000000',
    }
  },
})
export default class Usuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuariosActuales: [],
      usuarioFinales:[]
    }
  }

  irHome(){
    window.location.href='/home'
  }

  async componentDidMount(){
    await this.traerUsuariosActuales()
  }

  async traerUsuariosActuales(){
    const usuariosActuales = await usuarioService.allInstances()
    this.setState({
      usuariosActuales:usuariosActuales
    })
  }

  async traerUsuariosFinales(){
    const usuariosFinales = await usuarioService.usuariosFinales()
    this.setState({
      usuarioFinales:usuariosFinales
    })
  }

  eliminarUsuariosInactivos=async()=>{
    await usuarioService.eliminarUsuariosInactivos()
    await this.traerUsuariosFinales()
  }


  render() {
    return (
      
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}
          >
            <Typography variant="h5" fontWeight="bold">
              Usuarios Actuales
            </Typography>
            <Typography variant="h6" fontWeight="bold">
            {this.state.usuariosActuales.length}
            </Typography>
          </Box>
              <TablaUsuarios tablaUsuarios={this.state.usuariosActuales}/>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5,mt:"1rem"}}
          >
            <Typography variant="h5" fontWeight="bold">
              Usuarios Finales
            </Typography>
            <Typography variant="h6" fontWeight="bold">
            {this.state.usuarioFinales.length}
            </Typography>
          </Box>
          <TablaUsuarios tablaUsuarios={this.state.usuarioFinales}/>
          <cardActions>
          <Stack sx={{display:'flex',justifyContent:'space-between', mt:"2rem"}}direction="row" spacing={2}>
            <Button
              className="colorCancelar"
              theme={theme}
              variant="contained"
              color="secundary"
              onClick={this.irHome}
              sx={{ textTransform: 'capitalize', width:"90%"}} style={{color:'white'}}
            >
              Cancelar
            </Button>
            <Button
              theme={theme}
              variant="contained"
              color="primary"
              onClick={this.eliminarUsuariosInactivos}
              sx={{ textTransform: 'capitalize', width:"90%"}}
            >
              Aceptar
            </Button>
          </Stack>
          </cardActions>
          <br/>
        </Box>
     
    )
  }
}
