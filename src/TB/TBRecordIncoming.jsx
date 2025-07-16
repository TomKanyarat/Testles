import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { id: 'id', label: 'ลำดับ', },
    { id: 'TypeAddress', label: 'ประเภทที่อยู่' },
    { id: 'Address', label: 'ที่อยู่', },
    { id: 'Data', label: 'จัดการข้อมูล' }
];

const rowsData = [
    {
        id: 1,
        TypeAddress: 'ที่อยู่ตามทะเบียนราษฎร์',
        Address: ' 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300',
        Data: '',
    },
    {
        id: 2,
        TypeAddress: 'ที่อยู่ปัจจุบัน',
        Address: ' 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300',
        Data: '',
    },
    {
        id: 3,
        TypeAddress: 'ที่อยู่ที่ทำงาน',
        Address: ' 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300',
        Data: '',
    }
];

export default function TBRecordIncoming() {
    const [rows, setRows] = React.useState(rowsData);
    // const [selectAll, setSelectAll] = React.useState(false);

    // const handleSelectAll = (event) => {
    //     const checked = event.target.checked;
    //     setSelectAll(checked);
    //     setRows(rows.map((row) => ({ ...row, selected: checked })));
    // };

    const handleRowSelect = (id, event) => {
        const checked = event.target.checked;
        setRows(
            rows.map((row) => (row.id === id ? { ...row, selected: checked } : row))
        );
        // if (!checked) setSelectAll(false);
        // else if (rows.every((row) => row.id === id || row.selected)) setSelectAll(true);
    };
    // const hasSelectedRows = rows.some((row) => row.selected);


    return (
        <Paper sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <TableContainer sx={{ maxHeight: 440, marginTop: '10px' }}>
                <Table stickyHeader sx={{ minWidth: 800, width: '100%', tableLayout: 'fixed', border: '1px solid #ddd' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                style={{
                                    backgroundColor: '#1530A8',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    width: '50px',
                                }}
                            >
                                เลือก
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="center"
                                    style={{
                                        backgroundColor: '#1530A8',
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.id}
                                sx={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5' }}
                            >
                                <TableCell>
                                    <Checkbox
                                        sx={{
                                            color: 'black',
                                            '&.Mui-checked': {
                                                color: 'white',
                                                backgroundColor: 'gray',
                                            },
                                        }}
                                        checked={row.selected || false}
                                        onChange={(event) => handleRowSelect(row.id, event)}
                                    />
                                </TableCell>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.TypeAddress}</TableCell>
                                <TableCell align="center">{row.Address}</TableCell>
                                <TableCell align="center">
                                    <Link to={`/edit-address/${row.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <EditIcon />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}