import React, { useState } from 'react';
import Back from '../component/Back';
import { Box, Button, Divider, Grid, TextField, Typography, FormControl, Select, MenuItem } from '@mui/material';
// import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
// import TBSeizeAssets from '../TB/TBSeizeAssets';
import SaveIcon from '@mui/icons-material/Save'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย

function CancelContractFrom() {
    const [value, setValue] = useState('name');

    const [DatePrint, setDatePrint] = useState(null);
    const [DateBurden, setDateBurden] = useState(null);
    const [PaymentDueDate, setPaymentDueDate] = useState(null);
    const [DateDocument, setDateDocument] = useState(null);
    const [PostalLicense, setPostalLicense] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Back BackCancelContract="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>

                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}> สร้างหนังสือบอกเลิกสัญญา</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={2} >
                        <Grid item xs={6} sm={4} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>เลขที่กฎหมาย : 2563000000019</Typography>

                        </Grid>
                        <Grid item xs={6} sm={4} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>CIF No. : 2563000000001</Typography>

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>เลขที่บัตรประชาชน : 1100800559441</Typography>

                        </Grid>
                        <Grid item xs={6} sm={4} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>ชื่อ-นามสกุล : นางสาวGGG</Typography>

                        </Grid>
                    </Grid>

                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ข้อมูลสร้างหนังสือขอให้ชำระหนี้ และบอกเลิกสัญญา</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Typography>เลขที่หนังสือบอกเลิกสัญญา<span style={{ color: 'red' }}>*</span></Typography>
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
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={6} md={4} >
                                <Typography>วันที่พิมพ์<span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DatePrint}
                                    onChange={(newValue) => setDatePrint(newValue)}
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
                            <Grid item xs={12} sm={6} md={4} >
                                <Typography>ภาระหนี้ผู้กู้ ณ วันที่<span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateBurden}
                                    onChange={(newValue) => setDateBurden(newValue)}
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
                            <Grid item xs={12} sm={6} md={4} >
                                <Typography> กำหนดชำระภายในวันที่ <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={PaymentDueDate}
                                    onChange={(newValue) => setPaymentDueDate(newValue)}
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
                            <Grid item xs={12} sm={6} md={4} >
                                <Typography>วันที่ส่งเอกสาร<span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateDocument}
                                    onChange={(newValue) => setDateDocument(newValue)}
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
                            <Grid item xs={12} sm={6} md={4} >
                                <Typography>เลขที่ใบอนุญาต ปณ. (ชำระค่าฝากส่งเป็นรายเดือน)<span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={PostalLicense}
                                    onChange={(newValue) => setPostalLicense(newValue)}
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
                    </Grid>

                    <Divider sx={{ borderColor: '#1530A8', marginTop: '30px' }} />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}> ผู้กู้</Typography>
                    <Typography sx={{ padding: '20px 50px', fontWeight: 'bold' }}>ชื่อ-นามสกุล: นางสาวGGG</Typography>

                    <Box
                        display="flex"
                        justifyContent="center">

                        <Grid item xs={10} sm={10} md={10}
                            sx={{
                                borderRadius: '5px',
                                backgroundColor: '#397FD1',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                                padding: '15px',
                            }}>

                            <Typography sx={{ padding: '20px 20px', color: 'white' }}>ที่อยู่ตามทะเบียนราษฎร์: 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300</Typography>
                            <Divider sx={{ borderColor: 'white' }} />

                            <Typography sx={{ padding: '20px 20px', color: 'white' }}>ที่อยู่ที่ติดต่อได้: 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300 </Typography>
                            <Divider sx={{ borderColor: 'white' }} />
                            <Typography sx={{ padding: '20px 20px', color: 'white' }}>ที่อยู่ที่ทำงาน:  121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300: 121/3 ถ.ริมทางรถไฟสายแปดริ้ว แขวงสี่แยกมหานาค เขตดุสิต กรุงเทพมหานคร 10300 </Typography>

                        </Grid>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3.5} sx={{ marginLeft: '40px', marginTop: '30px' }}>
                            <Typography>เลขที่ทะเบียนไปรษณีย์สำหรับหนังสือบอกเลิกสัญญา<span style={{ color: 'red' }}>*</span></Typography>
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
                        <Grid item xs={12} sm={6} md={3.5} sx={{ marginLeft: '40px', marginTop: '30px' }}>
                            <Typography>เลขที่ทะเบียนไปรษณีย์สำหรับใบตอบรับ<span style={{ color: 'red' }}>*</span></Typography>
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

                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span> </Typography>
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
                                    <MenuItem value="company1" >
                                        นานา
                                    </MenuItem>
                                    <MenuItem value="company1" >
                                        นีนี
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography> ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span> </Typography>
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
                        </Grid>
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

export default CancelContractFrom