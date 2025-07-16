import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import File from '../Image/file.png';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'TypeCollateral', label: 'ประเภทหลักประกัน', minWidth: 130 },
    { id: 'Number', label: 'เลขที่กฎหมาย', minWidth: 130 },
    { id: 'Mortgage', label: 'ทรัพย์จำนอง/นอกจำนอง', minWidth: 130 },
    { id: 'DateSeize', label: 'วันที่ทำการยึด', minWidth: 110 },
    { id: 'Detail', label: 'รายละเอียดทรัพย์', minWidth: 120 },
    { id: 'Status', label: 'สถานะรายการ', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 130 },

];

const rows = [
    {
        id: 1,
        TypeCollateral: 'ที่ดิน/ที่ดินพร้อมสิ่งปลูกสร้าง',
        Number: 'xxxxxxxxxxxxx',
        Mortgage: 'นอกจำนอง',
        DateSeize: 'วันที่ทำการยึด',
        Detail: 'รายละเอียดทรัพย์',
        Status: 'สถานะรายการ',
        Data: 'Button',
    },

];

export default function TBInProAnAuction() {
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
                                <TableCell>{row.Number}</TableCell>
                                <TableCell>{row.Mortgage}</TableCell>
                                <TableCell>{row.DateSeize}</TableCell>
                                <TableCell>{row.Detail}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Data === 'Button' && (
                                    <Link to="/page/DetailAuction" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Button sx={{ background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', color: 'white' }}>
                                            <img src={File} style={{ width: '15px' }} alt="file" />ดูรายละเอียด</Button>

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
