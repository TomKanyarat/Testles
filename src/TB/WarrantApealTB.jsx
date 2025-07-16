import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import File from '../Image/file.png';

const columns = [
    { id: 'id', label: 'ลำดับ', },
    { id: 'Legal_number', label: 'เลขที่กฎหมาย', },
    { id: 'Cardid', label: 'เลขที่บัตรประชาชน', },
    { id: 'name', label: 'ชื่อ-นามสกุล', },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', },
    { id: 'Court', label: 'ศาล', },
    { id: 'CourtOfFirst ', label: 'ทุนทรัพย์ศาลชั้นต้น', align: 'center' },
    { id: 'DayFirst', label: 'รายละเอียด', align: 'center' },
];

const rows = [
    {
        id: 1,
        Legal_number: '2563000000044',
        Cardid: '1180600009561',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        CourtOfFirst: '21,222.42',
        TakingAction: 'Button',
    }
];

export default function WarrantApealTB() {
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
                    }}
                >
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
                                        // width: column.minWidth || 'auto',
                                        textAlign: column.align || 'center',
                                        '@media (max-width: 600px)': {
                                            fontSize: '12px',
                                        },

                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell>
                                <TableCell >{row.Legal_number}</TableCell>
                                <TableCell>{row.Cardid}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ color: 'red' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.CourtOfFirst}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.TakingAction === 'Button' && (
                                    <Link to="/page/FromWarrantApeal" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Button sx={{ color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)' }}>
                                            <img src={File} style={{ width: '15px' }} alt="file" /> ดูรายละเอียด
                                        </Button>
                                    </Link>

                                )}</TableCell>


                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
