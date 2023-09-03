import { Stack } from '@mui/material';
import InputChat from './components/InputChat';

function Message() {
   return (
      <Stack direction="column" flexGrow={1}>
         <Stack flexGrow={1}>Content</Stack>
         <InputChat />
      </Stack>
   );
}

export default Message;
