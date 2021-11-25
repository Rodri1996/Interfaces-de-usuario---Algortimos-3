import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from "@mui/material/TableCell"
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { rutinaService } from '../../services/rutinaService'
import { Button, Stack } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

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



  function createData(nombre, autor, descripcion) {
    return { nombre, autor, descripcion};
  }
  
  const rows = [
    createData("Aquagym", "Evaristo", "ejercico en el agua"),
    createData("Natacion", "Anacleta", "aprende a nadar"),
    createData("Spinning", "Ruperta", "piernas fuertes"),
    createData("Musculacion", "Clemetina", "buen fisico"),
    createData("Ritmos", "Rogelio", "divertite")
  ];

export default class Rutina extends Component{

    constructor(props) {
        super(props)
        this.state = {
          rutinasActuales: [],
          rutinasFinales: [],
          rutinas: []
        }
      }

      irHome(){
        window.location.href='/home'
      }
    
    async componentDidMount() {
      await this.traerRutinas()
    }

    async traerRutinas() {
      const rutinas = await rutinaService.allInstances()
      this.setState({ rutinas })
    }


    render(){
        return(
            <Box sx={{ display: 'flex',flexDirection: 'column',p:1}}>
            <Box sx={{ display: 'flex', justifyContent:"space-between",mb:1.5}}>
                    <Typography variant="h5" fontWeight="bold">
                        Rutinas Actuales
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                    {this.state.rutinasActuales.length}
                    </Typography>
                </Box>
            <TableContainer component={Paper}>
            <Table  aria-label="customized table">
              <TableHead width='100%'>
                <TableRow className="table-head" sx={{display:'flex', justifyContent:'space-between'}} >
                  <TableCell className="letra" sx={{fontWeight: 'bold'}}>Nombre</TableCell>
                  <TableCell className="letra" sx={{fontWeight: 'bold'}}>Autor</TableCell>
                  <TableCell className="letra" sx={{fontWeight: 'bold'}}>Descripcion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rutinas.map((row) => (
                  <TableRow key={row.nombre}>
                    <TableCell component="th" scope="row">
                      {row.nombre}
                    </TableCell>
                    <TableCell>{row.autor}</TableCell>
                    <TableCell>{row.descripcion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent:"space-between",mb:1.5}}>
                    <Typography variant="h5" fontWeight="bold">
                        Rutinas Finales
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                    {this.state.rutinasFinales.length}
                    </Typography>
                </Box>
                <cardActions>
          <Stack sx={{display:'flex',justifyContent:'space-between'}}direction="row" spacing={2}>
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
              onClick={this.ingresar}
              sx={{ textTransform: 'capitalize', width:"90%"}}
            >
              Aceptar
            </Button>
          </Stack>
          </cardActions>
          </Box>
        )
    }
}