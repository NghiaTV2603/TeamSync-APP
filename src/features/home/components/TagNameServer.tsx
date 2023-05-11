import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import { tokens } from '../../../app/theme';

function TagNameServer() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <>
         <Stack
            height={50}
            px={1.5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
               cursor: 'pointer',
               '&:hover': {
                  backgroundColor: colors.grey[750],
               },
            }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            <Typography fontSize={16} fontWeight={600}>
               Name Server
            </Typography>
            {open ? <ClearIcon /> : <KeyboardArrowDownIcon />}
         </Stack>
         <Menu
            id="fade-menu"
            MenuListProps={{
               'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{
               marginLeft: 2,
               marginTop: 1,
               '& .MuiPaper-root': {
                  backgroundColor: '#000000',
               },
            }}
         >
            <MenuItem sx={{ width: 210 }} onClick={handleClose}>
               Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
         </Menu>
      </>
   );
}
export default TagNameServer;
