import React, { useState } from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, Typography, FormControl, Select, MenuItem, TextField, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import DetailName from '../component/DetailName';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย

const FromFirstDegreeeCase = () => {
    const [caseRedNumber, setCaseRedNumber] = useState('');
    const [caseRedError, setCaseRedError] = useState(false);

    const [unit, setUnit] = useState('');
    const [unitError, setUnitError] = useState(false);

    const [person, setPerson] = useState('');
    const [personError, setPersonError] = useState(false);

    const [type, setType] = useState('');
    const [typeError, setTypeError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        let valid = true;

        if (!caseRedNumber.trim()) {
            setCaseRedError(true);
            valid = false;
        } else {
            setCaseRedError(false);
        }

        if (!unit) {
            setUnitError(true);
            valid = false;
        } else {
            setUnitError(false);
        }

        if (!person) {
            setPersonError(true);
            valid = false;
        } else {
            setPersonError(false);
        }

        if (!type) {
            setTypeError(true);
            valid = false;
        } else {
            setTypeError(false);
        }
        if (valid) {
            // submit สำเร็จ -> ไปหน้าอื่น
            navigate('/page/');
        }
    };
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [otherText, setOtherText] = useState('');
    const [DatePrint, setDatePrint] = useState(null);
    const [DateReceive, setDateReceive] = useState(null);
    const [PaymentDueDate, setPaymentDueDate] = useState(null);
    const [DateDocument, setDateDocument] = useState(null);
    const [PostalLicense, setPostalLicense] = useState(null);

    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Back BackFromAnnounceAuction="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px' }}>
                <Grid item xs={12} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    padding: '15px'
                }}>
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '15px' }}>
                        ออกคำบังคับคดีชั้นต้น
                    </Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>วันที่ยื่นขอออกบังคับคดี<span style={{ color: 'red' }}>*</span></Typography>
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

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>จำเลย <span style={{ color: 'red' }}>*</span></Typography>
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

                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <Grid item xs={12} sm={6} md={3.5} >
                            <Typography>ผลการนำส่งคำบังคับคดี <span style={{ color: 'red' }}>*</span></Typography>
                            <RadioGroup
                                row
                                aria-labelledby="send-status-label"
                                name="sendStatus"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="canSend" control={<Radio />} label="ส่งได้" />
                                <FormControlLabel value="cannotSend" control={<Radio />} label="ส่งไม่ได้" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography>วิธีการส่ง <span style={{ color: 'red' }}>*</span></Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                                <RadioGroup
                                    row
                                    name="sendStatus"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="close" control={<Radio />} label="ปิดหมาย" />
                                    <FormControlLabel value="place" control={<Radio />} label="วางหมาย" />
                                    <FormControlLabel value="receive" control={<Radio />} label="รับหมาย" />
                                    <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
                                </RadioGroup>

                                {value === 'other' && (
                                    <TextField
                                        size="small"
                                        placeholder="กรุณาระบุ"
                                        value={otherText}
                                        onChange={(e) => setOtherText(e.target.value)}
                                        sx={{ width: 300 }}
                                    />
                                )}
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>วันที่รับคำบังคับคดี<span style={{ color: 'red' }}>*</span></Typography>
                                <DatePicker
                                    value={DateReceive}
                                    onChange={(newValue) => setDateReceive(newValue)}
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

                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '30px' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid item xs={12} sm={5} md={3.5} sx={{ padding: '5px 20px' }}>
                        <Typography>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span></Typography>
                        <FormControl fullWidth error={unitError}>
                            <Select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                displayEmpty
                                sx={{ height: '45px' }}
                            >
                                <MenuItem value=""><em>เลือก</em></MenuItem>
                                <MenuItem value="ฝ่ายคดี">ฝ่ายคดี</MenuItem>
                            </Select>
                            {unitError && <Typography color="error" fontSize={12}>กรุณาเลือกสังกัด</Typography>}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={5} md={3.5} sx={{ padding: '5px 20px' }}>
                        <Typography>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span></Typography>
                        <FormControl fullWidth error={personError}>
                            <Select
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                                displayEmpty
                                sx={{ height: '45px' }}
                            >
                                <MenuItem value=""><em>เลือก</em></MenuItem>
                                <MenuItem value="คุณหญิง">คุณหญิง</MenuItem>
                            </Select>
                            {personError && <Typography color="error" fontSize={12}>กรุณาเลือกผู้รับผิดชอบ</Typography>}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'center', padding: '20px' }}>
                        <Button
                            onClick={handleSubmit}
                            sx={{ color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}
                        >
                            <SaveIcon /> <span style={{ marginLeft: '5px' }}>บันทึก</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
};

export default FromFirstDegreeeCase;
