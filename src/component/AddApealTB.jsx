import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { id: 'id', label: 'ลำดับ' },
    { id: 'Type_money', label: 'ประเภทค่าใช้จ่าย/ค่าธรรมเนียม' },
    { id: 'ReceiptIn', label: 'ใบเสร็จเล่มที่', },
    { id: 'ReceiptNumber', label: 'ใบเสร็จเลขที่', },
    { id: 'Money', label: 'จำนวนเงิน', },
    { id: 'Data', label: 'จัดการข้อมูล', align: 'center' },
];

const rows = [
    {
        id: 1,
        Type_money: 'ใบเสร็จรับเงินค่าธรรมเนียมต้นฉบับ',
        ReceiptIn: '66',
        ReceiptNumber: '88',
        Money: '2,300.00',
        Data: 'ไอคอน',
    }
];

export default function AddApealTB() {
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
                        borderWidth: 1,
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        minWidth: column.minWidth,
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                       
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
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.Type_money}</TableCell>
                                <TableCell >{row.ReceiptIn}</TableCell>
                                <TableCell>{row.ReceiptNumber}</TableCell>
                                <TableCell>{row.Money}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data === 'ไอคอน' && (
                                    <div>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <EditIcon sx={{ cursor: 'pointer' }} /> {/* ใช้ cursor: 'pointer' เพื่อเพิ่มเอฟเฟกต์คลิก */}
                                        </Link>
                                        <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '15px' }}>
                                            <DeleteIcon sx={{ cursor: 'pointer' }} /> {/* ใช้ cursor: 'pointer' เพื่อเพิ่มเอฟเฟกต์คลิก */}
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
