import React, { useState } from 'react'
import { Grid, Typography, Divider, TextField, FormControl, Select, MenuItem, Radio, RadioGroup, FormControlLabel, InputAdornment, Button } from '@mui/material';
import Back from '../component/Back';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save'
import DetailName from '../component/DetailName';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const FromForcedWarrant = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
            <Back BackForcedWarrant="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={5} sm={6} md={12} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    height: 'auto',
                    padding: '15px',

                }}>
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }}>ออกหมายบังคับคดี</Typography>
                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>วันที่ขอออกคำบังคับคดี</Typography>
                            <TextField
                                variant="outlined"
                                placeholder="01/02/2563"
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
                        <Grid item xs={12} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>ชั้นศาล <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="ศาลชั้นต้น"
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>ศาล <sapn style={{ color: 'red' }}>*</sapn></Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={value} // ค่า value ที่เลือกจาก dropdown
                                    onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                    displayEmpty

                                    sx={{
                                        height: '45px',
                                        '& .MuiInputSelect-Select': {
                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                        },
                                    }}
                                >
                                    <MenuItem value="confirm20" >
                                        ศาลแพ่งกรุงเทพใต้
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>วันที่ยื่นขอออกหมายบังคับคดี <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="08/10/2563"
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
                        <Grid item xs={6} sm={4} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> วันที่ศาลสั่ง/วันที่ขอออกหมายบังคับคดี <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="08/01/2563"
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
                        <Grid item xs={6} sm={4} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> วันที่ส่งเอกสารเพื่อให้ทนายยึดทรัพย์ <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="08/01/2563"
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
                        <Grid item xs={6} sm={4} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> หมายเหตุ </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}

                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography> ศาลอนุญาต </Typography>
                            <FormControl>
                                <RadioGroup
                                    sx={{ marginTop: '5px' }}
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group-1"
                                    value={value}
                                    onChange={handleChange}>
                                    <FormControlLabel value="true" control={<Radio />} label="อนุญาต" />
                                    <FormControlLabel value="false" control={<Radio />} label="ไม่อนุญาต" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }}>เอกสารประกอบการเบิกค่าธรรมเนียม/ค่าใช้จ่ายอื่นๆ</Typography>
                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> ประเภทค่าใช้จ่าย/ค่าธรรมเนียม <sapn style={{ color: 'red' }}>*</sapn></Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={value} // ค่า value ที่เลือกจาก dropdown
                                    onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                    displayEmpty
                                    sx={{
                                        height: '45px',
                                        '& .MuiInputSelect-Select': {
                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                        },
                                    }}
                                >
                                    <MenuItem value="confirm20" >
                                        นางสาวPPP
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> จำนวนเงิน <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }} InputProps={{
                                    endAdornment: <InputAdornment position="end"
                                    >บาท</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> ใบเสร็จเล่มที่ <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }} InputProps={{
                                    endAdornment: <InputAdornment position="end"
                                    >บาท</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> ใบเสร็จเลขที่ <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }} InputProps={{
                                    endAdornment: <InputAdornment position="end"
                                    >บาท</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Link to="/page">
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <AddIcon />เพิ่ม
                                </Button>
                            </Link>
                            <Link to="/page">
                                <Button sx={{ color: 'black', marginTop: '10px', marginLeft: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <ClearIcon /> ยกเลิก
                                </Button>
                            </Link>
                        </Grid>
                        {/* Tabel */}
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '5px', }}>
                            <Typography sx={{ fontWeight: 'bold', marginLeft: '20px' }}>ผู้รับผิดชอบ</Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                                <Typography> ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span> </Typography>
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
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography> ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span> </Typography>
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
                        <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Link to="/page">
                                <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                    <SaveIcon/> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}

export default FromForcedWarrant