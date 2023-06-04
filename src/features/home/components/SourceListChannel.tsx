import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Stack, useTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import TagIcon from '@mui/icons-material/Tag';
import { tokens } from '../../../app/theme';

function SourceListChannel() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Stack>
         <Accordion
            defaultExpanded
            disableGutters
            sx={{ backgroundColor: colors.grey[800] }}
         >
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
               sx={{ paddingY: 0, height: 40, paddingX: 1 }}
            >
               <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  flexGrow={1}
               >
                  <Typography fontSize={11} fontWeight={600}>
                     CHANNEL TEXT
                  </Typography>
                  <IconButton size="small">
                     <SettingsIcon fontSize="small" />
                  </IconButton>
               </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingY: 0, paddingX: 1 }}>
               <Stack
                  p={1}
                  borderRadius={3}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                     '&:hover': {
                        backgroundColor: colors.grey[600],
                     },
                     cursor: 'pointer',
                  }}
                  mb={1}
               >
                  <TagIcon />
                  <Typography>General</Typography>
               </Stack>
            </AccordionDetails>
         </Accordion>
      </Stack>
   );
}
export default SourceListChannel;
