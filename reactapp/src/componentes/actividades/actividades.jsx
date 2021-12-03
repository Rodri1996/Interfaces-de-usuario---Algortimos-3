
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
import { obtenerMensaje } from '../../Utils/obtenerMensaje'
import Card from '@mui/material/Card';
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      
      secundary:{
          main:'#2A2929',
      },
    },
  })

export default class Actividades extends Component{
    
    constructor(){
        super()
        this.state={
            actividad: new Actividad(),
            grupMuscularesConocidos: [],
            gruposMuscularesMarcados:[],
            inputValue:"",
            estadoListo:false,
            errorMessage: ""
        }
    }

    async componentDidMount(){
        await this.setearGruposMusculares()
    }

    async setearGruposMusculares(){
        let gruposMusculares = await gruposMuscularesService.getGruposMusculares()
        this.setState({
            grupMuscularesConocidos:gruposMusculares
        })
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
        }
        )
    }

    descartarCambios = ()=>{
        this.cambiarEstadoInput("")
        const actividadVacia = new Actividad()
        this.cambiarEstadoActividad(actividadVacia)
        this.quitarErrorMessage()
    }

    sumarGrupoMuscular=(grupo)=>{
        const actividad = this.state.actividad
        try {
            actividad.contieneGrupo(grupo)
            actividad.gruposMusculares.push(grupo)
            this.cambiarEstadoActividad(actividad)
            this.quitarErrorMessage()}
        catch(e){
            this.sumarErrorMessage(e)
        }
    }

    quitarErrorMessage(){
        this.setState({
            errorMessage:""
        })
    }

    sumarErrorMessage(errorMessage){
        this.setState({
            errorMessage: obtenerMensaje(errorMessage) 
        })
    }

    agregarActividad= async ()=>{
        try{
            const actividad = this.state.actividad
            actividad.validar()
            this.descartarCambios()
            await actividadesService.sumarActividad(actividad)
        }catch(e){
            this.sumarErrorMessage(e)
        }
    }

    irPantallaAnterior=()=>{
        this.props.history.push('/home')
    }

    render(){
        const snackbarOpen = !!this.state.errorMessage
        
        const mostrarGruposMusculares=
        this.state.grupMuscularesConocidos.map(
            (grupo)=>
                <Chip theme={theme} variant="outlined" 
                color="primary"
                className="grupoMarcador"
                style={{fontWeight:"bold",fontSize:14}}
                label={grupo.nombre}
                key={grupo.id}
                onClick={()=>this.sumarGrupoMuscular(grupo.nombre)}
            />
        )

        return(
            <Card variant="onlined" theme={theme}
            sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-around",
                p:2,minHeight:"70vh",border:4,borderColor:"primary.main",m:2}}>
                <Typography variant="h5" fontWeight="bold">
                    Nueva actividad
                </Typography>
                <Typography variant="h7" mt="5px" mb="10px">
                    Nombre
                </Typography>
                <TextField theme={theme} id="outlined-basic" label= "Ingresar Actividad"
                variant="outlined"
                value={this.state.inputValue}
                onChange={this.cambiarNombre}
               />

               <Stack display="flex" 
                flexWrap="wrap"
                mt="10px"
                justifyContent="center"
                gap="5px"
                alignItems="center" direction="row">            
                    {mostrarGruposMusculares}
                </Stack>
                <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:1,mt:"10px"}}>
                    <Button 
                    theme={theme}
                    variant="contained" 
                    color="secundary"
                    style={{color:'white', textTransform: 'capitalize',width:"90%"}}
                    onClick={this.descartarCambios}
                    >
                    Limpiar
                    </Button>
                    <Button
                    theme={theme} 
                     variant="contained"
                     color="primary"
                     style={{textTransform: 'capitalize',width:"90%"}}
                    onClick={this.agregarActividad}>
                    Aceptar
                    </Button>
                </Box>

                {snackbarOpen && <Stack sx={{ width: '100%' }} mt="3px" spacing={2}>
                    <Alert severity="error" variant="filled">{this.state.errorMessage}</Alert>
                </Stack>}
                <SeccionActividades></SeccionActividades>
                <Button 
                    theme={theme}
                    variant="contained" 
                    color="secundary"
                    style={{color:'white', textTransform: 'capitalize',width:"100%"}}
                    onClick={this.irPantallaAnterior}>
                    Volver
                </Button>
            </Card>
        )

    }
}