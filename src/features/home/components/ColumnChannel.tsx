import React from 'react';
import { Stack, useTheme } from '@mui/material';
import { tokens } from '../../../app/theme';
import TagNameServer from './TagNameServer';
import SourceListChannel from './SourceListChannel';
import OptionUser from './OptionUser';

function ColumnChannel() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Stack direction="column" height="100vh">
         <TagNameServer />
         <Stack flexGrow={1}>
            <SourceListChannel />
         </Stack>
         <OptionUser />
      </Stack>
   );
}

export default ColumnChannel;
