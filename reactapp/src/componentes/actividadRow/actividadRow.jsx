import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import {actividadesService} from '../../services/actividadesService'
import { Typography } from '@mui/material';

export const ActividadRow = (props) =>{

    const borrarActividad= async ()=>{
        try{
            await actividadesService.borrarActividad(props.actividad.id)
        }
        finally{    
            await props.actualizarActividades()
        }
    }

    const eliminarActividadButton = 
        <IconButton 
            aria-label="delete" 
            color="error"
            onClick={borrarActividad} 
            >
            <DeleteIcon />
        </IconButton>


    return(
            <TableRow>
                <TableCell>{props.actividad.nombre}</TableCell>
                <TableCell sx={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                    {props.actividad.gruposMusculares}
                    {eliminarActividadButton}
                </TableCell>
            </TableRow>
    )
}