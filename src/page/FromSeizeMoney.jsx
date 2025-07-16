import React, { useState } from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, TextField, Typography, FormControl, Select, MenuItem, InputAdornment } from '@mui/material';
// import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SaveIcon from '@mui/icons-material/Save';

function FromSeizeMoney() {
    const [value, setValue] = useState('name');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackSeizeMoney="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px' }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>อายัดเงิน</Typography>
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
                                                '& .MuiInputSelect-Select': {
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
                            <Typography>สำนักงานบังคับคดีทั่วประเทศ <span style={{ color: 'red' }}>*</span>
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
                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ข้อมูลนายจ้างและที่ตั้งสำนักงาน</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> คำนำหน้าชื่อ
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
                                        <MenuItem value="miss" >
                                            นางสาว
                                        </MenuItem>
                                        <MenuItem value="mr" >
                                            นาย
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>ชื่อนิติบุคคล
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
                            <Typography> ประเทศ
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

                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>ที่อยู่
                                <TextField
                                    multiline
                                    rows={2}
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
                            <Typography> จังหวัด
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

                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> เขต/อำเภอ
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
                                        }}>
                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> แขวง/ตำบล
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
                                        }}>
                                    </Select>
                                </FormControl>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>รหัสไปรษณีย์
                                <TextField
                                    multiline
                                    rows={2}
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
                            <Typography>โทรศัพท์
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
                    <Typography sx={{ marginLeft: '15px', marginTop: '30px', fontWeight: 'bold' }}>ข้อมูลอาชีพ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> ตำแหน่งงาน
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
                            <Typography> รายได้ต่อเดือน(บาท)
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"></InputAdornment>
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> อายุงาน(ปี)
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
                            <Typography> อายุงาน(เดือน)
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
                            <Typography> รายได้พิเศษต่อเดือน(บาท)
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"></InputAdornment>
                                    }}
                                /></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> รายละเอียดการอายัด
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <InputAdornment position="end"></InputAdornment>
                                    }}
                                /></Typography>
                        </Grid>

                    </Grid>
                    <Typography sx={{marginLeft: '15px',marginTop: '30px',fontWeight: 'bold'}}>เอกสารประกอบการเบิกค่าธรรมเนียม/ค่าใช้จ่ายอื่นๆ</Typography>
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

export default FromSeizeMoney