import React, { useState } from 'react'; // เพิ่ม useState
// import Back from '../component/Back'
import { Grid, Typography, Divider, TextField, Button, Checkbox } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import HomeIcon from '@mui/icons-material/Home'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';
const columns = [
  { id: 'id', label: 'ลำดับ', minWidth: 50, align: 'center' },
  { id: 'TextDocument', label: 'ประเภทเอกสาร', minWidth: 120, align: 'center' },
  { id: 'Day', label: 'วันที่', minWidth: 120, align: 'center' },
  { id: 'Document', label: 'เอกสาร', minWidth: 160, align: 'center' },
  { id: 'Name', label: 'ผู้อัปโหลดเอกสาร', minWidth: 180, align: 'center' },
  { id: 'Data', label: 'จัดการข้อมูล', minWidth: 200, align: 'center' },
];

// ข้อมูลเริ่มต้นในตาราง
const rowsData = [
  { id: 1, TextDocument: 2563000000014, Day: '0000002666824', Document: 3100300320047, Name: 'นางสาวKOK', Data: 'KK', },
];

const ConfirmAppeal = () => {
  const [rows, setRows] = useState(rowsData);
  const [selectAll, setSelectAll] = useState(false);

  // เลือก/ไม่เลือกทั้งหมด
  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setRows(rows.map((row) => ({ ...row, selected: checked })));
  };

  // เลือก/ไม่เลือกแถวเดียว
  const handleRowSelect = (id, event) => {
    const checked = event.target.checked;
    setRows(rows.map((row) => (row.id === id ? { ...row, selected: checked } : row)));
    if (!checked) setSelectAll(false);
    else if (rows.every((row) => row.id === id || row.selected)) setSelectAll(true);
  };
  return (
    <div style={{backgroundColor: '#efefef',height: '100vh'}}>
        {/* <Back BackConfirmAppeal="กลับ" /> */}
        <Grid container spacing={1} sx={{ padding: '20px 20px' }}>
          <Grid item xs={5} sm={6} md={12} sx={{
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
            margin: 'auto',
            height: 'auto',
            padding: '15px',

          }}>
            <Typography sx={{ marginLeft: '15px' }}>
              ขอยื่นอุทธรณ์
            </Typography>
            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
            <Grid container spacing={1}>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'end', marginTop: '5px' }}>
                  เลขที่บัตรประชาชน: <span style={{ fontWeight: 'bold' }}>1180600009561</span>
                </Typography>

              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'center', marginTop: '5px' }}>
                  CIF No.: <span style={{ fontWeight: 'bold' }}>0000002417221</span>
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'end', marginRight: '25px' }}>
                  ชื่อลูกหนี้/ผู้เกี่ยวข้อง: <span style={{ fontWeight: 'bold' }}>นางสาวPPP</span>
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'center', marginRight: '65px' }}>
                  ความสัมพันธ์: <span style={{ fontWeight: 'bold' }}>ผู้กู้</span>
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'end', marginRight: '45px' }}>
                  คดีหมายเลขดำ: <span style={{ fontWeight: 'bold' }}>ผบ5455/2563</span>
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'center', marginLeft: '60px' }}>
                  คดีหมายเลขแดง: <span style={{ fontWeight: 'bold' }}>0000002417221</span>
                </Typography>
              </Grid>
              <Grid item xs={5} sm={6} md={5}>
                <Typography sx={{ textAlign: 'end', marginRight: '80px' }}>
                  ศาล: <span style={{ fontWeight: 'bold' }}>ศาลแพ่งกรุงเทพใต้</span>
                </Typography>
              </Grid>
              <Grid container spacing={1} sx={{ padding: '40px' }}>
                <Grid item xs={5} sm={6} md={12}>
                  <Typography>
                    ความคิดเห็นทนาย : ขอยื่นอุทธรณ์ <span style={{ color: 'red' }}>*</span>
                    <TextField
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Test"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={12}>
                <Typography sx={{ marginLeft: '15px' }}>เอกสารประกอบ</Typography>
                <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                <Grid item xs={12} sx={{ marginTop: '10px' }}>
                  <Button sx={{ backgroundColor: '#efefef', color: 'gray', border: '1px solid gray' }}>
                    <UploadFileIcon />
                    <span style={{ marginLeft: '5px' }}>แนบเอกสาร</span>
                  </Button>
                  <Button sx={{ color: 'black', border: '1px solid gray', marginLeft: '20px' }}>
                    <RefreshIcon />
                    <span style={{ marginLeft: '5px' }}>Refresh</span>
                  </Button>
                </Grid>
                </Grid>
                <Grid item xs={5} sm={5} md={12} sx={{ textAlign: 'center' }}>

                  <Paper sx={{ width: '100%', overflowX: 'auto', marginTop: '10px', }}>
                    <TableContainer>
                      <Table stickyHeader>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{
                                backgroundColor: '#1530A8',
                                color: 'white',
                                fontWeight: 'bold',
                              }}>
                              <Checkbox
                                sx={{
                                  color: 'white',
                                  '&.Mui-checked': { color: 'white' },
                                }}
                                checked={selectAll}
                                onChange={handleSelectAll}
                              />
                            </TableCell>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  backgroundColor: '#1530A8',
                                  color: 'white',
                                  fontWeight: 'bold',
                                }}>
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow key={row.id} sx={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5' }}>
                              <TableCell>
                                <Checkbox
                                  checked={row.selected || false}
                                  onChange={(event) => handleRowSelect(row.id, event)}
                                />
                              </TableCell>
                              {columns.map((column) => (
                                column.id === 'Data' ? (
                                  <TableCell key={column.id} align={column.align}>
                                    <Link to={`/edit/${row.id}`} style={{ textDecoration: 'none', marginRight: '10px' }}>
                                      <PreviewIcon sx={{ color: 'black', cursor: 'pointer' }} />

                                    </Link>
                                    <Link to={`/edit/${row.id}`} style={{ textDecoration: 'none', marginRight: '10px', marginLeft: '10px' }}>
                                      <DeleteIcon sx={{ color: 'black', cursor: 'pointer' }} />

                                    </Link>
                                  </TableCell>
                                ) : (
                                  <TableCell key={column.id} align={column.align}>
                                    {row[column.id] || '-'}
                                  </TableCell>
                                )
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                  <Link to="/page/Appeal" style={{ textDecoration: 'none', }}>
                    <Button sx={{ backgroundColor: '#efefef', color: 'gray', border: '1px solid gray', marginTop: '20px' }}>
                      <HomeIcon /><span style={{ marginLeft: '5px' }}>กลับหน้าหลัก</span></Button>
                  </Link>
                </Grid>
                {/*  */}

              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default ConfirmAppeal