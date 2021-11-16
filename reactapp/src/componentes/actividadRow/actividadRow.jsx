import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box'
import { TableContainer } from '@mui/material';


export const ActividadRow = (props) =>{

    const eliminarActividadButton = <IconButton aria-label="delete" color="error" >
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