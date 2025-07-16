import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'LegalNumber', label: 'เลขที่กฎหมาย', minWidth: 130 },
    { id: 'CartNo', label: 'เลขที่บัตรประชาชน', minWidth: 130 },
    { id: 'CIF', label: 'CIF No.', minWidth: 130 },
    { id: 'Name', label: 'ชื่อ-นามสกุล', minWidth: 110 },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', minWidth: 120 },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 130 },
];

const rows = [
    {
        id: 1,
        LegalNumber: '2563000000019',
        CartNo: '31017018*****',
        CIF: '00000024*****',
        Name: 'นางสาวJJJ',
        BlackNumber: 'ผบ0020/2563',
        RedNumber: '111',
        Data: 'Button',
    },

];

export default function TBDetailResultsFirst() {
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
                                        // textAlign: column.align || 'center',
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
                                <TableCell>{row.id}</TableCell>
                                <TableCell >{row.LegalNumber}</TableCell>
                                <TableCell>{row.CartNo}</TableCell>
                                <TableCell>{row.CIF}</TableCell>
                                <TableCell>{row.Name}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{color: 'red'}}>{row.RedNumber}</TableCell>
                                <TableCell>{row.Data === 'Button' && (
                                    <Link to="/page/DetailResultFirst" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <EditIcon/>
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
