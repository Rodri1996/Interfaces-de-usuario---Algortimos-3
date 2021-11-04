import { Component } from "react";
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
import DeleteIcon from '@mui/icons-material/Delete';

function createData(nombre, gruposMusculares) {
    return { nombre, gruposMusculares };
  }
  
  const rows = [
    createData('Flexiones', 'Brazos-Espalda-Hombros')];

export default class seccionActividades extends Component{
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
                        <TableHead>
                            <TableRow>
                                <TableCell
                                fontWeight="500"
                                >Nombre</TableCell>
                                <TableCell align="left" fontWeight="500">Grupos Musculares</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow
                                key={row.nombre}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.nombre}
                                </TableCell>
                                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                                    <TableCell align="left">{row.gruposMusculares}
                                    </TableCell>
                                    <DeleteIcon></DeleteIcon>
                                </Box>
                                
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Card>
        )
    }
}