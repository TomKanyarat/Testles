import React, { useState } from 'react';
import SubHeader from '../component/SubHeader';
import TestMenu from '../component/TestMenu';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Divider, TextField, FormControl, Select, MenuItem, Button } from '@mui/material';
import TBSeizeMoney from '../TB/TBSeizeMoney';
import AddIcon from '@mui/icons-material/Add'

function SeizeMoney() {
    const [value, setValue] = useState('name');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div style={{ backgroundColor: '#efefef',height: '100vh' }}>
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
                                    <Typography>คดีหมายเลขดำ</Typography>
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
                                    <Typography>คดีหมายเลขแดง</Typography>
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
                                    <Typography>สถานะการดำเนินคดีในปัจจุบัน</Typography>
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
                                                '& .MuiInputSelect-Select': {
                                                    padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                },
                                            }}
                                        >
                                            <MenuItem value="status" >
                                                ตัวเลือก
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>CIF No.</Typography>
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
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            height: 'auto',
                            padding: '15px',
                        }}>
                            <Typography sx={{ marginLeft: '15px' }}>อายัดเงิน/อายัดทรัพย์</Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                            <Link to="/page/FromSeizeMoney" style={{ textDecoration: 'none' }}>
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <AddIcon />อายัดเงิน
                                </Button>
                            </Link>
                            <Link to="/page/FromSeizeAssets" style={{ textDecoration: 'none' }}>
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', marginLeft: '20px' }}>
                                    <AddIcon />อายัดทรัพย์
                                </Button>
                            </Link>
                            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                                <TBSeizeMoney />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </div>
    )
}

export default SeizeMoney