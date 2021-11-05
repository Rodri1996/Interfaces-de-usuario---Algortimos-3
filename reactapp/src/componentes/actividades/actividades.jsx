import { Component } from "react";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SeccionActividades from '../seccionActividades/seccionActividades';
import Fab from '@mui/material/Fab';
import { borderColor, height } from "@mui/system";

const ButtonGM ={
    estilos:{
        width:"fit-content",
        height:"35px"
    }
}
export default class Actividades extends Component{
    render(){
        return(
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
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
                <Fab variant="extended" style={ButtonGM.estilos}>
                    Piernas
                </Fab>
                <SeccionActividades></SeccionActividades>

            </Box>
        )

    }
}