import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const columns = [
    // { id: 'id', label: 'ลำดับ', minWidth: 50 },
    { id: 'Legal_number', label: 'เลขที่กฎหมาย', minWidth: 130 },
    { id: 'Cardid', label: 'เลขที่บัตรประชาชน', minWidth: 130 },
    { id: 'name', label: 'ชื่อ-นามสกุล', minWidth: 130 },
    { id: 'BlackNumber', label: 'คดีหมายเลขดำ', minWidth: 110 },
    { id: 'RedNumber', label: 'คดีหมายเลขแดง', minWidth: 120 },
    { id: 'Court', label: 'ศาล', minWidth: 130 },
    // { id: 'CourtOfFirst ', label: 'ทุนทรัพย์ศาลชั้นต้น', minWidth: 120, align: 'center' },
    { id: 'DayFirst', label: 'วันที่พิพากษาศาลชั้นต้น', minWidth: 120, align: 'center' },
    { id: 'TakingAction', label: 'วันที่ยื่นขอพิจารณา', minWidth: 170, align: 'center' },
    { id: 'Type', label: 'ประเภทคำขอ', minWidth: 170, align: 'center' },
    { id: 'DayConside', label: 'วันที่พิจารณา', minWidth: 170, align: 'center' },
    { id: 'ResultConside', label: 'ผลพิจารณา', minWidth: 170, align: 'center' },

];

const rows = [
    {
        // id: 1,
        Legal_number: '2563000000044',
        Cardid: '1180600009561',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        // CourtOfFirst: '21,222.42',
        DayFirst: '15/01/2563',
        Day: '10/01/2563',
        Type: 'ยื่นฎีกา',
        DayConside: '10/01/2563',
        ResultConside: 'เห็นขอบ',
    },
    {
        // id: 2,
        Legal_number: '2563000000044',
        Cardid: '1180600009561',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        // CourtOfFirst: '21,222.42',
        DayFirst: '15/01/2563',
        Day: '10/01/2563',
        Type: 'ยื่นฎีกา',
        DayConside: '10/01/2563',
        ResultConside: 'เห็นขอบ',
    },
    {
        // id: 3,
        Legal_number: '2563000000044',
        Cardid: '1180600009561',
        name: 'นางสาวPPP',
        BlackNumber: 'ผบ5455/2563 ',
        RedNumber: 'ผบ4330/2563 ',
        Court: 'ศาลแพ่งกรุงเทพใต้',
        // CourtOfFirst: '21,222.42',
        DayFirst: '15/01/2563',
        Day: '10/01/2563',
        Type: 'ยื่นฎีกา',
        DayConside: '10/01/2563',
        ResultConside: 'ไม่เห็นขอบ',
    }
];

export default function TBResultSPL() {
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
                            <TableRow key={row.Legal_number}>
                                {/* <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell> */}
                                <TableCell >{row.Legal_number}</TableCell>
                                <TableCell>{row.Cardid}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.BlackNumber}</TableCell>
                                <TableCell sx={{ color: 'red' }}>{row.RedNumber}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Court}</TableCell>
                                {/* <TableCell sx={{ textAlign: 'center' }}>{row.CourtOfFirst}</TableCell> */}
                                <TableCell sx={{ textAlign: 'center' }}>{row.DayFirst}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Day}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.Type}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.DayConside}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>{row.ResultConside}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
