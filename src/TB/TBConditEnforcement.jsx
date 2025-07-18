import React, { useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { id: 'Condit', label: 'ความถี่ในการดึงข้อมูล', minWidth: 150, align: 'center' },
    { id: 'type', label: 'ประเภทการดึงข้อมูล', minWidth: 150, align: 'center' },
    { id: 'Year', label: 'รุ่นปีบังคับคดี', minWidth: 150, align: 'center' },
    { id: 'Time', label: 'ครั้งที่', minWidth: 150, align: 'center' },
    { id: 'Number', label: 'เลขที่การอนุมัติด้วยเกณฑ์เงื่อนไข', minWidth: 150, align: 'center' },
    { id: 'NameYear', label: 'ชื่อรุ่นบังคับคดี', minWidth: 150, align: 'center' },
    { id: 'Name', label: 'ผู้ทำรายการ', minWidth: 150, align: 'center' },
    { id: 'Data', label: 'รายละเอียดข้อมูล', minWidth: 150, align: 'center' },

];

const initialRows = [
    {
        Condit: 'ทุกวัน',
        type: 'ดึงข้อมูลเพื่อวิเคราะห์',
        Year: '2566',
        Time: '3',
        Number: '-',
        NameYear: 'บังคับคดีปี 2557',
        Name: 'นางสาว AAA',
        Data: 'button',

    },
    {
        Condit: 'ทุกวัน',
        type: 'ดึงข้อมูลเพื่อวิเคราะห์',
        Year: '2556',
        Time: '2',
        Number: '-',
        NameYear: 'บังคับคดีปี 2554',
        Name: 'นางสาว AAA',
        Data: 'button',
    },
    {
        Condit: 'ทุกวัน',
        type: 'ดึงข้อมูลเพื่อวิเคราะห์',
        Year: '2555',
        Time: '1',
        Number: '-',
        NameYear: 'บังคับคดีกับผู้กู้ยืมที่ถูกดำเนินคดีในปี 2557',
        Name: 'นางสาว AAA',
        Data: 'button',
    },
    {
        Condit: 'ทุกวัน',
        type: 'ดึงข้อมูลเพื่อวิเคราะห์',
        Year: '2554',
        Time: '-',
        Number: '-',
        NameYear: 'บังคับคดีกับผู้กู้ยืมที่ถูกดำเนินคดีในปี 2555',
        Name: 'นางสาว AAA',
        Data: 'button',
    },
];

export default function TBConditEnforcement() {
    const [rows, setRows] = useState(initialRows.map(row => ({ ...row, selected: false })));
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = (event) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        setRows(rows.map(row => ({ ...row, selected: checked })));
    };

    const handleRowSelect = (id, event) => {
        const checked = event.target.checked;
        const updated = rows.map(row =>
            row.id === id ? { ...row, selected: checked } : row
        );
        setRows(updated);
        setSelectAll(updated.every(r => r.selected));
    };

    return (
        <Paper sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <TableContainer sx={{
                overflowX: 'auto',
                '& td, & th': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                },
            }}>
                <Table stickyHeader sx={{ minWidth: 800, tableLayout: 'fixed', border: '1px solid #ddd' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor: '#1530A8',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    width: '50px'
                                }}
                            >
                                <Checkbox
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                    sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                                />
                            </TableCell>
                            {columns.map(col => (
                                <TableCell
                                    key={col.id}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        minWidth: col.minWidth
                                    }}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.id} sx={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5' }}>
                                <TableCell>
                                    <Checkbox
                                        checked={row.selected}
                                        onChange={(e) => handleRowSelect(row.id, e)}
                                    />
                                </TableCell>
                                {columns.map((col) => {
                                    return (
                                        <TableCell key={col.id}>
                                            {col.id === 'Data' && row[col.id] === 'button' ? (
                                                <Link to="/page/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <EditIcon />
                                                </Link>
                                            ) : (
                                                <div>
                                                    {row[col.id] || 'center'}
                                                </div>
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                        {rows.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={columns.length + 1} >
                                    ไม่พบข้อมูล
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
