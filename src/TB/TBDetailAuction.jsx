import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import File from '../Image/file.png';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'DateAuction', label: 'วันที่ชะลอ', minWidth: 130 },
    { id: 'Reason', label: 'เหตุผลในการชะลอ', minWidth: 130 },
    { id: 'DateCancel', label: 'วันที่ยกเลิก', minWidth: 130 },
    { id: 'Note', label: 'หมายเหตุ', minWidth: 110 },
    { id: 'Status', label: 'สถานะรายการ', minWidth: 120 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 130 },

];

const rows = [
    {
        id: 1,
        DateAuction: '2563000000044',
        Reason: '1180600009561',
        DateCancel: 'นางสาวPPP',
        Note: 'ผบ5455/2563 ',
        Status: 'ผบ4330/2563 ',
        Data: 'Button',
    },


];

export default function TBDetailAuction() {
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
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow key={row.id} sx={{
                                '& td': {
                                    textAlign: 'center',
                                },
                            }}>
                                <TableCell >{row.id}</TableCell>
                                <TableCell >{row.DateAuction}</TableCell>
                                <TableCell>{row.Reason}</TableCell>
                                <TableCell>{row.DateCancel}</TableCell>
                                <TableCell>{row.Note}</TableCell>
                                <TableCell >{row.Status}</TableCell>
                                <TableCell >{row.Data === 'Button' && (
                                    <Link to="/page/DetailAuction" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <img src={File} style={{ width: '15px' }} alt="file" />

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
