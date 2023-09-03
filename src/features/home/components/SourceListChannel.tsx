import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Stack, useTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import TagIcon from '@mui/icons-material/Tag';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { tokens } from '../../../app/theme';
import { TYPE_TEXT, TYPE_VOCE } from '../../../app/constants';

interface Channel {
   nameChannel: string;
   type: string;
   id: number;
}

const channelList: Array<Channel> = [
   { nameChannel: 'general', type: TYPE_TEXT, id: 1 },
   { nameChannel: 'room1', type: TYPE_TEXT, id: 2 },
   { nameChannel: 'voice1', type: TYPE_VOCE, id: 2 },
   { nameChannel: 'voice2', type: TYPE_VOCE, id: 3 },
];

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
            <AccordionDetails
               sx={{ paddingY: 0, paddingX: 1, paddingBottom: 1 }}
            >
               {channelList.map((e) => (
                  <Stack
                     key={e.id}
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
                  >
                     {e.type === TYPE_TEXT ? <TagIcon /> : <VolumeUpIcon />}
                     <Typography>{e.nameChannel}</Typography>
                  </Stack>
               ))}
            </AccordionDetails>
         </Accordion>
      </Stack>
   );
}

export default SourceListChannel;
