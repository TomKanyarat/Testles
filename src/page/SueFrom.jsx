
import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, } from 'react-router-dom'
import { Grid, Divider, TextField, Button, Paper } from '@mui/material';
import { Select, MenuItem, FormControl } from '@mui/material';
import TabelFromSue from '../TB/TabelFromSue'
import InputAdornment from '@mui/material/InputAdornment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Back from '../component/Back';

const SueFrom = () => {
    // const location = useLocation()

    // const isActiveLink = (path) => location.pathname === path

    const [value, setValue] = useState(''); // กำหนดค่าเริ่มต้นของ value

    const handleChange = (event) => {
        setValue(event.target.value); // อัปเดตค่าจาก input
    };

    function createData(name, price, type,) {
        return { name, price, type }

    }

    const rows = [
        createData('เงินต้น', '0.00', 'บาท'),
        createData('ดอกเบี้ย', '0.00', 'บาท'),
        createData('ดอกเบี้ย อัตราร้อยละ', '0.00', 'ต่อปี'),
        createData('เบี้ยปรับ', '0.00', 'บาท'),
        createData('เบี้ยปรับ อัตราร้อยละ', '0.00', 'ต่อเดือน'),
        createData('ความรับผิดชอบ', '100.00', '%'), // เปลี่ยน 100 เป็น string

    ];

    return (
        <div >
            <Box sx={{ backgroundColor: '#efefef', height: 'auto' }}>

                <Back BackSue="กลับ" />
                <Grid container >
                    <Typography sx={{

                        padding: '10px',
                        marginLeft: '10px'
                    }}>สร้างสำนวนคำฟ้อง</Typography>
                    <Grid
                        item
                        xs={11}
                        sm={11.5}
                        md={11.5}
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            margin: 'auto',
                            padding: '15px',
                        }}
                    >
                        <Typography >
                            รายละเอียดเลขที่กฎหมาย
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                        <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                            <Grid item xs={4}>
                                <Typography sx={{ fontWeight: 'bold', marginTop: '5px' }}>เลขที่กฎหมาย: 2563000000019</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={2} >
                                <Typography> เลขที่บัตรประชาชน </Typography>
                                <Typography>  31017018***** </Typography>

                            </Grid>

                            <Grid item xs={6} sm={4} md={2} >
                                <Typography> CIF No. </Typography>
                                0000002417221
                            </Grid>
                            <Grid item xs={6} sm={4} md={2} >
                                <Typography> ชื่อ-สกุล </Typography>
                                นางสาวGGG
                            </Grid>

                            <Grid item xs={6} sm={4} md={3} >
                                <Typography> สถานะการดำเนินคดีปัจจุบัน </Typography>
                                -----
                            </Grid>
                            <Grid item xs={6} sm={4} md={3} >
                                <Typography> คดีหมายเลขดำ/คดีหมายเลขแดง </Typography>
                                --/--
                            </Grid>
                        </Grid>
                        <Typography sx={{ marginTop: '20px' }}>สำนวนฟ้อง</Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />

                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={4} md={4} >
                                <Typography sx={{ marginTop: '5px' }}> ศาล <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" sx={{ width: '80%' }} >
                                    <Select
                                        value={value} // ค่า value ที่เลือกจาก dropdown
                                        onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiSelect-Select': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },

                                        }}
                                    >
                                        <MenuItem value="firm1" >
                                            กรุณาเลือก
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} sm={4} md={4} >
                                <Typography sx={{ marginTop: '5px' }}> วันที่ยื่นฟ้อง <span style={{ color: 'red' }}>*</span> </Typography>
                                <TextField
                                    variant="outlined"
                                    placeholder="10/01/2563"
                                    sx={{
                                        width: '80%',
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },

                                    }} InputProps={{

                                        endAdornment: <CalendarMonthIcon position="end"
                                        ></CalendarMonthIcon>,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={6} sm={4} md={4} >
                                <Typography sx={{ marginTop: '5px' }}>   คดีหมายเลขดำที่ <span style={{ color: 'red' }}>*</span> </Typography>
                                <TextField
                                    variant="outlined"
                                    placeholder='สป/0978/2563'
                                    sx={{
                                        width: '80%',
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />

                            </Grid>
                            <Typography sx={{ padding: '15px' }}>จำเลย <span style={{ color: 'red' }}>*</span></Typography>
                        </Grid>
                        <TabelFromSue />

                        <Typography sx={{ padding: '30px 30px' }}>
                            ข้อมูลทุนทรัพย์
                        </Typography>
                        <Grid item xs={6} sm={4} md={5} sx={{ marginTop: '-15px', marginLeft: '30px' }}>
                            <Typography>ทุนทรัพย์ ณ วันฟ้อง </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '11px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                                InputProps={{

                                    endAdornment: <InputAdornment position="end"
                                    >บาท</InputAdornment>,
                                }}
                            />

                        </Grid>

                        <Grid item xs={6} sm={4} md={5} sx={{ padding: '30px 30px' }}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{
                                                    backgroundColor: index % 2 === 0 ? 'white' : '#efefef', // สีขาวสำหรับแถวคู่ และสีเทาสำหรับแถวคี่
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.price}</TableCell>
                                                <TableCell align="right">{row.type}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                        <Grid container spacing={2} sx={{ padding: '10px 30px' }}>
                            <Grid item xs={6} sm={4} md={4} >
                                <Typography>ประเภทคำฟ้อง </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value="กยศ. แบบแยกรับผิด" // ข้อความที่จะแสดงในฟิลด์และไม่สามารถแก้ไขได้
                                    InputProps={{
                                        readOnly: true, // กำหนดให้ฟิลด์เป็นแบบอ่านอย่างเดียว
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />

                            </Grid>

                            <Grid item xs={6} sm={4} md={4} sx={{ padding: '20px 30px' }}>
                                <Typography>  ข้อหาหรือฐานความผิด <span style={{ color: 'red' }}>*</span></Typography>
                                <FormControl variant="outlined" sx={{ width: '70%' }}>
                                    <Select
                                        value={value} // ค่า value ที่เลือกจาก dropdown
                                        onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'สำนักงานทนายความที่รับผิดชอบ',
                                        }}
                                        sx={{
                                           height: '45px',
                                            '& .MuiSelect-Select': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="firm1" >
                                            ตัวเลือก
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', }} >

                                <Link to="/page/">
                                    <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                        <SaveIcon></SaveIcon> <span style={{ marginTop: '2px', marginLeft: '5px' }}>สร้างคำฟ้อง</span>
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default SueFrom