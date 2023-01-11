import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Form from './Form';
import CloseIcon from '@mui/icons-material/Close';
export default function TemporaryDrawer(savedata) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width:400,padding:'10px 50px' }}
            role="presentation"
        >
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h3>Workorder</h3>
                <CloseIcon onClick={()=>setState(false)}/>
            </div>
            <Form />
        </Box>
    );

    return (
        <div>
            
        <React.Fragment key={'right'}>
            <Button variant="contained" size="large" onClick={toggleDrawer('right', true)}>Save</Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </React.Fragment>

        </div>
    );
}