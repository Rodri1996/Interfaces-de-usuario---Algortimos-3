import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from "@mui/material/TableCell"
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import { rutinaService } from '../../services/rutinaService'

export const TablaRutina = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead width='100%'>
                    <TableRow className="table-head" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Autor</TableCell>
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Descripcion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tablaRutinas.map((row) => (
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
    )
}