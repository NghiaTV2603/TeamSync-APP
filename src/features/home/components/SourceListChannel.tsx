import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Stack, useTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { tokens } from '../../../app/theme';
import { TYPE_TEXT, TYPE_VOCE } from '../../../app/constants';
import { useAppSelector } from '../../../hooks/useRedux';
import { Channel } from '../channelSlice';

function SourceListChannel() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const channelList: Channel[] = useAppSelector((state) => state.channel);
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
               {channelList
                  .filter((e) => e.type === TYPE_TEXT)
                  .map((e) => (
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
                        {e.isPublish ? (
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="icon-2W8DHg"
                              aria-hidden="true"
                              role="img"
                           >
                              <path
                                 fill="currentColor"
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                              />
                           </svg>
                        ) : (
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="icon-2W8DHg"
                           >
                              <path
                                 fill="currentColor"
                                 d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"
                              />
                              <path
                                 fill="currentColor"
                                 d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"
                              />
                           </svg>
                        )}
                        <Typography>{e.name}</Typography>
                     </Stack>
                  ))}
            </AccordionDetails>
         </Accordion>
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
                     CHANNEL VOICE
                  </Typography>
                  <IconButton size="small">
                     <SettingsIcon fontSize="small" />
                  </IconButton>
               </Stack>
            </AccordionSummary>
            <AccordionDetails
               sx={{ paddingY: 0, paddingX: 1, paddingBottom: 1 }}
            >
               {channelList
                  .filter((e) => e.type === TYPE_VOCE)
                  .map((e) => (
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
                        {e.isPublish ? (
                           <svg
                              className="icon-2W8DHg"
                              aria-hidden="true"
                              role="img"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 fill="currentColor"
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                                 aria-hidden="true"
                              />
                           </svg>
                        ) : (
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              className="icon-2W8DHg"
                           >
                              <path
                                 fill="currentColor"
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z"
                              />
                              <path
                                 fill="currentColor"
                                 d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"
                              />
                           </svg>
                        )}
                        <Typography>{e.name}</Typography>
                     </Stack>
                  ))}
            </AccordionDetails>
         </Accordion>
      </Stack>
   );
}

export default SourceListChannel;
