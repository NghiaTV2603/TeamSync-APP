import React from 'react';
import { Stack } from '@mui/material';
import InputChat from '../home/components/InputChat';

function Message() {
   return (
      <Stack direction="column" flexGrow={1}>
         <Stack flexGrow={1}>Content</Stack>
         <InputChat />
      </Stack>
   );
}

export default Message;
