import React, { useState } from 'react';
import Back from '../component/Back';
import { Grid, Typography, Divider, FormControl, RadioGroup, Radio, FormControlLabel, TextField, InputAdornment, Button } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import AddApealTB from '../component/AddApealTB';
import SaveIcon from '@mui/icons-material/Save'
const AddEditAppeal = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackEditAppeal="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px' }}>
                <Grid item xs={5} sm={12} md={11} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    height: 'auto',
                    padding: '15px'
                }}>

                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '40px', }} >
                        ยื่น/แก้อุทธรณ์ Test
                    </Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>ประเภทการยื่นอุทธรณ์ <span style={{ color: 'red' }}>*</span></Typography>
                            <FormControl>
                                <RadioGroup
                                    row // เพิ่ม row เพื่อจัดให้อยู่ในแนวนอน
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}>
                                    <FormControlLabel value="option1" control={<Radio />} label="ยื่นอุทธรณ์" />
                                    <FormControlLabel value="option2" control={<Radio />} label="ยื่นแก้อุทธรณ์" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} sm={6} md={4} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>ผู้ยื่น <span style={{ color: 'red' }}>*</span></Typography>
                            <FormControl>
                                <RadioGroup
                                    row // เพิ่ม row เพื่อจัดให้อยู่ในแนวนอน
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}>
                                    <FormControlLabel value="option3" control={<Radio />} label="โจทก์" />
                                    <FormControlLabel value="option4" control={<Radio />} label="จำเลย" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>วันที่ยื่นอุทธรณ์ <span style={{ color: 'red' }}>*</span>
                                <TextField
                                    variant="outlined"
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
                        <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>ทุนทรัพย์ชั้นอุทธรณ์ <span style={{ color: 'red' }}>*</span>
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
                                /></Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>ศาล <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
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
                        <Grid item xs={6} sm={6} md={10} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography>
                                ประเด็นการยื่นอุทธรณ์ <span style={{ color: 'red' }}>*</span>
                                <TextField
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8', marginTop: '20px' }} />
                    <Grid item >
                        <Typography sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            ทุเลาการบังคับคดี
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Grid Item แรก */}
                            <Grid item xs={6} sm={6} md={3}>
                                <Typography sx={{ marginLeft: '30px', marginTop: '20px' }}>
                                    ผู้ยื่น <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <FormControl>
                                    <RadioGroup
                                        sx={{ marginLeft: '30px', marginTop: '5px' }}
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group-1"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="option5" control={<Radio />} label="มี" />
                                        <FormControlLabel value="option6" control={<Radio />} label="ไม่มี" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>


                            <Grid item xs={6} sm={6} md={3.5}>
                                <Typography sx={{ marginTop: '20px' }}>
                                    วันที่ยื่นคำขอ <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    variant="outlined"
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
                            <Grid item xs={6} sm={6} md={3.5} sx={{ marginTop: '20px', marginLeft: '50px' }}>
                                <Typography >
                                    วันที่ศาลมีคำสั่ง <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    variant="outlined"
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
                        </Grid>
                        <Grid container spacing={2}>
                            {/* Grid Item แรก */}
                            <Grid item xs={6} sm={6} md={3}>
                                <Typography sx={{ marginLeft: '30px', marginTop: '20px' }}>
                                    ทุเลาการบังคับคดี
                                </Typography>
                                <FormControl>
                                    <RadioGroup
                                        sx={{ marginLeft: '30px', marginTop: '5px' }}
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group-1"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="option7" control={<Radio />} label="อนุญาต" />
                                        <FormControlLabel value="option8" control={<Radio />} label="ไม่อนูญาต" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', }}>
                            <Link to="/page/AddEditAppeal" style={{ textDecoration: 'none' }} >
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', marginTop: '10px', color: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <AddIcon />   เพิ่ม
                                </Button>
                            </Link>
                            <Link to="/page/AddEditAppeal" style={{ textDecoration: 'none', marginLeft: '20px' }} >
                                <Button sx={{ marginTop: '10px', color: 'gray', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <ClearIcon />  ยกเลิก
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={6} md={12} sx={{ padding: '20px 10px' }}>
                        <AddApealTB />
                    </Grid>
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '20px' }} >ผู้รับผิดชอบ</Typography>
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

                        <Link to="/page/ฝ">
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                <SaveIcon /> บันทึก <span style={{ marginTop: '2px', marginLeft: '5px' }}></span>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddEditAppeal