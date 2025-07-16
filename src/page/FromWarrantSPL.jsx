import React, { useState } from 'react'
import { Divider, Grid, Typography, TextField, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import Back from '../component/Back';
import DetailName from '../component/DetailName';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const DetailProsecuSPL = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
            <Back BackWarrantSPL="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={5} sm={10} md={11} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    height: 'auto',
                    padding: '15px',
                }}>
                    <DetailName />
                    <Grid container spacing={1} sx={{ marginTop: '25px' }}>
                        <Grid item xs={6} sm={6} md={12}>
                            <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                                ออกบังคับคดีชั้นฎีกา
                            </Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>วันที่ยื่นขอออกบังคับคดี <span style={{ color: 'red' }}>*</span>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        placeholder="15/01/25663"
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
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>จำเลย <span style={{ color: 'red' }}>*</span>
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
                        {/*  */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>ผลการนำส่งคำบังคับคดี <span style={{ color: 'red' }}>*</span></Typography>
                                <FormControl>
                                    <RadioGroup
                                        sx={{ marginTop: '5px' }}
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group-1"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="option0" control={<Radio />} label="ส่งได้" />
                                        <FormControlLabel value="option11" control={<Radio />} label="ส่งไม่ได้" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5} md={5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>วิธีการส่ง <span style={{ color: 'red' }}>*</span></Typography>
                                <FormControl>
                                    <RadioGroup
                                        sx={{ marginTop: '5px' }}
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group-1"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="off" control={<Radio />} label="ปิดหมาย" />
                                        <FormControlLabel value="place" control={<Radio />} label="วางหมาย" />
                                        <FormControlLabel value="option12" control={<Radio />} label="รับหมาย" />
                                        <FormControlLabel value="option13" control={<Radio />} label="อื่นๆ" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {/*  */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>วันที่รับคำบังคับคดี <span style={{ color: 'red' }}>*</span></Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="15/01/25663"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"
                                        ></CalendarMonthIcon>,
                                    }} />
                            </Grid>
                            <Grid item xs={12} sm={5} md={3.5} sx={{ marginTop: '10px', marginLeft: '30px' }}>
                                <Typography>วันที่คำบังคับคดีครบกำหนด</Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder="15/01/25663"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }} InputProps={{
                                        endAdornment: <CalendarMonthIcon position="end"
                                        ></CalendarMonthIcon>,
                                    }} />

                            </Grid>
                        </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spacing={2} sx={{marginTop: '20px'}}>
                        <Grid item xs={6} sm={6} md={12}>
                            <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                                เอกสารประกอบการเบิกค่าธรรมเนียม / ค่าใช้จ่ายอื่นๆ
                            </Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    )
}

export default DetailProsecuSPL