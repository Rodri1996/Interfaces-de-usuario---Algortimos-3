import React, { Component } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Lock, Login, Person } from '@mui/icons-material'
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
import { withRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    }
  }

  ingresar = () => {
    try{
    this.validarLogin()
    //this.props.history.push('/')
    }catch(e){}
  }

  updateUsername = (event) => {
    const username = event.target.value
    this.setState({
      username: username,
    })
  }

  updatePassword = (event) => {
    const password = event.target.value
    this.setState({
      password: password,
    })
  }

  validarLogin = () => {
    let username = this.state.username
    let password = this.state.password

    if (username==="") {
      throw Error("El campo username es obligatorio")
    } else if (password===""){
      throw Error ("El campo password es obligatorio")
    } else if (username==="" && password===""){
      throw Error ("User y/o password son obligatorios")
    }
  }

  render() {
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
                  onChange={this.updateUsername}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Contraseña"
                  variant="standard"
                  onChange={this.updatePassword}
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
