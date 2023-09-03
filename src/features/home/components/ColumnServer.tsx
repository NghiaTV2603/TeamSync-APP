import React from 'react';
import { Avatar, colors, Divider, Stack, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector } from '../../../hooks/useRedux';
import { Server } from '../serverSlice';
import useCreateServerModal from '../../../hooks/modal/useCreateServerModal';

function ColumnServer(): JSX.Element {
   const servers: Server[] = useAppSelector((state) => state.server);
   const { modal, handleOpen } = useCreateServerModal();
   return (
      <Stack py={1} spacing={1} direction="column" alignItems="center">
         {servers.map((s) => (
            <React.Fragment key={s.id}>
               <Tooltip title={s.name} arrow placement="right">
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
                     src={s.background}
                  />
               </Tooltip>
               <Divider sx={{ width: '50%', borderBottomWidth: 2 }} />
            </React.Fragment>
         ))}
         <Tooltip title="Add a Server" arrow placement="right">
            <Avatar
               sx={{
                  height: 45,
                  width: 45,
                  borderRadius: 10,
                  cursor: 'pointer',
                  '&:hover': {
                     borderRadius: 4,
                     backgroundColor: colors.green[500],
                     color: colors.grey[100],
                  },
               }}
               variant="rounded"
               onClick={handleOpen}
            >
               <AddIcon fontSize="large" />
            </Avatar>
         </Tooltip>
         {modal}
      </Stack>
   );
}

export default ColumnServer;
