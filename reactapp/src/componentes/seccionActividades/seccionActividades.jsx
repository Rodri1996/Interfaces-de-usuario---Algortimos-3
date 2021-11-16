
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
import {actividadesService} from '../../servicios/actividadesService'

  
//export const SeccionActividades=(props)=>{

export default class SeccionActividades extends Component{

    state={
        actividadesDisponibles:[]
    }

    async componentDidMount(){
        await this.traerActividades()
    }

    async traerActividades(){
        const actividades = await actividadesService.getActividades()
        this.setState({
            actividadesDisponibles:actividades
        })
    }

    render(){
        return(
        <Card sx={{ minWidth: 275, p:1}}>
            <Box sx={{ display: 'flex',flexDirection: 'column',p:1}}>
                <Box sx={{ display: 'flex', justifyContent:"space-between",mb:1.5}}>
                    <Typography variant="h5" fontWeight="bold">
                        Actividades
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                        3
                    </Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className="table_header">
                            <TableRow >
                                <TableCell>Nombre</TableCell>
                                <TableCell
                                    fontWeight="600"
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
                                    />
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Card>
        )}
    }
