
import { Component,React } from "react";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SeccionActividades from '../seccionActividades/seccionActividades';
import {Actividad} from '../../dominio/actividad'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default class Actividades extends Component{
    
    
    state={
        actividadesTraidas:[],
        actividad: new Actividad(),
        grupMuscularesConocidos: ['Piernas','Hombros','Brazos','Pecho','Espalda','Glúteos','Abdomen'],
        gruposMuscularesMarcados:[]
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

    sumarGrupoMuscular=(grupo)=>{
        // this.gruposMuscularesMarcados.push(grupo)
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
                
                <Stack display="flex" 
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center" direction="row" spacing={1}>
                    {this.state.grupMuscularesConocidos.map(
                        grupo=>
                        <Chip variant="outlined"
                        color="primary"
                        label={grupo}
                        className="grupoMarcador"
                        onClick={this.sumarGrupoMuscular(grupo)}
                        />
                    )}
                </Stack>
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