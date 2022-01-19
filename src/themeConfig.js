import {createTheme} from '@material-ui/core/styles';
import { blue,indigo } from '@mui/material/colors'

const theme = createTheme({
    palette:{
        primary:{
            main: indigo[900]
        },
        secondary:{
            main: indigo[50]
        }
    }
});


export default theme;

  