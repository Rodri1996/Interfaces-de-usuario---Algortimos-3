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


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secundary: {
        main: grey[50],
      },
  },
})

function createData(name, date, username) {
  return { name, date, username }
}

const rows = [
  createData('Jose Perez', '01/11/90', 'jperez'),
  createData('Marcos Sanchez', '01/11/90', 'msanchez'),
  createData('Sebastian Rodriguez', '01/11/90', 'pepitogrillo'),
  createData('Miguel Sosa', '01/11/90', 'elvisp'),
  createData('Mariano Acosta', '01/11/90', 'gelatina'),
]

export default class Usuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuariosActuales: [],
      usuarioFinales:[]
    }
  }

  async componentDidMount(){
    await this.traerUsuariosActuales()
    
  }

  async traerUsuariosActuales(){
    const usuariosActuales = await usuarioService.allInstances()
    this.setState({usuariosActuales})
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
              5
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead width="100%">
                <TableRow
                  className="table-head"
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <TableCell className="letra" sx={{ fontWeight: 'bold' }}>
                    Nombre
                  </TableCell>
                  <TableCell className="letra" sx={{ fontWeight: 'bold' }}>
                    Fecha de Nacimiento
                  </TableCell>
                  <TableCell className="letra" sx={{ fontWeight: 'bold' }}>
                    Username
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}
          >
            <Typography variant="h5" fontWeight="bold">
              Usuarios Finales
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              0
            </Typography>
          </Box>
          <cardActions>
          <Stack sx={{display:'flex',justifyContent:'space-between'}}direction="row" spacing={2}>
            <Button
              theme={theme}
              variant="contained"
              onClick={this.ingresar}
              sx={{ textTransform: 'capitalize', bgColor:'secundary' }}
            >
              Cancelar
            </Button>
            <Button
              theme={theme}
              variant="contained"
              color="primary"
              onClick={this.ingresar}
              sx={{ textTransform: 'capitalize' }}
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
