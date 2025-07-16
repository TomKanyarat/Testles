import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

const columns = [
    { id: 'checkbox', label: '', minWidth: 50 }, // ช่อง Checkbox ไม่ต้องมี label
    { id: 'id', label: 'ลำดับ', minWidth: 130 },
    { id: 'DateAssignment ', label: 'วันที่มอบหมายสืบทรัพย์', minWidth: 130 },
    { id: 'DateInvestigation', label: 'วันที่สืบทรัพย์เสร็จสิ้น', minWidth: 130 },
    { id: 'Note', label: 'หมายเหตุ', minWidth: 110 },
];

const rowsData = [
    {
        id: '1',
        DateAssignment: '17/01/2563',
        DateInvestigation: '31/01/2563 ',
        Note: '-',
        selected: false, // เพิ่มสถานะ selected
    },
    {
        id: '2',
        DateAssignment: '19/01/2563',
        DateInvestigation: '5/02/2563 ',
        Note: '-',
        selected: false, // เพิ่มสถานะ selected
    },
];

export default function TBDetailRSIVGT01() {
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
                            {columns.slice(1).map((column) => (
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
                        {rows.map((row) => (
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
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
