import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:'white'}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="Black"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography style={{color:'black'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Create WorkOrder
                    </Typography>
                    <Button variant="contained" size="large">
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}