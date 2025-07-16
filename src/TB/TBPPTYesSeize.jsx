import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography, Grid, Divider, Button, } from '@mui/material';
import { Link } from 'react-router-dom';
import File from '../Image/file.png';
// คอลัมน์ของตาราง
const columns = [
    { id: 'checkbox', label: '', minWidth: 50 },
    { id: 'id', label: 'ลำดับ', minWidth: 130 },
    { id: 'Collateraltype', label: 'ประเภทหลักประกัน', minWidth: 130 },
    { id: 'Detail', label: 'รายละเอียด', minWidth: 130 },
    { id: 'DateSeize', label: 'วันที่ทำการยึด', minWidth: 110 },
    { id: 'NameOwner', label: 'เจ้าของหลักประกัน', minWidth: 130 },
    { id: 'Mortgaged', label: 'ทรัพย์จำนอง/นอกจำนอง', minWidth: 130 },
    { id: 'Status', label: 'สถานะ', minWidth: 110 },
    { id: 'Datecancellati', label: 'วันที่ถอน/ยกเลิกการยึดทรัพย์', minWidth: 110 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 130 },
];

// ข้อมูลตัวอย่าง
const rowsData = [
    {
        id: 1,
        Collateraltype: 'ที่ดิน/ที่ดินพร้อมสิ่งปลูกสร้าง',
        Detail: 'ประเภทเอสารสิทธิ์ ไม่มีประเภทย่อย XXXXXX',
        DateSeize: '10/11/2567',
        NameOwner: 'นายLLL',
        Mortgaged: 'นอกจำนอง',
        Status: 'อยู่ระหว่างการขาย',
        Datecancellati: '10/01/2567',
        Data: 'data',
        selected: false, // เพิ่ม property selected
    },
];

export default function TBPPTYesSeize() {
    const [rows, setRows] = React.useState(rowsData);
    const [selectAll, setSelectAll] = React.useState(false);

    // ตรวจสอบว่ามีแถวที่ถูกเลือกหรือไม่
    const isAnyRowSelected = rows.some((row) => row.selected);

    // ฟังก์ชันสำหรับเลือก/ยกเลิกเลือกทั้งหมด
    const handleSelectAll = (checked) => {
        setSelectAll(checked);
        setRows(rows.map((row) => ({ ...row, selected: checked })));
    };

    // ฟังก์ชันสำหรับเลือก/ยกเลิกเลือกแถวเฉพาะ
    const handleRowSelect = (id, checked) => {
        setRows(
            rows.map((row) =>
                row.id === id ? { ...row, selected: checked } : row
            )
        );
    };

    return (
        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
            <Typography sx={{ marginLeft: '15px', marginTop: '30px' }}>ทรัพย์ที่ยึดแล้ว</Typography>
            <Divider sx={{ borderColor: '#1530A8' }} />
            <Link to={isAnyRowSelected ? "/page/WithdrawSeizePPT" : "#"}> {/* ป้องกันการคลิกถ้าไม่มีการเลือก */}
                <Button
                    disabled={!isAnyRowSelected} // ปุ่มคลิกไม่ได้ถ้าไม่มีการเลือก
                    sx={{
                        backgroundColor: isAnyRowSelected ? '#1530A8' : '#efefef',
                        color: isAnyRowSelected ? 'white' : 'gray',
                        marginTop: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: isAnyRowSelected ? '#102583' : '#efefef',
                        },
                    }} >
                    ถอนการยึดทรัพย์
                </Button>
            </Link>
            <Paper sx={{ marginTop: '15px' }}>
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table
                        stickyHeader
                        aria-label="sticky table"
                        sx={{
                            minWidth: 800,
                            width: '100%',
                            // tableLayout: 'fixed',
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                {rows.length > 0 && (
                                    <TableCell
                                        sx={{
                                            backgroundColor: '#1530A8',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '14px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Checkbox
                                            sx={{
                                                color: 'white',
                                                '&.Mui-checked': { color: 'white' },
                                            }}
                                            color="primary"
                                            checked={selectAll}
                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                        />
                                    </TableCell>
                                )}
                                {columns.slice(rows.length > 0 ? 1 : 0).map((column) => (
                                    <TableCell
                                        key={column.id}
                                        sx={{
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
                            {rows.length === 0 ? (
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
                                                }/>
                                        </TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.Collateraltype}</TableCell>
                                        <TableCell>{row.Detail}</TableCell>
                                        <TableCell>{row.DateSeize}</TableCell>
                                        <TableCell>{row.NameOwner}</TableCell>
                                        <TableCell>{row.Mortgaged}</TableCell>
                                        <TableCell>{row.Status}</TableCell>
                                        <TableCell>{row.Datecancellati}</TableCell>
                                        <TableCell>{row.Data === 'data' && (
                                            <Link to="/page/DetailSeizePPT" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '5px' }}>
                                                <Button sx={{ color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)' }}>
                                                    <img src={File} style={{ width: '15px' }} alt="file" /> ดูรายละเอียด
                                                </Button>
                                            </Link>

                                        )}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>
    );
}
