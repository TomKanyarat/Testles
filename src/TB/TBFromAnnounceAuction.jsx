import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import File from '../Image/file.png';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'TypeCollateral', label: 'ประเภทหลักประกัน', minWidth: 130 },
    { id: 'Mortgage', label: 'ทรัพย์จำนอง/นอกจำนอง', minWidth: 130 },
    { id: 'DateSeize', label: 'วันที่ทำการยึด', minWidth: 110 },
    { id: 'Detail', label: 'รายละเอียดทรัพย์', minWidth: 120 },

];

const rows = [
    {
        id: 1,
        TypeCollateral: 'ที่ดิน/ที่ดินพร้อมสิ่งปลูกสร้าง',
        Mortgage: 'นอกจำนอง',
        DateSeize: '01/07/2567',
        Detail: 'ประเภทเอกสารสิทธิ์ ไม่มีประเภทย่อย xx xxxxx',
    },

];

export default function TBFromAnnounceAuction() {
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
                        tableLayout: 'fixed', // บังคับให้ตารางปรับขนาดอัตโนมัติ
                    }}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        textAlign: column.align || 'center',
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
                            <TableRow key={row.id}>
                                <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell>
                                <TableCell >{row.TypeCollateral}</TableCell>
                                <TableCell>{row.Mortgage}</TableCell>
                                <TableCell>{row.DateSeize}</TableCell>
                                <TableCell>{row.Detail}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
