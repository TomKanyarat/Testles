import React,{useState} from 'react';
import Back from '../component/Back';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { Divider, Grid, TextField, Typography,FormControl,Select,MenuItem,Button } from '@mui/material';
import TBWithdrawSeizePPT from '../TB/TBWithdrawSeizePPT';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function WithdrawSeizePPT() {
    const [value, setValue] = useState('name');

    const handleChange = (event) => {
        setValue(event.target.value);
    } 
    return (
        <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
            <Back BackDetailSeizePPT="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={5} sm={6} md={12} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    height: 'auto',
                    padding: '15px',
                }}>
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>ถอนการยึดทรัพย์</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '20px' }}>
                        <TBWithdrawSeizePPT />
                    </Grid>
                    <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '20px', marginLeft: '20px' }}>
                        <Typography>วันที่ถอนยึดทรัพย์ <span style={{ color: 'red' }}>*</span>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }} InputProps={{
                                    endAdornment: <CalendarMonthIcon position="end"></CalendarMonthIcon>
                                }}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '20px', marginLeft: '20px' }}>
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
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '20px', marginLeft: '20px' }}>
                        <Typography>วันที่ถอนยึดทรัพย์ <span style={{ color: 'red' }}>*</span>
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
                </Grid>
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

        </div>
    )
}

export default WithdrawSeizePPT