import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const columns = [
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 60 },
    { id: 'Cardid', label: 'เลขที่บัตรประชาชน', minWidth: 150 },
    { id: 'Early', label: 'เงินต้น', minWidth: 170 },
    { id: 'Interest', label: 'ดอกเบี้ย', minWidth: 170 },
    { id: 'InterestRate', label: 'ดอกเบี้ย อัตราร้อยละ', minWidth: 150 },
    { id: 'fine', label: 'เบี้ยปรับ', minWidth: 170, align: 'center' },
];

const rows = [
    {
        name: 'นางสาว KOK',
        Cardid: '3101701880061',
        Early: '144,000.00',
        Interest: '0.00',
        InterestRate: '0.00',
        Fine: '0.00',
    }
];

export default function TabelFromCompro() {
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
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.Cardid}</TableCell>
                                <TableCell >{row.Early}</TableCell>
                                <TableCell>{row.Interest}</TableCell>
                                <TableCell>{row.InterestRate}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Fine}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
