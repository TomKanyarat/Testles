// import React, {useState} from 'react';
import Back from '../component/Back';
import { Button, Divider, Grid, TextField, Typography, } from '@mui/material';
import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
import TBSeizeAssets from '../TB/TBSeizeAssets';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SaveIcon from '@mui/icons-material/Save'
function FromSeizePPT() {
    // const [value, setValue] = useState('name');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // } 
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
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', marginTop: '30px', fontWeight: 'bold' }}>อายัดทรัพย์</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> ข้อมูลทรัพย์ที่จะยึด 
                            </Typography>
                        
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            
                        <TBSeizeAssets/>
                        </Grid>
                         <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography> วันที่เริ่มอายัด <span style={{ color: 'red' }}>*</span>
                         
                        <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '5px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}

                            /> </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                            <Typography>สำนักงานบังคับคดีทั่วประเทศ<span style={{ color: 'red' }}>*</span>
                         
                        <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '5px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}

                            /> </Typography>
                        </Grid>
                    </Grid>


                    <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                        <Typography>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '5px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}

                            /></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3.5} sx={{ marginLeft: '30px', marginTop: '5px' }}>
                        <Typography>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '5px', // กำหนดความสูงให้เหมาะสม
                                    },
                                }}

                            /></Typography>
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

export default FromSeizePPT