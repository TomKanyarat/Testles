import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
// import File from '../Image/file.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 130 },
    { id: 'DateJudgment', label: 'เลขที่กฎหมาย', minWidth: 130 },
    { id: 'Caerid', label: 'เลขที่บัตรประชาชน', minWidth: 130 },
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 130 },
    { id: 'LoanNumber', label: 'เลขที่บัญชีเงินกู้', minWidth: 110 },
    { id: 'AccountType', label: 'ประเภทบัญชีเงินกู้', minWidth: 120 },
    { id: 'Debt', label: 'ยอดหนี้คงค้าง', minWidth: 130 },
    { id: 'Status', label: 'สถานะ', minWidth: 130 },
    { id: 'Data', label: 'จัดการข้อมูล', minWidth: 170, align: 'center' },
];
const rows = [
    {
        id: '1',
        DateJudgment: '1180600009561',
        Cardid: '0143248665401',
        name: 'นางสาวPPP',
        LoanNumber: '1000262391 ',
        AccountType: 'บัญชีเงินกู้กยศ. F101(DMS)',
        Debt: '134,992.16',
        Status: 'รอสร้างหนังสือบอกเลิกสัญญา',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        Data: 'Button',
    },
    {
        id: '2',
        DateJudgment: '1180600009568',
        Cardid: '0143248665402',
        name: 'นางสาวGGG',
        LoanNumber: '1000262392 ',
        AccountType: 'บัญชีเงินกู้กยศ. F101(DMS)',
        Debt: '104,942.18',
        Status: 'สร้างหนังสือบอกเลิกสัญญาแล้ว',
        Court: 'ศาลจังหวัด',
        Data: 'Button',
    },
    {
        id: '3',
        DateJudgment: '1180600009557',
        Cardid: '0143248665403',
        name: 'นางสาวTTT',
        LoanNumber: '1000262393 ',
        AccountType: 'บัญชีเงินกู้กยศ. F101(DMS)',
        Debt: '234,042.38',
        Status: 'รอสร้างหนังสือบอกเลิกสัญญา',
        Court: 'ศาลจังหวัดเชียงใหม่',
        Data: 'Button',
    },

];
export default function TBRecordCancel() {
    return (
        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <TableContainer sx={{
    overflowX: 'auto',
    '& td, & th': {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      lineHeight: 1.4,
    },
  }}>
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
                                <TableCell >{row.DateJudgment}</TableCell>
                                <TableCell>{row.Cardid}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.LoanNumber}</TableCell>
                                <TableCell>{row.AccountType}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    {row.Status === 'สร้างหนังสือบอกเลิกสัญญาแล้ว' && (
                                        <Link to="/page/RecordIncoming" style={{ textDecoration: 'none', color: 'inherit' }}>
                                           <AddCircleOutlineIcon/>
                                        </Link>
                                    )}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
