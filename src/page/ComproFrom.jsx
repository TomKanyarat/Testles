import { useState } from 'react';
import Back from '../component/Back'
import { Grid, Box, Typography, Divider, TextField, InputAdornment, Button } from '@mui/material'
import DetailName from '../component/DetailName';
import { FormControl, MenuItem, Select } from '@mui/material';
import TabelFromCompro from '../TB/TabelFromCompro';
import ComproCapital from '../component/ComproCapital';
import HomeIcon from '@mui/icons-material/Home';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import download from '../Image/Export.png';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย


const ComproFrom = () => {
    const [value, setValue] = useState('option1');

    const [DateContract, setDateContract] = useState(null);


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Box sx={{ backgroundColor: '#efefef', height: 'auto' }}>
                <Back BackDetailCompromise="กลับ" />
                <Grid container spacing={1} sx={{ padding: '20px', }}>
                    <Grid item xs={12} sm={12} md={12}
                        sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            margin: 'auto',
                            height: 'auto',
                            padding: '20px',
                        }}
                    >
                        <DetailName />

                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }} >
                            สร้างสัญญาประนีประนอมยอมความ
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                        {/*start  */}
                        <Grid container spacing={1}>
                            <Grid item xs={5} sm={6} md={3} sx={{ marginTop: '5px', marginLeft: '20px' }}>
                                <Typography>ศาล <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={value} // ค่า value ที่เลือกจาก dropdown
                                        onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'สถานะ',
                                        }}
                                        sx={{
                                            height: '45px', // ความสูงเท่า TextField size="small"
                                            '& .MuiSelect-select': {
                                                padding: '10.5px 14px', // padding เท่า TextField
                                            },
                                        }}
                                    >

                                        <MenuItem value="firm1" >
                                            Active
                                        </MenuItem>
                                        <MenuItem value="firm2" >
                                            Closed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                                <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '40px', marginTop: '5px' }}>
                                    <Typography>วันที่ทำสัญญา <span style={{ color: 'red' }}>*</span></Typography>
                                    <DatePicker
                                        value={DateContract}
                                        onChange={(newValue) => setDateContract(newValue)}
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

                            <Grid item xs={5} sm={6} md={3.5} sx={{ marginTop: '5px', marginLeft: '20px' }}>
                                <Typography>คดีหมายเลขดำที่ </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="สป002/2563"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '5px', marginLeft: '20px' }}>
                                <TabelFromCompro />
                            </Grid>
                            {/* ทุนทรัพย์ */}
                            <ComproCapital />
                        </Grid>

                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }} >
                            การผ่อนชำระหนี้
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />

                        <Grid container spacing={1}>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px', }}>
                                <Typography>หลังลดเบี้ยปรับรวมเป็นจำนวนเงิน</Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="144,000.00"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px', }}>
                                <Typography>ภายในทุกวันที่ (ของทุกเดือน) <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={value} // ค่า value ที่เลือกจาก dropdown
                                        onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px', // ความสูงเท่า TextField size="small"
                                            '& .MuiSelect-select': {
                                                padding: '10.5px 14px', // padding เท่า TextField
                                            },
                                        }}
                                    >
                                        <MenuItem value="firm01" >
                                            Active
                                        </MenuItem>
                                        <MenuItem value="firm02" >
                                            Closed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px', }}>
                                <Typography>เดือนละ <span style={{ color: 'red' }}>*</span> </Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="50.00"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px' }}>
                                <Typography>ชำระเสร็จสิ้นภายในกำหนดระยะเวลา (ปี) <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
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
                                        <MenuItem value="month1" >
                                            1
                                        </MenuItem>
                                        <MenuItem value="month2" >
                                            2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px', }}>
                                <Typography>อัตราดอกเบี้ยร้อยละ *ตลอดจนการชำระเสร็จสิ้นแก่โจทก์</Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="144,000.00"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '5px', }}>
                                <Typography>เบี้ยปรับร้อยละ *กรณีผิดนัดไม่ชำระหนี้</Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="144,000.00"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8', padding: '20px' }} />

                        <Grid container spacing={1}>
                            <Grid item xs={5} sm={6} md={4} sx={{ marginTop: '28px', marginLeft: '35px' }}>
                                <Typography>
                                    ค่าทนายความ
                                </Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="0.00"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,
                                        endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                                    }}
                                />
                            </Grid>

                            <Grid item xs={5} sm={6} md={3.5} sx={{ marginTop: '28px', marginLeft: '35px' }}>
                                <Typography>
                                    ประเภทคำฟ้อง
                                </Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="กยศ.แบบแยกรับผิด"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        readOnly: true,

                                    }}
                                />
                            </Grid>
                            <Grid item xs={5} sm={6} md={3.5} sx={{ marginTop: '28px', marginLeft: '35px' }}>
                                <Typography>
                                    เงื่อนไขเพิ่มเติม
                                </Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    rows={4}
                                    multiline
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '5px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{


                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={5} sm={5} md={12} sx={{ textAlign: 'center', marginTop: '15px' }}>
                            <Button sx={{ backgroundColor: '#efefef', boxShadow: '0px 4px 6px rgba(0,0,0,0.3)', marginLeft: '10px', color: 'gray' }}>
                                <HomeIcon sx={{ marginTop: '-5px' }}></HomeIcon> <span style={{
                                    marginLeft: '5px'
                                }}>กลับหน้าแรก</span>
                            </Button>
                            <Button sx={{ background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0,0,0,0.3)', marginLeft: '10px', color: 'white' }}>
                                <SaveIcon></SaveIcon><span style={{
                                    marginLeft: '10px'
                                }}>บันทึก</span>
                            </Button>
                            <Button sx={{ backgroundColor: '#efefef', boxShadow: '0px 4px 6px rgba(0,0,0,0.3)', marginLeft: '10px', color: 'gray' }}>
                                <PrintIcon sx={{ marginTop: '-5px' }}></PrintIcon> <span style={{
                                    marginLeft: '5px'
                                }}>พิมพ์ตัวอย่างสัญญา</span>
                            </Button>
                            <Button sx={{ backgroundColor: '#efefef', boxShadow: '0px 4px 6px rgba(0,0,0,0.3)', marginLeft: '10px', color: 'gray' }}>
                                <img src={download} style={{ width: '22px', height: '22px' }} alt="download"></img> Export to Word
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default ComproFrom