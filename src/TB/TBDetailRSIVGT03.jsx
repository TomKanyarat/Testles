import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography } from '@mui/material';

const columns = [
    { id: 'checkbox', label: '', minWidth: 50 }, // ช่อง Checkbox ไม่ต้องมี label
    { id: 'id', label: 'ลำดับ', minWidth: 130 },
    { id: 'DateAssignment', label: 'วันที่มอบหมายสืบทรัพย์', minWidth: 130 },
    { id: 'DateInvestigation', label: 'วันที่สืบทรัพย์เสร็จสิ้น', minWidth: 130 },
    { id: 'Note', label: 'หมายเหตุ', minWidth: 110 },
];

const rowsData = []; // กำหนดเป็นอาเรย์ว่างเพื่อทดสอบการแสดงข้อความ "ไม่มีข้อมูลในตาราง"

export default function TBDetailRSIVGT03() {
    const [rows, setRows] = React.useState(rowsData);
    const [selectAll, setSelectAll] = React.useState(false);

    const handleSelectAll = (checked) => {
        setSelectAll(checked);
        setRows(rows.map((row) => ({ ...row, selected: checked }))); // อัปเดตทุกแถว
    };

    const handleRowSelect = (id, checked) => {
        setRows(
            rows.map((row) =>
                row.id === id ? { ...row, selected: checked } : row // อัปเดตเฉพาะแถวที่เลือก
            )
        );
    };

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
                            {rows.length > 0 && ( // แสดง Checkbox เฉพาะเมื่อมีข้อมูล
                                <TableCell
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                    }}>
                                    <Checkbox
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                        color="primary"
                                        checked={selectAll}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                    />
                                </TableCell>
                            )}
                            {columns.slice(rows.length > 0 ? 1 : 0).map((column) => ( // ถ้าไม่มีข้อมูลไม่ต้องขยับ Index
                                <TableCell
                                    key={column.id}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                    }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length === 0 ? ( // ตรวจสอบว่า rows ว่างหรือไม่
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center">
                                    <Typography variant="body1" color="textSecondary">
                                        ไม่มีข้อมูล
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Checkbox
                                            color="primary"
                                            checked={row.selected}
                                            onChange={(e) =>
                                                handleRowSelect(row.id, e.target.checked)
                                            }
                                        />
                                    </TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.DateAssignment}</TableCell>
                                    <TableCell>{row.DateInvestigation}</TableCell>
                                    <TableCell>{row.Note}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
