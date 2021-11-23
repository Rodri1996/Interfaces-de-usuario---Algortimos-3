
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
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { obtenerMensaje } from '../../Utils/obtenerMensaje'

export default class Actividades extends Component{
    
    
    state={
        actividad: new Actividad(),
        grupMuscularesConocidos: ['Piernas'],
        gruposMuscularesMarcados:[],
        inputValue:"",
        estadoListo:false,
        errorMessage: ""
    }

    async componentDidMount(){
        const gruposMuscularesJson = await this.traerGruposMusculares()
        this.setState({
            grupMuscularesConocidos:gruposMuscularesJson
        },
            this.estadoListo
        )
        console.info(this.state.grupMuscularesConocidos)
    }

    async traerGruposMusculares(){
        return await gruposMuscularesService.getGruposMusculares()
    }
    
    cambiarNombre=(event)=>{
        const inputContent = event.target.value 
        const actividad = this.state.actividad
        actividad.nombre = inputContent
        this.cambiarEstadoInput(inputContent)
        this.cambiarEstadoActividad(actividad)
    }

    cambiarEstadoInput=(inputContent)=>{
        this.setState({
            inputValue:inputContent  
        })
    }

    cambiarEstadoActividad=(actividad)=>{
        const newActividad = Object.assign(actividad)
        this.setState({
            actividad:newActividad
        },
           // this.estadoListo
        )
    }

    estadoListo=()=>{
        this.setState({
            estadoListo: true//this.state.grupMuscularesConocidos.length > 0
        })
    }

    descartarCambios = ()=>{
        this.cambiarEstadoInput("")
        const actividadVacia = new Actividad()
        this.cambiarEstadoActividad(actividadVacia)
        this.setState({
            errorMessage:""
        })
    }

    sumarGrupoMuscular=(grupo)=>{
        console.log('Grupo musc marcado: '+grupo)
        const gruposAntiguos = this.state.grupMuscularesConocidos
        const gruposActualizados = gruposAntiguos + [grupo]
        //this.actualizarGrupos(gruposActualizados)
        console.log("Grupos actualizados: "+this.state.gruposMuscularesMarcados)
    }

    actualizarGrupos=(gruposActualizados)=>{
        this.setState({
            gruposActualizados: gruposActualizados
        })
    }

    agregarActividad= async ()=>{
        try{
            const actividad = this.state.actividad
            actividad.validar()
            this.descartarCambios()
            await actividadesService.sumarActividad(actividad)
        }catch(e){
            this.setState({
                errorMessage: obtenerMensaje(e) 
            })
        }
    }


    irPantallaAnterior=()=>{
        this.props.history.push('/home')
    }

    render(){
        const snackbarOpen = !!this.state.errorMessage
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
                <TextField id="outlined-basic" label= "Nombre de la actividad"
                variant="outlined"
                value={this.state.inputValue}
                onChange={this.cambiarNombre}/>

                {this.state.estadoListo && <Stack display="flex" 
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center" direction="row" spacing={1}>
                 
                    {
                    this.state.grupMuscularesConocidos.map(
                        (grupo)=>
                        <Chip variant="outlined"
                        color="primary"
                        label={grupo}
                        key={grupo.id}
                        className="grupoMarcador"
                        onClick={this.sumarGrupoMuscular(grupo)
                        }
                        />
                    )}
                </Stack>}
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

                {snackbarOpen && <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">{this.state.errorMessage}</Alert>
                </Stack>}
                <SeccionActividades></SeccionActividades>
                <Button 
                    color="secondary"
                    onClick={this.irPantallaAnterior}
                    variant="outlined">
                    Volver
                </Button>
            </Box>
        )

    }
}