import React, { useState } from 'react';
import SubHeader from '../component/SubHeader'
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { FormControl, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import Divider from '@mui/material/Divider';
import TabelSue from '../TB/TabelSue'
import TestMenu from '../component/TestMenu';

const Sue = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />
                <Box component="main" sx={{ overflowX: 'auto', }}>
                    <SubHeader />
        <SubHeader text="หน้าหลัก" />
                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            height: 'auto',
                            padding: '15px',
                        }}>

                            <Typography sx={{
                                marginLeft: '15px'
                            }}>
                                ค้นหา
                            </Typography>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />


                            <Grid container spacing={2} sx={{ padding: '5px' }}>
                                <Grid item xs={12} sm={6} md={3} >
                                    <Typography>เลขที่กฎหมาย</Typography>
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
                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>คดีหมายเลขแดง</Typography>
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
                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>  สถานะ </Typography>
                                    <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={value} // ค่า value ที่เลือกจาก dropdown
                                            onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                            displayEmpty
                                            inputProps={{
                                                'aria-label': 'สถานะ',
                                            }}
                                            sx={{
                                                height: '45px',
                                                '& .MuiSelect-Select': {
                                                    padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                },
                                            }}
                                        >
                                            <MenuItem value="status1" >
                                                Active
                                            </MenuItem>
                                            <MenuItem value="status2" >
                                                Closed
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>เลขที่บัตรประชาชน</Typography>
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
                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>CIF No.</Typography>
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
                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>  สำนักงานทนายความที่รับผิดชอบ </Typography>
                                    <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={value} // ค่า value ที่เลือกจาก dropdown
                                            onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                            displayEmpty
                                            inputProps={{
                                                'aria-label': 'สถานะ',
                                            }}
                                            sx={{
                                                height: '45px',
                                                '& .MuiSelect-Select': {
                                                    padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                },
                                            }}
                                        >
                                            <MenuItem value="company1" >
                                                Active
                                            </MenuItem>
                                            <MenuItem value="company2" >
                                                Closed
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', marginTop: '10px' }} >

                                    <Link to="/page/">
                                        <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                            <SearchIcon></SearchIcon> <span style={{ marginTop: '2px', marginLeft: '5px' }}>ค้นหา</span>
                                        </Button>
                                    </Link>
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
                            <TabelSue />
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </div>
    )
}

export default Sue