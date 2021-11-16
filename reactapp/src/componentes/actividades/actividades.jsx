
import { Component,React } from "react";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SeccionActividades from '../seccionActividades/seccionActividades';
import {Actividad} from '../../dominio/actividad'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {actividadesService} from '../../services/actividadesService'
import {gruposMuscularesService} from '../../services/gruposMuscularesService'
export default class Actividades extends Component{
    
    
    state={
        actividad: new Actividad(),
        grupMuscularesConocidos: ['Piernas'],
        gruposMuscularesMarcados:[],
        inputNombre: "Nombre de la actividad"
    }

    async componentDidMount(){
        const gruposMuscularesJson = await this.traerGruposMusculares()
        this.setState({
            grupMuscularesConocidos:gruposMuscularesJson
        })
        console.info(this.state.grupMuscularesConocidos)
    }

    async traerGruposMusculares(){
        return await gruposMuscularesService.getGruposMusculares()
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
        console.log('Voy a descartar los cambios')
        this.setState({
            inputNombre:"Nombre de la actividad"
        })
        console.log(this.state.inputNombre)
    }

    sumarGrupoMuscular=(grupo)=>{
        console.log('Grupo musc marcado: '+grupo)
        // const actividad = this.state.actividad
        // actividad.gruposMuscularesMarcados.push(grupo)
        // this.cambiarEstado(actividad)
    }

    agregarActividad= async ()=>{
        const actividad = this.state.actividad
        await actividadesService.sumarActividad(actividad)
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
                <TextField id="outlined-basic" label= {this.state.inputNombre}
                variant="outlined"
                onChange={this.cambiarNombre}/>

                <Stack display="flex" 
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center" direction="row" spacing={1}>
                    {/* {
                    this.state.grupMuscularesConocidos.data.map(
                        (grupo)=>
                        <Chip variant="outlined"
                        color="primary"
                        label={grupo}
                        key="0"
                        className="grupoMarcador"
                        onClick={this.sumarGrupoMuscular(grupo)
                        }
                        />
                    )} */}
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
                    className="boton-mediano" variant="contained"
                    onClick={this.agregarActividad}>
                    Aceptar
                    </Button>
                </Box>
                <SeccionActividades></SeccionActividades>
            </Box>
        )

    }
}