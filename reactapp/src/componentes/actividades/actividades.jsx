import { Component } from "react";
import seccionActividades from "../seccionActividades/seccionActividades";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default class Actividades extends Component{
    render(){
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                height:"35vh"
                ,p:2}}>
                <Typography fontWeight="bold">
                    Nueva actividad
                </Typography>
                <Typography>
                    Nombre
                </Typography>
                <TextField id="outlined-basic" label="Nombre de la actividad" variant="outlined"/>
                <Box sx={{display:"flex",justifyContent:"space-around"}}>
                    <Button className="boton-mediano" variant="contained">
                    Limpiar campos
                    </Button>
                    <Button className="boton-mediano" variant="contained">
                    Aceptar
                    </Button>
                </Box>
            </Box>
        )

    }
}