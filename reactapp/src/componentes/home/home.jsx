import { Component } from 'react'
import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { usuarioService } from '../../services/usuarioService'
import { rutinaService } from '../../services/rutinaService'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors'


const purpleTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#6d1b7b',
        },
    },
});

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuariosTotales: [],
            rutinas: [],
            rutinasFinales:[],
            usuariosFinales:[]
        }
    }

    async componentDidMount() {
        await this.traerUsuariosTotales()
        await this.traerUsuariosFinales()
        await this.traerRutinas()
        await this.traerRutinasFinales()
    }

    async traerUsuariosTotales() {
        const usuariosTotales = await usuarioService.allInstances()
        this.setState({ usuariosTotales })
    }

    async traerRutinas() {
        const rutinas = await rutinaService.allInstances()
        this.setState({ rutinas })
    }

    async traerRutinasFinales(){
        const rutinasFinales = await rutinaService.rutinasFinales()
        this.setState({ rutinasFinales:rutinasFinales })
    }

    async traerUsuariosFinales(){
        const usuariosFinales = await usuarioService.usuariosFinales()
        this.setState({ usuariosFinales })
    }

    irUsuarios=()=>{
        this.props.history.push('/usuario')
    }

    irRutinas=()=>{
        this.props.history.push('/Rutina')
    }

    irActividades=()=>{
        this.props.history.push('/actividades')
    }

    render() {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 1, mb: 1 }}>
                    <Card sx={{ width: 170, height: 170 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5" component="div">
                                {this.state.usuariosTotales.length}
                            </Typography>
                            <GroupsIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Usuarios totales
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 170, height: 170 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5" component="div">
                                {this.state.rutinas.length}
                            </Typography>
                            <FitnessCenterIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Rutinas
                            </Typography>
                        </CardContent>
                    </Card><Card sx={{ width: 170, height: 170 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5" component="div">
                                {this.state.usuariosFinales.length}
                            </Typography>
                            <GroupsIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Usuarios activos
                            </Typography>
                        </CardContent>
                    </Card><Card sx={{ width: 170, height: 170 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h5" component="div">
                                {this.state.rutinasFinales.length}
                            </Typography>
                            <FitnessCenterIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Rutinas realizables
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ display: 'flex', gap: '0.5rem', ml: 1, mr: 1 }}>
                    <Button theme={purpleTheme} color="primary" onClick={this.irUsuarios} variant="contained" fontSize="1rem">
                        <Typography fontSize="0.6rem" sx={{textTransform: 'capitalize',fontSize:"0.7rem"}}>
                            Eliminar usuarios inactivos
                        </Typography>
                    </Button>
                    <Button theme={purpleTheme} color="primary" onClick={this.irRutinas} variant="contained">
                        <Typography  sx={{textTransform: 'capitalize',fontSize:"0.7rem"}}>
                            Eliminar rutinas imposibles
                        </Typography>
                    </Button>
                </Box>
                
                <Button theme={purpleTheme} color="primary" onClick={this.irActividades} variant="outlined"
                style={{borderColor:"primary.main",border:"solid"}}
                sx={{mt:2,width:"95%"}}>
                        <Typography fontSize="0.6rem" sx={{textTransform: 'capitalize',fontSize:"0.7rem"}}>
                            Actividades
                        </Typography>
                    </Button>
                
            </Box>
        )
    }
}
