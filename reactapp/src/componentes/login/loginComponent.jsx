import React, {Component} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Lock, Person } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { PropTypes } from 'prop-types'
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import '@fontsource/roboto/300.css'
import Typography from '@mui/material/Typography'
import FitnessCenter from '@mui/icons-material/FitnessCenter'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Snackbar from '@mui/material/Snackbar';
import { obtenerMensaje } from '../../Utils/obtenerMensaje'
import { usuarioService } from '../../services/usuarioService'


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      contraseña: '',
      errorMessage: ''
    }
  }

  ingresarUsuario = (event) => {
    const inputUsuario = event.target.value
    this.cambiarEstadoUsuario(inputUsuario)
  }

  ingresarContraseña = (event) => {
    const inputContraseña = event.target.value
    this.cambiarEstadoContraseña(inputContraseña)
    
  }

  cambiarEstadoUsuario = (inputUsuario) => {
    this.setState({
      usuario:inputUsuario,
    })
    console.log(this.state.usuario)
  }

  cambiarEstadoContraseña = (inputContraseña) => {
    this.setState({
      contraseña:inputContraseña,
    })
    console.log(this.state.contraseña)
  }

  ingresar = async ()  => {
    try{
      this.validarLogin()
      const username = this.state.usuario
      const password = this.state.contraseña
      const usuarioLogueado = await usuarioService.postUsuarioLogueado(username,password)
      console.log(usuarioLogueado)
      localStorage.setItem("id",usuarioLogueado.id.toString())
      this.props.history.push('/home')
    }catch(e){
      this.setState({ errorMessage: obtenerMensaje(e) })
    }
  }

  validarLogin = () => {
    if (this.state.usuario === '' && this.state.contraseña === '') {
      throw Error('Front: Usuario y/o contraseña son obligatorios')
    } else if (this.state.usuario === '') {
      throw Error('Front: El campo usuario es obligatorio')
    } else if (this.state.contraseña === '') {
      throw Error('Front: El campo contraseña es obligatorio')
    }
  }

  render() {
    const snackbarOpen = !!this.state.errorMessage
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                theme={theme}
                color="primary"
                sx={{ fontSize: 40 }}
              >
                <FitnessCenter sx={{ fontSize: 40 }} />
                RunApp
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Usuario"
                  variant="standard"
                  onChange={this.ingresarUsuario}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Contraseña"
                  variant="standard"
                  onChange={this.ingresarContraseña}
                />
              </Box>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button
                  theme={theme}
                  variant="contained"
                  color="primary"
                  onClick={this.ingresar}
                  sx={{ textTransform: 'capitalize' }}
                >
                  Ingresar
                </Button>
                <Snackbar
          open={snackbarOpen}
          message={this.state.errorMessage}
          autoHideDuration={4}
        />
      
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </>
    )
  }

  static get propTypes() {
    return {
      history: PropTypes.object,
    }
  }
}
