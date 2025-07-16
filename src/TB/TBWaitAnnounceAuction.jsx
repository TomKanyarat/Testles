import * as React from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Typography, Divider, Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { id: 'id', label: 'ลำดับ', minWidth: 50, align: 'center' },
  { id: 'TypeCollateral', label: 'ประเภทหลักประกัน', minWidth: 120, align: 'center' },
  { id: 'Mortgage', label: 'ทรัพย์จำนอง/นอกจำนอง', minWidth: 120, align: 'center' },
  { id: 'DateSeize', label: 'วันที่ทำการยึด', minWidth: 160, align: 'center' },
  { id: 'Detail', label: 'รายละเอียดทรัพย์', minWidth: 180, align: 'center' },
];

const rowsData = [
  {
    id: 1,
    TypeCollateral: 'ที่ดิน/ที่ดินพร้อมสิ่งปลูกสร้าง',
    Mortgage: 'นอกจำนอง',
    DateSeize: '01/01/2567',
    Detail: '',
  },
];

export default function TBWaitAnnounceAuction() {
  const [rows, setRows] = React.useState(rowsData);
  const [selectAll, setSelectAll] = React.useState(false);

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setRows(rows.map((row) => ({ ...row, selected: checked })));
  };

  const handleRowSelect = (id, event) => {
    const checked = event.target.checked;
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, selected: checked } : row
    );
    setRows(updatedRows);
    setSelectAll(checked && updatedRows.every((row) => row.selected));
  };

  const hasSelectedRows = rows.some((row) => row.selected);

  return (
    <Paper sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Typography sx={{ ml: 2 }}>ทรัพย์รอประกาศขายทอดตลาด</Typography>
      <Divider sx={{ borderColor: '#1530A8' }} />

      <Button
        sx={{
          color: 'white',
          background: 'linear-gradient(45deg, #108F0D, #196618)',
          mt: 2,
          '&:disabled': {
            background: '#ccc',
            color: '#666',
          },
        }}
        disabled={!hasSelectedRows}
        onClick={() => {
          if (hasSelectedRows) {
            window.location.href = "/page/FromAnnounceAuction";
          }
        }}
      >
        <AddIcon />ประกาศขายทอดตลาด
      </Button>

      <TableContainer
        sx={{
          mt: 2,
          overflowX: 'auto',
          '& td, & th': {
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            lineHeight: 1.4,
          },
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            minWidth: 800,
            width: '100%',
            tableLayout: 'fixed',
            border: '1px solid #ddd',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: '#1530A8',
                  color: 'white',
                  fontWeight: 'bold',
                  width: 50,
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
                  sx={{
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
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <TableRow
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
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id] ? row[column.id] : 'ไม่มีข้อมูล'}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1} align="center">
                  ไม่พบข้อมูล
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
