import React, { useState } from 'react';
import SubHeader from '../component/SubHeader';
import { Grid, Typography, TextField, Select, MenuItem, FormControl, Divider, Box } from '@mui/material';
import TBResultSPL from '../TB/TBResultSPL';
import TestMenu from '../component/TestMenu';
const ResultSupremeLaw = () => {
    const [value, setValue] = useState(''); // กำหนดค่าเริ่มต้นของ value

    const handleChange = (event) => {
        setValue(event.target.value); // อัปเดตค่าจาก input
    };
    return (
        <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />

                <Box component="main" sx={{ overflow: 'auto' }}>
                    <SubHeader />
                    <SubHeader SupremeLaw="ยื่นฎีกา"
                        ResultSupremeLaw="ผลพิจารณาอนุมัติยื่นฎีกา/งดฎีกา"
                        EditSupremeLaw="ยื่น/แก้ฎีกา"
                        ProsecutionSupremeLaw="ผลการดำเนินคดี"
                        WarrantSupremeLaw="ออกหมายบังคับคดี" />

                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            margin: 'auto',
                            height: 'auto',
                            padding: '15px',
                        }}>
                            <Typography sx={{ marginLeft: '15px' }}>ค้นหา</Typography>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                            <Grid container spacing={2} sx={{padding: '5px'}}>
                                <Grid item xs={12} sm={6} md={3}>
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
                                <Grid item xs={12} sm={6} md={3}>
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
                                <Grid item xs={12} sm={6} md={3}>
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
                                <Grid item xs={12} sm={6} md={3}>
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
                                <Grid item xs={12} sm={6} md={3}>
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
                                                '& .MuiInputSelect-Select': {
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
                            margin: 'auto',
                            height: 'auto',
                            padding: '15px',
                        }} >

                            <Typography sx={{ marginLeft: '15px' }}>ข้อมูล</Typography>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px', }}>
                                    <TBResultSPL />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default ResultSupremeLaw