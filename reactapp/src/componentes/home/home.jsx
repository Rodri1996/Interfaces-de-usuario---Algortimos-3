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
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import { usuarioService } from '../../services/usuarioService'


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuariosTotales: []
            // rutinas: []
        }
    }

    async componentDidMount() {
        await this.traerUsuariosTotales()
        // await this.traerRutinas()
    }

    async traerUsuariosTotales() {
        const usuariosTotales = await usuarioService.allInstances()
        this.setState({ usuariosTotales })
    }

    // async traerRutinas() {
    //     const rutinas = await rutinaService.allInstances()
    //     this.setState({ rutinas })
    // }

    render() {
        return (

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
                            22
                        </Typography>
                        <FitnessCenterIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Rutinas
                        </Typography>
                    </CardContent>
                </Card><Card sx={{ width: 170, height: 170 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" component="div">
                            15
                        </Typography>
                        <GroupsIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Usuarios activos
                        </Typography>
                    </CardContent>
                </Card><Card sx={{ width: 170, height: 170 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" component="div">
                            20
                        </Typography>
                        <FitnessCenterIcon sx={{ fontSize: 80, alignSelf: 'flex-end' }} />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Rutinas realizables
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        )
    }

    

}
Home.propTypes = {
    history: PropTypes.object   
}

export default withRouter(Home)
