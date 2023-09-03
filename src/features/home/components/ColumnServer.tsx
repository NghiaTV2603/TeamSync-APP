import { Avatar, Divider, Stack, Tooltip } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';

function ColumnServer(): JSX.Element {
   return (
      <Stack py={1} spacing={1} direction="column" alignItems="center">
         <Tooltip title="Direct Messages" arrow placement="right">
            <Avatar
               sx={{
                  height: 45,
                  width: 45,
                  borderRadius: 22,
                  cursor: 'pointer',
                  '&:hover': {
                     borderRadius: 4,
                  },
               }}
               variant="rounded"
            >
               <FitbitIcon fontSize="large" />
            </Avatar>
         </Tooltip>
         <Divider sx={{ width: '50%', borderBottomWidth: 2 }} />
         <Avatar
            sx={{
               height: 45,
               width: 45,
               borderRadius: 10,
               cursor: 'pointer',
               '&:hover': {
                  borderRadius: 4,
               },
            }}
            variant="rounded"
         >
            <FitbitIcon fontSize="large" />
         </Avatar>
      </Stack>
   );
}

export default ColumnServer;
