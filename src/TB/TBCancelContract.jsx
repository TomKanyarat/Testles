import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const columns = [
    { id: 'id', label: 'ลำดับ', minWidth: 50, align: 'center' },
    { id: 'Legal_number', label: 'เลขที่กฎหมาย', minWidth: 120, align: 'center' },
    { id: 'CIF', label: 'CIF No.', minWidth: 120, align: 'center' },
    { id: 'Cardid', label: 'เลขที่บัตรประชาชน', minWidth: 160, align: 'center' },
    { id: 'fullName', label: 'ชื่อ-สกุล', minWidth: 180, align: 'center' },
    { id: 'Responsibilities', label: 'สำนักงานทนายความรับผิดชอบ', minWidth: 200, align: 'center' },
    { id: 'black_number', label: 'คดีหมายเลขดำ', minWidth: 130, align: 'center' },
    { id: 'red_number', label: 'คดีหมายเลขแดง', minWidth: 130, align: 'center' },
];

const rowsData = [
    { id: 1, Legal_number: 2563000000014, CIF: '0000002666824', Cardid: 3100300320047, firstName: 'นางสาวKOK', lastName: 'KK', Responsibilities: 'อรุณสวัสดิ์', black_number: 'สป0002/2563', red_number: 'สป003/2563' },
    { id: 2, Legal_number: 2563000000019, CIF: '0000002417221', Cardid: 3101701880061, firstName: 'นางสาวGGG', lastName: 'GG', Responsibilities: 'อรุณสวัสดิ์', black_number: '', red_number: '' },
    { id: 3, Legal_number: 2563000000019, CIF: '0000002417221', Cardid: 3101701880061, firstName: 'นางสาวGGG', lastName: 'GG', Responsibilities: 'ทนายบุญ', black_number: '', red_number: '' },
    { id: 4, Legal_number: 2563000000019, CIF: '0000002417221', Cardid: 3101701880061, firstName: 'นางสาวGGG', lastName: 'GG', Responsibilities: 'ทนายบุญ', black_number: '', red_number: '' },
];

export default function TabelCancelContract() {
    const [rows, setRows] = React.useState(rowsData);
    const [selectAll, setSelectAll] = React.useState(false);

    const handleSelectAll = (event) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        setRows(rows.map((row) => ({ ...row, selected: checked })));
    };

    const handleRowSelect = (id, event) => {
        const checked = event.target.checked;
        setRows(
            rows.map((row) => (row.id === id ? { ...row, selected: checked } : row))
        );
        if (!checked) setSelectAll(false);
        else if (rows.every((row) => row.id === id || row.selected)) setSelectAll(true);
    };
    const hasSelectedRows = rows.some((row) => row.selected);

    return (

        <Paper sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>

            <Button sx={{
                marginBottom: '10px',
                color: 'white', background: 'linear-gradient(45deg, #108F0D, #196618)', marginTop: '10px', '&:disabled': {
                    background: '#ccc',
                    color: '#666',
                },
            }}
                disabled={!hasSelectedRows}
                onClick={() => {
                    if (hasSelectedRows) {
                        // ไปหน้าสร้างคำฟ้อง ถ้ามีการเลือกอย่างน้อย 1 รายการ
                        window.location.href = "/page/CancelContractFrom";
                    }
                }}>
                <AddIcon />สร้างหนังสือบอกเลิกสัญญา
            </Button>

            <TableContainer sx={{
                overflowX: 'auto',
                '& td, & th': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                },
            }}>
                <Table stickyHeader aria-label="sticky table"
                    sx={{
                        minWidth: 800,
                        width: '100%',
                        tableLayout: 'fixed',
                        border: '1px solid #ddd',
                    }}>
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
                                <Checkbox
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': {
                                            color: 'white',
                                        },
                                    }}
                                    color="primary"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
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
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5',
                                }}
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
                                        color="primary"
                                        checked={row.selected || false}
                                        onChange={(event) => handleRowSelect(row.id, event)}
                                    />
                                </TableCell>
                                {columns.map((column) => {
                                    const value =
                                        column.id === 'fullName'
                                            ? `${row.firstName} ${row.lastName}`
                                            : row[column.id];
                                    const isRedNumberColumn = column.id === 'red_number';
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            sx={{
                                                color: isRedNumberColumn && row.red_number ? 'red' : 'inherit',
                                            }}
                                        >
                                            {value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}
