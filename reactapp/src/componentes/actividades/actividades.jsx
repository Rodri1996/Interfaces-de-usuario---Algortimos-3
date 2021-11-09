
import { Component,React } from "react";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SeccionActividades from '../seccionActividades/seccionActividades';
import Fab from '@mui/material/Fab';
import { borderColor, height } from "@mui/system";
import {Actividad} from '../../dominio/actividad'

const ButtonGM ={
    estilos:{
        width:"fit-content",
        height:"35px"
    }
}


export default class Actividades extends Component{
    
    
    state={
        actividad: new Actividad()
    }
    
    cambiarNombre=(event)=>{
        const actividad = this.state.actividad
        actividad.nombre = event.target.value
        this.cambiarEstado(actividad)
    }

    cambiarEstado=(actividad)=>{
        const newActividad = Object.assign(actividad)
        this.setState({
            actividad:newActividad
        })
    }

    descartarCambios = ()=>{
        
    }

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
                <TextField id="outlined-basic" label="Nombre de la actividad" variant="outlined"
                onChange={this.cambiarNombre}
                ref="campoNombre"/>
                <Fab variant="extended" style={ButtonGM.estilos}>
                    Piernas
                </Fab>
                <Box sx={{display:"flex",justifyContent:"space-around"}}>
                    <Button 
                    variant="outlined"
                    className="boton-mediano" 
                    color="secondary"
                    onClick={this.descartarCambios}>
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