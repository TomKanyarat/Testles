import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import File from '../Image/file.png';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 130 },
    { id: 'DateJudgment', label: 'เลขที่กฎหมาย', minWidth: 130 },
    { id: 'Caerid', label: 'เลขที่บัตรประชาชน', minWidth: 130 },
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 130 },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', minWidth: 110 },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', minWidth: 120 },
    { id: 'Court', label: 'ศาล', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];
const rows = [
    {
        // id: 1,
        id: '1',
        DateJudgment: '1180600009561',
        Cardid: '0143248665401',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        Data: 'Button',
    },

];
export default function TBSeizePPT() {
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
                        tableLayout: 'fixed', // บังคับให้ตารางปรับขนาดอัตโนมัติ
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
                                        '@media (max-width: 600px)': {
                                            fontSize: '12px',
                                        },
                                    }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell>
                                <TableCell >{row.DateJudgment}</TableCell>
                                <TableCell>{row.Cardid}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ color: 'red' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data}</TableCell>
                                {/* === 'Button' && (
                                    <Link to="/page/FromSeizePPT" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Button sx={{ color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)' }}>
                                            <img src={File} style={{ width: '15px' }} alt="file" /> ดูรายละเอียด
                                        </Button>
                                    </Link>

                                )} */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
