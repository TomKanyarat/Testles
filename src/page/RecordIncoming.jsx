import React, { useState } from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, TextField, Typography, FormControl, Select, MenuItem, FormControlLabel, RadioGroup, Radio, Box, InputBase, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย
import TBRecordIncoming from '../TB/TBRecordIncoming';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

function RecordIncoming() {
    const [value, setValue] = useState('name');

    const [DatePrint, setDatePrint] = useState(null);
    const [DateBurden, setDateBurden] = useState(null);
    const [PaymentDueDate, setPaymentDueDate] = useState(null);
    const [DateDocument, setDateDocument] = useState(null);
    const [DateRespond, setDateRespond] = useState(null);


    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
            <Back BackCancelContract="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>

                    <Typography sx={{ marginLeft: '15px', }}> บันทึกผลการจัดส่งหนังสือบอกเลิกสัญญาและแบบตอบรับทางไปรษณย์ไปยังลูกหนี้</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px', }}>
                            <Typography>เลขที่หนังสือบอกเลิกสัญญา <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px',  // กำหนดความสูงให้เหมาะสม

                                    },
                                }}
                            />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                                <Typography>วันที่พิมพ์ <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DatePrint}
                                    onChange={(newValue) => setDatePrint(newValue)}

                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: {
                                                '& .MuiInputBase-root': {
                                                    height: '45px', // ปรับ input field ด้วย
                                                }
                                            }
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                                <Typography>ภาระหนี้ผู้กู้ ณ วันที่ <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateBurden}
                                    onChange={(newValue) => setDateBurden(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: {
                                                '& .MuiInputBase-root': {
                                                    height: '45px', // ปรับ input field ด้วย
                                                }
                                            }
                                        },
                                    }}

                                />
                            </Grid>
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                                <Typography> กำหนดชำระภายในวันที่ <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={PaymentDueDate}
                                    onChange={(newValue) => setPaymentDueDate(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: {
                                                '& .MuiInputBase-root': {
                                                    height: '45px', // ปรับ input field ด้วย
                                                }
                                            }
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>
                    </Grid>

                    <Grid container spacing={2}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                                <Typography>วันที่ส่งเอกสาร <span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateDocument}
                                    onChange={(newValue) => setDateDocument(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: {
                                                '& .MuiInputBase-root': {
                                                    height: '45px', // ปรับ input field ด้วย
                                                }
                                            }
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>

                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                            <Typography sx={{ marginLeft: '15px', }}>สถานที่จัดส่ง</Typography>
                            <TBRecordIncoming />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                            <Typography sx={{ marginLeft: '15px', }}>ผลการส่งหนังสือบอกเลิกสัญญา <span style={{ color: 'red' }}>*</span></Typography>

                            <FormControl sx={{ marginLeft: '15px' }}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="Yes"
                                        control={<Radio />}
                                        label="ได้รับใบตอบรับแล้ว"
                                    />

                                    <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                ไม่ได้รับใบตอบรับ เนื่องจาก
                                                <InputBase
                                                    // placeholder="ระบุสาเหตุ"
                                                    sx={{
                                                        ml: 1,
                                                        borderBottom: '1px dashed gray',
                                                        width: '400px',
                                                        fontSize: '14px',
                                                        padding: '2px'
                                                    }}
                                                />
                                            </Box>
                                        }
                                    />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '30px', }}>
                            <Typography>เลขที่ทะเบียนไปรษณีย์สำหรับหนังสือบอกเลิกสัญญา</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px',  // กำหนดความสูงให้เหมาะสม

                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '30px' }}>
                            <Typography>เลขที่ทะเบียนไปรษณีย์สำหรับใบตอบรับ</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px',  // กำหนดความสูงให้เหมาะสม

                                    },
                                }}
                            />
                        </Grid>

                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '30px', }}>
                                <Typography>วันที่รับใบตอบรับหนังสือบอกเลิกสัญญา </Typography>
                                <DatePicker
                                    value={DateRespond}
                                    onChange={(newValue) => setDateRespond(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            variant: 'outlined',
                                            sx: {
                                                '& .MuiInputBase-root': {
                                                    height: '45px', // ปรับ input field ด้วย
                                                }
                                            }

                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>
                    </Grid>

                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>เอกสารประกอบการเบิกค่าธรรมเนียม/ค่าใช้จ่ายอื่นๆ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                            <Typography>ประเภทค่าใช้จ่าย/ค่าธรรมเนียม <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px',  // กำหนดความสูงให้เหมาะสม

                                    },
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                            <Typography>จำนวนเงิน <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                type='number'
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px'
                                    }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                }}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                            <Typography>ใบเสร็จเล่มที่ <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px'
                                    }
                                }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ marginTop: '5px' }}>
                            <Typography>ใบเสร็จเลขที่ <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '11px'
                                    }
                                }}
                            />
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

                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                            <Typography> ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span> </Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={value} // ค่า value ที่เลือกจาก dropdown
                                    onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                    displayEmpty
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '45px',
                                            padding: '0 8px', // เพิ่ม padding ในช่อง
                                            lineHeight: '40px', // เพิ่ม line height เพื่อขยับข้อความลง
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
                        <Grid item xs={12} sm={12} md={4} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                            <Typography> ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span> </Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={value} // ค่า value ที่เลือกจาก dropdown
                                    onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                    displayEmpty
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '45px',
                                            padding: '0 8px', // เพิ่ม padding ในช่อง
                                            lineHeight: '40px', // เพิ่ม line height เพื่อขยับข้อความลง
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

export default RecordIncoming