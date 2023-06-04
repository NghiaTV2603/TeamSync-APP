import React from 'react';
import { IconButton, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import CodeIcon from '@mui/icons-material/Code';
import useColors from '../../../hooks/useColors';

function InputChat() {
   const colors = useColors();
   return (
      <Stack
         mx={2}
         mb={2}
         px={2}
         py={1}
         borderRadius={4}
         bgcolor={colors.grey[850]}
         direction="row"
         justifyContent="space-between"
      >
         <InputBase
            sx={{ flex: 1 }}
            multiline
            placeholder="Message…"
            inputProps={{ 'aria-label': 'search' }}
         />
         <Stack direction="row" colors={colors.grey[800]} alignItems="center">
            <IconButton>
               <CodeIcon />
            </IconButton>
            <IconButton>
               <SentimentSatisfiedIcon />
            </IconButton>
         </Stack>
      </Stack>
   );
}

export default InputChat;
