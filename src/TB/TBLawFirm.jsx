import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import File from '../Image/file.png';
const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'code', label: 'รหัส', minWidth: 130 },
    { id: 'lawfirm', label: 'สำนักงานทนายความ', minWidth: 130 },
    { id: 'typelaw', label: 'ประเภทสำนักงานทนายความ', minWidth: 130 },
    { id: 'status', label: 'สถานะรายการ', minWidth: 110 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];

const rows = [
    {
        id: 1,
        code: '2563000000044',
        lawfirm: '1180600009561',
        typelaw: 'นางสาวPPP',
        status: 'เสร็จสิ้น',
        Data: 'Button',
    },
    {
        id: 2,
        code: '2563000000044',
        lawfirm: '1180600009561',
        typelaw: 'นางสาวPPP',
        status: 'ยังไม่เสร็จสิ้น',
        Data: 'Button',
    },

];

export default function TBLawFirm() {
    return (

        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer sx={{
                overflowX: 'auto',
                '& td, & th': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                    // textAlign: 'center',
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
                                    // align={column.align}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        // textAlign: column.align || 'center',
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
                            <TableRow key={row.Legal_number}>
                                <TableCell >{row.id}</TableCell>
                                <TableCell >{row.code}</TableCell>
                                <TableCell>{row.lawfirm}</TableCell>
                                <TableCell>{row.typelaw}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell >{row.Data === 'Button' && (
                                    <Link to="/page/FromLawFirm" style={{ textDecoration: 'none', color: 'inherit' }}>
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
