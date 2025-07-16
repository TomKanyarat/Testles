import React, { useState } from 'react';
import { Divider, Grid, Typography, TextField, FormControl, Radio, RadioGroup, FormControlLabel, Button, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import Back from '../component/Back';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TBNoFoundPPT from '../TB/TBNoFoundPPT';
import SaveIcon from '@mui/icons-material/Save';
function NoFoundProperty() {
    const [value, setValue] = useState('option');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div style={{ backgroundColor: '#efefef', }}>
            <Back backNoFound="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '10px',
                    }}>
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>บันทึกข้อมูลผลการสืบทรัพย์ กรณีไม่พบทรัพย์</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px' }}>
                            <Typography>วันที่ขอออกคำบังคับคดี </Typography>
                            <Typography> ไม่พบทรัพย์</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography sx={{ marginLeft: '30px' }}>วันที่มอบหมายสืบทรัพย์ <span style={{ color: 'red' }}> * </span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="07/10/2563"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"></CalendarMonthIcon>
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography sx={{ marginLeft: '30px' }}>วันที่สืบทรัพย์เสร็จสิ้น <span style={{ color: 'red' }}> * </span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="07/10/2563"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"></CalendarMonthIcon>
                                    }}
                                /></Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px' }}>
                            <Typography>ประเภททรัพย์ที่สืบ <span style={{ color: 'red' }}>*</span></Typography>
                            <FormControl>
                                <RadioGroup
                                    sx={{ marginTop: '5px' }}
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group-1"
                                    value={value}
                                    onChange={handleChange}>
                                    <FormControlLabel value="allow" control={<Radio />} label="อนุญาต" />
                                    <FormControlLabel value="noallow" control={<Radio />} label="ไม่อนุญาต" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography sx={{ marginLeft: '30px' }}>หน่วยงานภายนอกที่สืบทรัพย์ <span style={{ color: 'red' }}> * </span>
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
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography sx={{ marginLeft: '30px' }}>หมายเหตุ
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
                                /></Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{ fontWeight: 'bold', marginLeft: '15px', marginTop: '10px' }}>เอกสารประกอบการเบิกค่าธรรมเนียม/ค่าใช้จ่ายอื่นๆ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={1} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} sm={12} md={3} >
                            <Typography>ประเภทค่าใช้จ่าย
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />
                            </Typography>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography sx={{ marginLeft: '30px' }}>จำนวนเงิน <span style={{ color: 'red' }}> * </span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography sx={{ marginLeft: '30px' }}>ใบเสร็จเล่มที่ <span style={{ color: 'red' }}> * </span>
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
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography sx={{ marginLeft: '30px' }}>ใบเสร็จเลขที่ <span style={{ color: 'red' }}> * </span>
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
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '20px' }}>
                        <TBNoFoundPPT />
                    </Grid>
                    <Typography sx={{ marginTop: '30px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={8} md={4}>
                            <Typography sx={{ marginTop: '5px', marginLeft: '30px' }}>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span>
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
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={8} md={4}>
                            <Typography sx={{ marginTop: '5px', marginLeft: '30px' }}>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span>
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
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '10px' }}>
                        <Link>
                        <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                    <SaveIcon/> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                                </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NoFoundProperty