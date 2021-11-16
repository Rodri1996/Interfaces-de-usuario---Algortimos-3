import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import {actividadesService} from '../../services/actividadesService'

export const ActividadRow = (props) =>{

    const borrarActividad= async ()=>{
        await actividadesService.borrarActividad(props.actividad.id)
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
                <TableCell sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    Abdomen-Pecho
                    {eliminarActividadButton}
                </TableCell>
            </TableRow>
    )
}