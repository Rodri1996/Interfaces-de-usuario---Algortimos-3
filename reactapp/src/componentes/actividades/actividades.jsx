import { Component } from "react";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SeccionActividades from '../seccionActividades/seccionActividades';
export default class Actividades extends Component{
    render(){
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-around"
                ,p:2,height:"79vh"}}>
                <Typography variant="h4" fontWeight="600">
                    Nueva actividad
                </Typography>
                <Typography variant="h6">
                    Nombre
                </Typography>
                <TextField id="outlined-basic" label="Nombre de la actividad" variant="outlined"/>
                <Box sx={{display:"flex",justifyContent:"space-around"}}>
                    <Button 
                    variant="outlined"
                    className="boton-mediano" 
                    color="secondary">
                    Limpiar campos
                    </Button>
                    <Button 
                    className="boton-mediano" variant="contained">
                    Aceptar
                    </Button>
                </Box>
                <SeccionActividades></SeccionActividades>

            </Box>
        )

    }
}