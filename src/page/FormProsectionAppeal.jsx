import React from 'react'
import Back from '../component/Back';
import { Divider, Grid, Typography, TextField, InputAdornment } from '@mui/material'
import DetailName from '../component/DetailName';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
const columns = [
    { id: 'id', label: 'ลำดับ' },
    { id: 'Type_money', label: 'ชื่อ-นามสกุล' },
    { id: 'Type_money', label: 'ความสัมพันธ์' },
];
const rows = [
    {
        id: 1,
        Type_money: 'นางสาวPPP',
        ReceiptIn: 'ผู้กู้',
    }
];
const FormProsectionAppeal = () => {

    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackProsecutionAppeal="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px' }}>
                <Grid item xs={5} sm={12} md={11} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    height: 'auto',
                    padding: '15px'
                }} >
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '15px' }}>
                        ผลการดำเนินคดีชั้นอุทธรณ์
                    </Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>คดีหมายเลขดำชั้นอุทธรณ์ <span style={{ color: 'red' }}>*</span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>คดีหมายเลขแดงชั้นอุทธรณ์ <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/*  */}
                    <Typography sx={{ padding: '20px 30px' }}>จำเลย <span style={{ color: 'red' }}>*</span></Typography>
                    <Grid item xs={6} sm={6} md={12} >
                        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
                            <TableContainer sx={{ overflowX: 'auto' }}>
                                <Table
                                    stickyHeader
                                    aria-label="sticky table"
                                    sx={{
                                        minWidth: 800, // กำหนดความกว้างขั้นต่ำของตาราง
                                        width: '100%',
                                        tableLayout: 'fixed', // บังคับให้ตารางปรับขนาดอัตโนมัติ
                                        borderWidth: 1,
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
                                                <TableCell>{row.Type_money}</TableCell>
                                                <TableCell >{row.ReceiptIn}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography>ประเภทคำพิพากษา/คำสั่ง <span style={{ color: 'red' }}>*</span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography>วันที่ศาลพิพากษา <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                placeholder="วว/ดด/ปปปป"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }} InputProps={{
                                    endAdornment: <CalendarMonthIcon position="end"
                                    ></CalendarMonthIcon>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography>รายละเอียดคำพิพากษา</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* 2 */}
                    <Divider sx={{ marginTop: '20px' }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography>วันที่ครบกำหนดยื่นฎีกา
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="วว/ดด/ปปปป"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"
                                        ></CalendarMonthIcon>,
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography>วันที่ครบกำหนดยื่นแก้ฎีกา
                                <TextField
                                    variant="outlined"
                                    placeholder="วว/ดด/ปปปป"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"
                                        ></CalendarMonthIcon>,
                                    }}
                                /></Typography>
                        </Grid>
                    </Grid>
                    {/* 2 */}
                    <Typography sx={{ marginTop: '50px', marginLeft: '20px' }}>เงินวางดาวน์เพื่อชำระหนี้*กรณีลูกหนี้นำเงินมาวางชำระหนี้ที่ศาล
                        <Divider />
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px' }}>
                            <Typography>เงินวางศาลเพื่อชำระหนี้
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="วว/ดด/ปปปป"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"
                                        >บาท</InputAdornment>,
                                    }}
                                /></Typography>
                        </Grid>
                    </Grid>
                    {/* 4 */}
                    <Typography sx={{ marginTop: '50px', marginLeft: '20px' }}>คดีถึงที่สุด
                        <Divider />
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px' ,marginTop: '5px'}}>
                            <Typography>เงินวางศาลเพื่อชำระหนี้
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="วว/ดด/ปปปป"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"
                                        >บาท</InputAdornment>,
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px',marginTop: '5px' }}>
                            <Typography>เงินวางศาลเพื่อชำระหนี้
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="วว/ดด/ปปปป"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"
                                        >บาท</InputAdornment>,
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px',marginTop: '5px' }}>
                            <Typography>เงินวางศาลเพื่อชำระหนี้
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="วว/ดด/ปปปป"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"
                                        >บาท</InputAdornment>,
                                    }}
                                /></Typography>
                        </Grid>
                    </Grid>
                {/*  */}
                <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }} >ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                        <Typography>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            /></Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                        <Typography>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span>
                            <TextField
                                variant="outlined"

                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            /></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', }} >

                        <Link to="/page/">
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                <SaveIcon></SaveIcon> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormProsectionAppeal