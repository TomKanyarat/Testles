import React, { useState } from 'react';
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { id: 'id', label: 'เกณฑ์เงื่อนไจลูกหนี้ดำเนินคดีปี พ.ศ. ', minWidth: 0, TextAlign: 'center' },
    { id: 'Frequency', label: 'เลขที่หนังสือการอนุมัติด้วยเกณฑ์เงื่อนไข', minWidth: 150, align: 'center' },
    { id: 'Condit', label: 'ความถี่ในการดึงข้อมูล', minWidth: 150, align: 'center' },
    { id: 'Name', label: 'ผู้บันทึก', minWidth: 150, align: 'center' },
    { id: 'Date', label: 'วัน/เดือน/ปี ล่าสุด', minWidth: 150, align: 'center' },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 150, align: 'center' },

];

const initialRows = [
    {
        id: 2563,
        Frequency: 'รายปี (ทุกวันที่ 15 กรกฎาคม)',
        Condit: 'ผิดนัดชำระ 365 วัน',
        Status: 'ขอผ่อนผัน - ไม่มีรายได้-รายได้ไม่เกิน 8,008 บาทต่อเดือน-รายได้ถดถอย-ประสบภัยพิบัติ-ไม่มีรายได้-ดูแลบุคคลในครอบครัว-ปรับปรุงโครงสร้างหนี้',
        Name: 'AAA',
        Date: '26/03/2564',
        Data: 'Button',

    },
    {
        id: 2564,
        Frequency: 'รายเดือน (ทุกวันที่ 25)',
        Condit: 'ผิดนัดชำระ 1 วัน',
        Status: 'ขอผ่อนผัน-ไม่มีรายได้-รายได้ไม่เกิน 8,008 บาทต่อเดือน-รายได้ถดถอย-ประสบภัยพิบัติ-ไม่มีรายได้-ดูแลบุคคลในครอบครัว-ปรับปรุงโครงสร้างหนี้-ขอระงับการเรียกให้ชำระหนี้-ทุพพลภาพ-โรคติดต่อร้ายแรง-โรคเรื้อรัง-จำคุกตลอดชีวิต-ล้มละลาย',
        Name: 'BBB',
        Date: '24/02/2565',
        Data: 'Button',
    },
    {
        id: 2565,
        Frequency: 'รายเดือน (ทุกวันที่ 25)',
        Condit: 'ผิดนัดชำระ 1 วัน',
        Status: 'ขอผ่อนผัน-ไม่มีรายได้-รายได้ไม่เกิน 8,008 บาทต่อเดือน-รายได้ถดถอย-ประสบภัยพิบัติ-ไม่มีรายได้-ดูแลบุคคลในครอบครัว-ปรับปรุงโครงสร้างหนี้-ขอระงับการเรียกให้ชำระหนี้-ทุพพลภาพ-โรคติดต่อร้ายแรง-โรคเรื้อรัง-จำคุกตลอดชีวิต-ล้มละลาย',
        Name: 'BBB',
        Date: '11/03/25666',
        Data: 'Button',
    },
    {
        id: 2566,
        Frequency: 'รายเดือน (ทุกวันที่ 25)',
        Condit: 'ผิดนัดชำระ 1 วัน',
        Status: 'ขอผ่อนผัน-ไม่มีรายได้-รายได้ไม่เกิน 8,008 บาทต่อเดือน-รายได้ถดถอย-ประสบภัยพิบัติ-ไม่มีรายได้-ดูแลบุคคลในครอบครัว-ปรับปรุงโครงสร้างหนี้-ขอระงับการเรียกให้ชำระหนี้-ทุพพลภาพ-โรคติดต่อร้ายแรง-โรคเรื้อรัง-จำคุกตลอดชีวิต-ล้มละลาย',
        Name: 'BBB',
        Date: '28/06/25666',
        Data: 'Button',
    },
];

export default function TBConditCancel() {
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
                                            {col.id === 'Data' && row[col.id] === 'Button' ? (
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
