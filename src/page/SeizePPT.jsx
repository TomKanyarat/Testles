import React, { useState } from 'react'
import SubHeader from '../component/SubHeader'
import { Grid, Typography, Divider, TextField, FormControl, Select, MenuItem, Box, Button } from '@mui/material'
import TestMenu from '../component/TestMenu';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import TBSeizePPT from '../TB/TBSeizePPT';

const SeizePPT = () => {
    const [value, setValue] = useState(''); // กำหนดค่าเริ่มต้นของ value

    const handleChange = (event) => {
        setValue(event.target.value); // อัปเดตค่าจาก input
    };
    return (

        <div style={{ backgroundColor: '#efefef', height: '100vh'}}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />

                <Box component="main" sx={{ overflow: 'auto' }}>
                    <SubHeader />
                    <SubHeader SeizePPT="ยื่นคำขอ อายัดทรัพย์/ยึดทรัพย์"
                    DeteilSeizePPT="ยึดทรัพย์"
                    SeizeMoney="อายัดเงิน/อายัดทรัพย์"
                    />

                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            height: 'auto',
                            padding: '15px',
                        }}>
                            <Typography sx={{ marginLeft: '15px' }}>ค้นหา</Typography>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                            <Grid container spacing={2} sx={{padding: '5px'}}>
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>เลขที่กฎหมาย</Typography>
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
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>เลขที่บัตรประชาชน</Typography>
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
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>ดคีหมายเลขดำ</Typography>
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
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>ดคีหมายเลขแดง</Typography>
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
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>ศาล</Typography>
                                    <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={value} // ค่า value ที่เลือกจาก dropdown
                                            onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                            displayEmpty
                                            inputProps={{
                                                'aria-label': 'สำนักงานทนายความที่รับผิดชอบ',
                                            }}
                                            sx={{
                                                height: '45px',
                                                '& .MuiInputBase-input': {
                                                    padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                },
                                            }}
                                        >
                                            <MenuItem value="firm1" >
                                                ตัวเลือก
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} sx={{ padding: '20px 20px' }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            height: 'auto',
                            padding: '15px',
                        }} >
                            <Typography sx={{ marginLeft: '15px' }}>ข้อมูล</Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                            <Link to="/page/FromSeizePPT">
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', color: 'white', marginTop: '10px' }}>
                                    <AddIcon /> เพิ่ม
                                </Button>
                            </Link>
                            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
                                <TBSeizePPT />
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default SeizePPT