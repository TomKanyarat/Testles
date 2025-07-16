import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import File from '../Image/file.png';
// import Grid from '@mui/material/Grid'
const columns = [
    { id: 'id', label: 'ลำดับที่', minWidth: 70 },
    { id: 'Day_filed', label: 'วันที่ยื่นฟ้อง', minWidth: 150 },
    { id: 'Black_number', label: 'คดีหมายเลขดำ', minWidth: 170 },
    { id: 'Court', label: 'ศาล', minWidth: 170 },
    { id: 'Day_contract', label: 'วันที่ทำสัญญา', minWidth: 150 },
    { id: 'Status', label: 'สถานะรายการ', minWidth: 170, align: 'center' },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
    { id: 'Time', label: 'Time Stamp', minWidth: 170, align: 'center' },
];

const rows = [
    {
        id: 1,
        Day_filed: '13/01/2563',
        Black_number: 'ผบ4564/2563',
        Court: 'ศาลแห่งกรุงเทพใต้',
        Day_contract: '13/01/2563',
        Status: 'อยู่ระหว่างรอพิจารณาของศาล',
        Data: 'ไอคอน',
        Time: new Date().toLocaleString(), // เพิ่ม timestamp
    }
];

export default function TabelCompromise() {
    return (


        <Paper>
            <TableContainer sx={{
                overflowX: 'auto',
                '& td, & th': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                },
            }}>
                <Table stickyHeader aria-label="sticky table"
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
                                        minWidth: column.minWidth,
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
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
                        {rows.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.Day_filed}</TableCell>
                                    <TableCell>{row.Black_number}</TableCell>
                                    <TableCell>{row.Court}</TableCell>
                                    <TableCell>{row.Day_contract}</TableCell>
                                    <TableCell>{row.Status}</TableCell>
                                    <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* แสดงเฉพาะไอคอน Edit */}
                                        {row.Data === 'ไอคอน' && (
                                            <Link to="/page/DetailCompromise" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Button sx={{ background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', color: 'white' }}>  <img src={File} style={{ width: '15px' }} alt="file" />ดูรายละเอียด</Button>
                                            </Link>
                                        )}
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.Time}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}
