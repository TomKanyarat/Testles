import React, { useState } from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, Typography, FormControl, Select, MenuItem, TextField } from '@mui/material';
import DetailName from '../component/DetailName';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';

const FromResultFirst = () => {
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
                        ผลการดำเนินคดีศาลชั้นต้น
                    </Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />

                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>คดีหมายเลขแดง <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                value={caseRedNumber}
                                onChange={(e) => setCaseRedNumber(e.target.value)}
                                error={caseRedError}
                                helperText={caseRedError ? 'กรุณากรอกหมายเลขแดง' : ''}
                                fullWidth
                                sx={{ '& .MuiInputBase-input': { height: '11px' } }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>ประเภทคำพิพากษา/คำสั่ง <span style={{ color: 'red' }}>*</span></Typography>
                            <FormControl fullWidth error={typeError}>
                                <Select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    displayEmpty
                                    sx={{ height: '45px' }}
                                >
                                    <MenuItem value=""><em>เลือก</em></MenuItem>
                                    <MenuItem value="ฝ่ายคดี">ฝ่ายคดี</MenuItem>
                                </Select>
                                {typeError && <Typography color="error" fontSize={12}>กรุณาเลือกสังกัด</Typography>}
                            </FormControl>
                        </Grid>
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
        </div>
    );
};

export default FromResultFirst;
