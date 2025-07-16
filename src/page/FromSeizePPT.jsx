import React, {useState} from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, TextField, Typography, FormControl, Select,MenuItem } from '@mui/material';
import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SaveIcon from '@mui/icons-material/Save'
function FromSeizePPT() {
    const [value, setValue] = useState('name');

    const handleChange = (event) => {
        setValue(event.target.value);
    } 
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackSeizePPT="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px' }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', marginTop: '30px', fontWeight: 'bold' }}>ยื่นคำขอ อายัดทรัพย์/ยึดทรัพย์</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> ชื่อจำเลย <span style={{ color: 'red' }}>*</span>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={value} // ค่า value ที่เลือกจาก dropdown
                                        onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                        displayEmpty
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="namePPP" >
                                            นางสาวPPP
                                        </MenuItem>
                                        <MenuItem value="nameTTT" >
                                            นางสาวTTT
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>วันที่ยื่นเรื่องอายัด/ยึดทรัพย์ <span style={{ color: 'red' }}>*</span>
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
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>สำนักงานบังคัยคดีทั่วประเทศ <span style={{ color: 'red' }}>*</span>
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
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>วันที่นัดเจ้าพนักงานไปดำเนินการอายัด/ยึดทรัพย์ <span style={{ color: 'red' }}>*</span>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon></CalendarMonthIcon>
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>รายละเอียด
                                <TextField
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}

                                /></Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
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
                    <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
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
                    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <Link>
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                <SaveIcon /> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default FromSeizePPT