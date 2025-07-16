import React, { useState } from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, Typography, FormControl, Select, MenuItem } from '@mui/material';
import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย

const FromAuction = () => {
    const [value, setValue] = useState('name');
    const [DateAuction, setDateAuction] = useState(null);
    const [DueDate, setDueDate] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackDetailAuction="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px' }}>
                <Grid item xs={12} sm={12} md={12} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    height: 'auto',
                    padding: '15px'
                }} >
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '15px' }}>
                        ชะลอขายทอดตลาด
                    </Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                                <Typography> วันที่ชะลอการขายทอด <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateAuction}
                                    onChange={(newValue) => setDateAuction(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: { height: '45px' },
                                            InputProps: { sx: { height: '45px' } },
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                                <Typography>วันที่ครบกำหนดวันที่ชะลอการขายทอดตลาด <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DueDate}
                                    onChange={(newValue) => setDueDate(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: { height: '45px' },
                                            InputProps: { sx: { height: '45px' } },
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>

                        <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> เหตุผลชะลอการขายทอดตลาด <span style={{ color: 'red' }}>*</span> </Typography>
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
                                    <MenuItem value="Reason" >
                                        ไม่รู้
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/*  */}
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }} >ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                        <Typography>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span>
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
                                    <MenuItem value="Name1" >
                                        คดี
                                    </MenuItem>
                                </Select>
                            </FormControl></Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                        <Typography>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span>
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
                                    <MenuItem value="name2" >
                                        คุณหญิง
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
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

export default FromAuction