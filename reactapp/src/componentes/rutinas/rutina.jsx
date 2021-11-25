import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { rutinaService } from '../../services/rutinaService'
import { Button, Stack } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import { TablaRutina } from '../../componentes/tabla/tablaRutinas'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secundary: {
      main: '#000000',
    }
  },
})

export default class Rutina extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rutinasActuales: [],
      rutinasFinales: [],
    }
  }

  async componentDidMount() {
    await this.traerRutinas()
  }
  
  async traerRutinas() {
    const rutinasActuales = await rutinaService.allInstances()
    this.setState({ rutinasActuales })
  }
  
  irHome() {
    window.location.href = '/home'
  }

  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1.5 }}>
          <Typography variant="h5" fontWeight="bold">
            Rutinas Actuales
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {this.state.rutinasActuales.length}
          </Typography>
        </Box>
        <TablaRutina
          tablaRutinas={this.state.rutinasActuales}
        />
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1.5 }}>
          <Typography variant="h5" fontWeight="bold">
            Rutinas Finales
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {this.state.rutinasFinales.length}
          </Typography>
        </Box>
        <TablaRutina
          tablaRutinas={this.state.rutinasFinales}
        />
        <cardActions>
          <Stack sx={{ display: 'flex', justifyContent: 'space-between' }} direction="row" spacing={2}>
            <Button
              className="colorCancelar"
              theme={theme}
              variant="contained"
              color="secundary"
              onClick={this.irHome}
              sx={{ textTransform: 'capitalize', width: "90%" }} style={{ color: 'white' }}
            >
              Cancelar
            </Button>
            <Button
              theme={theme}
              variant="contained"
              color="primary"
              onClick={this.ingresar}
              sx={{ textTransform: 'capitalize', width: "90%" }}
            >
              Aceptar
            </Button>
          </Stack>
        </cardActions>
      </Box>
    )
  }
}