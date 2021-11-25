
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {ActividadRow} from '../actividadRow/actividadRow'
import { Component } from 'react';
import {actividadesService} from '../../services/actividadesService'
import { purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      
      secundary:{
          main:'#000000',
      },
    },
  })

export default class SeccionActividades extends Component{

    state={
        actividadesDisponibles:[]
    }

    async componentDidMount(){
        await this.traerActividades()
    }

    traerActividades=async()=>{
        const actividades = await actividadesService.getActividades()
        this.setState({
            actividadesDisponibles:actividades
        })
    }

    render(){
        return(
        // <Card >
            <Box sx={{ display: 'flex',flexDirection: 'column',p:1}}>
                <Box sx={{ display: 'flex', justifyContent:"space-between",mb:1.5}}>
                    <Typography variant="h5" fontWeight="bold">
                        Actividades
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                        {this.state.actividadesDisponibles.length}
                    </Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className="color-tableHead">
                            <TableRow >
                                <TableCell style={{color:'white',fontWeight:'bold'}}>Nombre</TableCell>
                                <TableCell
                                    style={{color:'white',fontWeight:'bold'}}
                                    align="left" >Grupos Musculares
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.actividadesDisponibles.map((actividad)=>
                                    <ActividadRow
                                        actividad={actividad}
                                        key={actividad.id}
                                        actualizarActividades={this.traerActividades}
                                    />
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        // </Card>
        )}
    }
