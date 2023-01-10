import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
const currencies = [
  
    {
        value: 'A',
        label: 'A',
    },
    {
        value: 'B',
        label: 'B',
    },
    {
        value: 'C',
        label: 'C',
    }
];

export default function Form() {
    const [client,setclient]=useState('');
    const [commen, setcommen] = useState('');
    const [comp, setcomp] = useState('');
    const [rfq, setrfq] = useState('');
    const printing=()=>{
        console.log(client);
        console.log(commen);
        console.log(comp);
        console.log(rfq);
    }
    return (
        <Box
            sx={{
                width: 400,
                maxWidth: '100%',
            }}
        >
            <label>Client</label>
            <TextField
                fullWidth
                id="outlined-select-currency"
                select
                
                style={{margin:"10px 0px"}}
                onChange={(e)=>{setclient(e.target.value)}}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <label>Date of Commencement</label>
            <TextField style={{ margin: "10px 0px" }} type="date" fullWidth id="fullWidth" onChange={(e) => { setcommen(e.target.value) }} />
            <label>Date of Completion</label>
            <TextField style={{ margin: "10px 0px" }} type="date" fullWidth id="fullWidth" onChange={(e) => { setcomp(e.target.value) }} />
            <label>RFQ Code</label>
            <TextField style={{ margin: "10px 0px" }} fullWidth id="fullWidth" onChange={(e) => { setrfq(e.target.value) }} />
            <Button style={{position:'absolute',bottom:'30px',right:'10%'}} variant="contained" onClick={()=>{printing()}}>Done</Button>

        </Box>
    );
}