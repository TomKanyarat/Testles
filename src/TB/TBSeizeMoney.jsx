import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    // { id: 'id', label: 'ลำดับ',  },
    { id: 'Datecomplaint', label: 'วันที่ฟ้อง', },
    { id: 'DateJudgment', label: 'วันที่พิพากษา', },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', },
    { id: 'Court', label: 'ศาล', },
    { id: 'Date', label: 'วันที่เริ่ม อายัดทรัพย์/อายัดทรัพย์', },
    { id: 'Status', label: 'สถานะรายการ', },
    { id: 'DataSeize ', label: 'จัดการข้อมูล', },
    { id: 'examine', label: 'ตรวจสอบ', },
    // { id: 'time', label: 'Tine Stamp', },
];
const rows = [
    {
        // id: '1',
        Datecomplaint: '10/11/2567',
        DateJudgment: '10/11/2567',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        DateSeize: '10/11/2563',
        Status: 'ยังไม่เสร็จสิ้น',
        Data: 'Button',
        examine: 'ไม่ผ่าน',
        // time: new Date().toLocaleString(), // เพิ่ม timestamp
    },
];
export default function TBSeizeMoney() {
    return (
        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer sx={{
                overflowX: 'auto',
                '& td, & th': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                },
            }} >
                <Table
                    stickyHeader
                    aria-label="sticky table"
                    sx={{
                        minWidth: 800, // กำหนดความกว้างขั้นต่ำของตาราง
                        width: '100%',
                        tableLayout: 'fixed',
                    }}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        textAlign: column.align || 'center',
                                    }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.Datecomplaint}>
                                {/* <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell> */}
                                <TableCell >{row.Datecomplaint}</TableCell>
                                <TableCell >{row.DateJudgment}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ color: 'red' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.DateSeize}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Status}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data === 'Button' && (
                                    <div>
                                        <Link to="/page/DetailSeizePPT" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <PreviewIcon />
                                        </Link>
                                        <Link to="/page/DetailSeizePPT" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}>
                                            <EditIcon />
                                        </Link>
                                        <Link to="/page/DetailSeizePPT" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}>
                                            <DeleteIcon />
                                        </Link>
                                    </div>
                                )}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.examine}</TableCell>
                                {/* <TableCell sx={{ textAlign: 'center' }}>{row.time}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
