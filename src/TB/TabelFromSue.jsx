import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid'

const columns = [
    { id: 'name', label: 'ชื่อ-นามสุกล', minWidth: 170 },
    { id: 'Early', label: 'เงินต้น', minWidth: 170 },
    { id: 'interest', label: 'ดอกเบี้ย', minWidth: 170 },
    { id: 'InterestRate', label: 'ดอกเบี้ย อัตราร้อยละ', minWidth: 170 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];

const rows = [
    { name: 'นางสาวKOK', Early: '0.00', interest: '0.00', InterestRate: '0.00', Data: 'ไอคอน' },
];

export default function TabelFromSue() {
    return (
        <Grid container>
            <Grid
                item
                xs={10}
                sm={10}
                md={12}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                backgroundColor: '#1530A8', // กำหนดพื้นหลังหัวตารางเป็นสีน้ำเงิน
                                                color: 'white', // กำหนดข้อความในหัวตารางเป็นสีขาว
                                                fontWeight: 'bold', // เพิ่มความหนาของฟอนต์
                                                '@media (max-width: 600px)': {
                                                    fontSize: '12px', // ปรับขนาดฟอนต์ให้เล็กลงเมื่อหน้าจอขนาดเล็ก
                                                }
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    return (
                                        <TableRow key={row.name}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.Early}</TableCell>
                                            <TableCell>{row.interest}</TableCell>
                                            <TableCell>{row.InterestRate}</TableCell>
                                            <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                {/* แสดงเฉพาะไอคอน Edit */}
                                                {row.Data === 'ไอคอน' && (
                                                    <Link to="/page/EditName" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <EditIcon sx={{ cursor: 'pointer' }} /> {/* ใช้ cursor: 'pointer' เพื่อเพิ่มเอฟเฟกต์คลิก */}
                                                    </Link>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
}
