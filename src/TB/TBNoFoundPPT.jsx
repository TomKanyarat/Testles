// import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
// import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { id: 'id', label: 'ลำดับที่', minWidth: 130 },
    { id: 'DateJudgment', label: 'ประเภทค่าใช้จ่าย/ค่าธรรมเนียม', minWidth: 130 },
    { id: 'BlackNumber', label: 'ใบเสร็จเล่มที่', minWidth: 110 },
    { id: 'RedNumber', label: 'ใบเสร็จเลขที่', minWidth: 120 },
    { id: 'money', label: 'จำนวนเงิน', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];

const rows = [
    {
        id: 1,
        DateJudgment: 'ค่าธรรมเนียมที่ส่วนราชการเรียกเก็บ',
        BlackNumber: '30',
        RedNumber: '50',
        money: '1,500.00',
        Data: 'Button',
    },

];

export default function TBNoFoundPPT() {
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
                                <TableCell sx={{ textAlign: 'center' }}>{row.DateJudgment}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.money}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data === 'Button' && (
                                    <div>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit', }}>
                                            <EditIcon />
                                        </Link>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                                            <DeleteIcon />
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
