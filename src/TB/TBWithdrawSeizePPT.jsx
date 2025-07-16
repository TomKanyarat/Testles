import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Typography } from '@mui/material';

const columns = [
    { id: 'id', label: 'ลำดับ', },
    { id: 'Collateraltype', label: 'ประเภทหลักประกัน', },
    { id: 'Detail', label: 'รายละเอียดทรัพย์', },
    { id: 'DateSeize', label: 'วันที่ทำการยึด', },
    { id: 'Price', label: 'ราคาประเมิน', },
    { id: '', label: 'เจ้าของหลักประกัน', },
    { id: 'Mortgaged', label: 'ทรัพย์จำนอง/นอกจำนอง', },
    { id: 'Status', label: 'สถานะ', },
    { id: 'Datecancellati', label: 'วันที่ถอน/ยกเลิกการยึดทรัพย์', },
    { id: 'Data', label: 'จัดการข้อมูล', },
];

const rowsData = [
    {
        id: 1,
        Collateraltype: 'ที่ดิน/ที่ดินพร้อมสิ่งปลูกสร้าง',
        Detail: 'ประเภทเอกสารสิทธิ์ ไม่มีประเภทย่อย XXXXXX',
        DateSeize: '10/11/2567',
        Price: '5,000,000.00',
        NameOwner: 'นายLLL',
        Mortgaged: 'นอกจำนอง',
        Status: 'อยู่ระหว่างขาย',
        Datecancellati: '10/11/2567',
        Data: 'data',
    }

]; // กำหนดเป็นอาเรย์ว่างเพื่อทดสอบการแสดงข้อความ "ไม่มีข้อมูลในตาราง"

export default function TBPPTNoSeize() {
    const [rows] = React.useState(rowsData);

    return (
        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer sx={{ overflowX: 'auto' }}>
                <Table
                    stickyHeader
                    aria-label="sticky table"
                    sx={{
                        minWidth: 800, // กำหนดความกว้างขั้นต่ำของตาราง
                        width: '100%',
                        // tableLayout: 'fixed', // บังคับให้ตารางปรับขนาดอัตโนมัติ
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
                                    }}
                                >
                                    {/* คอลัมน์ Checkbox */}
                                </TableCell>
                            )}
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        textAlign: column.id === 'checkbox' ? 'center' : 'left', // จัดตำแหน่ง
                                    }}
                                >
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
                                        <Checkbox color="primary" />
                                    </TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.Collateraltype}</TableCell>
                                    <TableCell>{row.Detail}</TableCell>
                                    <TableCell>{row.DateSeize}</TableCell>
                                    <TableCell>{row.Price}</TableCell>
                                    <TableCell>{row.NameOwner}</TableCell>
                                    <TableCell>{row.Mortgaged}</TableCell>
                                    <TableCell>{row.Status}</TableCell>
                                    <TableCell>{row.Datecancellati}</TableCell>
                                    <TableCell>{row.Data}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
