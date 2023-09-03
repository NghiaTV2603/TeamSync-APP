import { Stack, useTheme } from '@mui/material';
import { tokens, ColorPalette } from '../../app/theme';
import ColumnServer from './components/ColumnServer';
import ColumnChannel from './components/ColumnChannel';
import AppBarStyle from './components/AppBar';
import ContentHome from './components/ContentHome';

function Home(): JSX.Element {
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   return (
      <Stack height="100vh" flexDirection="row">
         <Stack width={70} bgcolor={colors.grey[850]}>
            <ColumnServer />
         </Stack>
         <Stack width={250} bgcolor={colors.grey[800]}>
            <ColumnChannel />
         </Stack>
         <Stack flexGrow={1} direction="column" bgcolor={colors.grey[750]}>
            <AppBarStyle />
            <ContentHome />
         </Stack>
      </Stack>
   );
}

export default Home;
