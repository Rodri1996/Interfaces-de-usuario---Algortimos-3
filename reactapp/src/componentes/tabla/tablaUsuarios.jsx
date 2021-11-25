import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from "@mui/material/TableCell"
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"

export const TablaUsuarios = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead width='100%'>
                    <TableRow className="table-head" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Fecha de Nacimiento</TableCell>
                        <TableCell className="letra" sx={{ fontWeight: 'bold' }}>Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.tablaUsuarios.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.fecha}</TableCell>
                    <TableCell>{row.username}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
    )
}