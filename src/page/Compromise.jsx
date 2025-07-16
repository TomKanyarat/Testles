import React, { useState } from 'react';
import SubHeader from '../component/SubHeader'
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { FormControl, MenuItem, Select } from '@mui/material';
// import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import TabelCompromise from '../TB/TabelCompromise';
import TestMenu from '../component/TestMenu';

const Compromise = () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Box
                sx={{
                    justifyContent: 'center', // จัดให้อยู่กึ่งกลางในแนวนอน
                    alignItems: 'center', // จัดให้อยู่กึ่งกลางในแนวตั้ง
                    height: '100vh', // ใช้ความสูงเต็มหน้าจอ
                    backgroundColor: '#EFEFEF', // พื้นหลังสีเทาอ่อน (ถ้าต้องการ)
                }}
            >
                <Box sx={{ display: 'flex' }}>
                    <TestMenu />

                    <Box component="main" sx={{overflow: 'auto' }}>
                        <SubHeader />
                        <SubHeader textheader="สร้างคำฟ้อง" textll="สร้างสัญญาประนีประนอมยอมความ" />

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
                            ><Typography sx={{ marginLeft: '15px' }} >
                                    ค้นหา
                                </Typography>
                                <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />

                                <Grid container spacing={2} sx={{padding: '5px'}}>
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
                                    <Grid item xs={12} sm={6} md={3} >
                                        <Typography>  สำนักงานทนายความที่รับผิดชอบ </Typography>
                                        <FormControl variant="outlined" fullWidth>
                                            <Select
                                                value={value} // ค่า value ที่เลือกจาก dropdown
                                                onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                                displayEmpty
                                                inputProps={{
                                                    'aria-label': 'สำนักงานทนายความที่รับผิดชอบ',
                                                }}
                                                sx={{
                                                    height: '45px', // ความสูงเท่า TextField size="small"
                                                    '& .MuiSelect-select': {
                                                        padding: '10.5px 14px', // padding เท่า TextField
                                                    },
                                                }}
                                            >
                                                <MenuItem value="firm1" >
                                                    อรุณสวัสดิ์
                                                </MenuItem>
                                                <MenuItem value="firm2" >
                                                    ทนายบุญ
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

                        <Grid container spacing={1} sx={{ padding: '20px', }}>
                            <Grid item xs={12} sm={12} md={12} sx={{
                                borderRadius: '5px', backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', margin: 'auto',
                                height: 'auto',
                                padding: '20px',
                            }}>
                                <Typography sx={{ marginLeft: '15px' }} >
                                    รายการสัญญาประนีประนอมยอมความ
                                </Typography>
                                <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px', }} >
                                    <TabelCompromise />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Compromise;