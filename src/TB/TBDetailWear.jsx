import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { id: 'Datefiled', label: 'วันที่ยื่นฟ้อง', minWidth: 130 },
    { id: 'DateJudgment', label: 'วันที่พิพากษา', minWidth: 130 },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', minWidth: 110 },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', minWidth: 120 },
    { id: 'Court', label: 'ศาล', minWidth: 130 },
    { id: 'capital', label: 'ทุนทรัพย์(บาท)', minWidth: 130 },
    { id: 'DateSubmission', label: 'วันที่ยื่นสวมสิทธิ์', minWidth: 130 },
    { id: 'Status', label: 'สถานะรายการ', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];

const rows = [
    {
        // id: 1,
        Datefiled: '10/10/2565',
        DateJudgment: '1180600009561',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        capital: 'นางสาวPPP',
        DateSubmission: '09/10/2565',
        Status: 'ดำเนินการ',
        Data: 'Button',
    },



];

export default function TBDetailWear() {
    return (

        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer sx={{ overflowX: 'auto' }}>
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
                            <TableRow key={row.Datefiled}>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Datefiled}</TableCell>
                                <TableCell >{row.DateJudgment}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ color: 'red' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                <TableCell>{row.capital}</TableCell>
                                <TableCell>{row.DateSubmission}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data === 'Button' && (
                                    <div>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit',  }}>
                                            <EditIcon/>
                                        </Link>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                                            <PreviewIcon/>
                                        </Link>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                                            <DeleteIcon/>
                                        </Link>
                                    </div>
                                )}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
