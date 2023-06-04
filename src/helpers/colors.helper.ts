import { useTheme } from '@mui/material';
import { tokens } from '../app/theme';

const colors = () => {
   const theme = useTheme();
   return tokens(theme.palette.mode);
};

export default colors;
