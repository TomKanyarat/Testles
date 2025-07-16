import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import File from '../Image/file.png';
const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'TypePayment', label: 'ประเภทค่าใช้จ่าย / ค่าธรรมเนียม', minWidth: 130 },
    { id: 'ReceiptNumber', label: 'ใบเสร็จเล่มที่', minWidth: 130 },
    { id: 'ReceiptNo', label: 'ใบเสร็จเลขที่', minWidth: 130 },
    { id: 'Money', label: 'จำนวนเงิน', minWidth: 110 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 120 },
    
];

const rows = [
    {
        id: 1,
        TypePayment: 'ใบเสร็จรับเงินค่าธรรมเนียมต้นฉบับ',
        ReceiptNumber: '1111',
        ReceiptNo: '2222',
        Money: '3,500.00 ',
        Data: 'Button ',
        
    },
    

];

export default function TBDocFromWR() {
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
                           <TableRow key={row.id} sx={{
                                '& td': {
                                    textAlign: 'center',
                                },
                            }}>
                                {/* <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell> */}
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.TypePayment}</TableCell>
                                <TableCell>{row.ReceiptNumber}</TableCell>
                                <TableCell>{row.ReceiptNo}</TableCell>
                                <TableCell>{row.Money}</TableCell>
                                <TableCell>{row.Data === 'Button' && (
                                    <Link to="/page/DetailEditSPL" style={{ textDecoration: 'none', color: 'inherit' }}>
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
