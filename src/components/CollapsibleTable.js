import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import Insidetable from './Insidetable';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function createData(Packages, Rate, Total) {
    return {
        Packages,
        Rate,
        Total,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row" style={{width:20}}>
                    <Checkbox />
                </TableCell>
                {/* <TableCell align="right">{row.calories}</TableCell> */}
                <TableCell style={{ width: 300 }} align="left">{row.Packages}</TableCell>
                <TableCell align="left">{row.Rate}</TableCell>
                <TableCell align="left">{row.Total}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <RemoveIcon /> : <AddIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{
                    paddingBottom: 0, paddingTop: 0, paddingLeft:"30px"}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Insidetable/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Civil 1', 567.80, '₹ 2986792'),
    createData('Civil 2', 567.80, '₹ 2986792'),
    createData('Civil 3', 567.80, '₹ 2986792'),
    createData('Civil 4', 567.80, '₹ 2986792'),
    createData('Civil 5', 567.80, '₹ 2986792'),
    createData('Civil 6', 567.80, '₹ 2986792'),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{marginRight:'0px!important',width:20}}><Checkbox/></TableCell>
                        <TableCell style={{width:300}} align="left">Packages&nbsp;</TableCell>
                        <TableCell align="left">Rate&nbsp;(in sqft)</TableCell>
                        <TableCell align="left">Total&nbsp;</TableCell> 
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}