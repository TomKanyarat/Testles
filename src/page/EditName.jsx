
import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, Divider, TextField, Button } from '@mui/material';
import { FormControl, Select, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SaveIcon from '@mui/icons-material/Save';
const EditName = () => {
    const location = useLocation()

    const isActiveLink = (path) => location.pathname === path

    const [value, setValue] = useState(''); // กำหนดค่าเริ่มต้นของ value

    const handleChange = (event) => {
        setValue(event.target.value); // อัปเดตค่าจาก input
    };


    return (
        <div >
            <Box sx={{
                backgroundColor: 'white',
                borderRadius: '5px',
                width: '100%',
                height: '50px',
                padding: '30px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
            }}>
                <Typography sx={{ marginTop: '-20px', display: 'flex', alignItems: 'center' }}>
                    <Link
                        to="/page/SueFrom"
                        style={{
                            marginTop: '10px',
                            display: 'flex',  // ใช้ flex เพื่อให้ไอคอนและข้อความอยู่ในแถวเดียวกัน
                            alignItems: 'center',  // จัดตำแหน่งให้ไอคอนและข้อความอยู่ในระดับเดียวกัน
                            marginLeft: '10px',  // ลดระยะห่างระหว่างไอคอนกับข้อความ
                            textDecoration: isActiveLink('/page/Sue') ? 'underline' : 'none',
                            color: isActiveLink('/page/Sue') ? '#1530A8' : 'black', // เปลี่ยนสีเป็นน้ำเงินเมื่อคลิกอยู่, สีดำเมื่อไม่คลิก
                        }}
                    >
                        <ArrowBackIcon sx={{ marginRight: '5px' }} /> {/* ปรับระยะห่างระหว่างไอคอนและข้อความ */}
                        กลับ
                    </Link>
                </Typography>


            </Box>

            <Grid container sx={{ backgroundColor: '#efefef', padding: '15px' }}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        height: 'auto',
                        padding: '15px',
                    }}
                >
                    <Typography >
                        รายละเอียดเลขที่กฎหมาย
                    </Typography>
                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                    <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold', marginTop: '5px' }}>เลขที่กฎหมาย: 2563000000019</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={2} >
                            <Typography> เลขที่บัตรประชาชน </Typography>
                            <Typography>  31017018***** </Typography>

                        </Grid>

                        <Grid item xs={6} sm={4} md={2} >
                            <Typography> CIF No. </Typography>
                            0000002417221
                        </Grid>
                        <Grid item xs={6} sm={4} md={2} >
                            <Typography> ชื่อ-สกุล </Typography>
                            นางสาวGGG
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> สถานะการดำเนินคดีปัจจุบัน </Typography>
                            -----
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> คดีหมายเลขดำ/คดีหมายเลขแดง </Typography>
                            --/--
                        </Grid>
                    </Grid>
                </Grid>
                {/* Grid แก้ไขข้อมูลจำเลย */}
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        height: 'auto',
                        padding: '15px',
                        marginTop: '20px',
                    }}
                >
                    <Typography >
                        แก้ไขข้อมูลจำเลย
                    </Typography>
                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                    <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                        <Grid item xs={6} sm={4} md={3}>
                            <Typography sx={{ fontWeight: 'bold', marginTop: '5px' }}>ชื่อ-นามสกุลจำเลย</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value="นางสาว KKK" // ข้อความที่จะแสดงในฟิลด์และไม่สามารถแก้ไขได้
                                InputProps={{
                                    readOnly: true, // กำหนดให้ฟิลด์เป็นแบบอ่านอย่างเดียว
                                }}
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                        backgroundColor: '#efefef',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> คำนำหน้า  <span style={{ color: 'red' }}>*</span> </Typography>
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={value} // ค่า value ที่เลือกจาก dropdown
                                    onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'สำนักงานทนายความที่รับผิดชอบ',
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {

                                            padding: '0 8px', // เพิ่ม padding ในช่อง
                                            lineHeight: '40px', // เพิ่ม line height เพื่อขยับข้อความลง
                                        },
                                    }}
                                >
                                    <MenuItem value="firm1" >
                                        นางสาว
                                    </MenuItem>
                                    <MenuItem value="firm2" >
                                        นาง
                                    </MenuItem><MenuItem value="firm3" >
                                        นาย
                                    </MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography>ชื่อ  <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> นามสุกล  <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> เลขที่  <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> หมู่ที่ </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> ถนน </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> ตำบล/แขวง <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> อำเภอ/เขต  <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> จังหวัด  <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> รหัสไปรษณี <span style={{ color: 'red' }}>*</span> </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={{

                                    '& .MuiInputBase-input': {
                                        height: '5px',  // กำหนดความสูงให้เหมาะสม
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} >
                            <Typography> หมายเหตุ  <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline // เปิดใช้งาน textarea
                                rows={4} // กำหนดจำนวนบรรทัดที่แสดงใน textarea
                                sx={{
                                    '& .MuiInputBase-input': {
                                        height: 'auto', // ให้ความสูงปรับอัตโนมัติตามเนื้อหา
                                        lineHeight: 1.5, // เพิ่มระยะห่างระหว่างบรรทัด
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* Button */}
                    <Grid item xs={12} sm={12} md={12} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10px', marginTop: '20px' }} >
                        <Link to="/page/Sue">
                            <Button
                                sx={{
                                    alignItems: 'center', color: 'gray', backgroundColor: '#efefef', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)', marginRight: '10px'
                                }}>
                                <HomeIcon></HomeIcon> <span style={{ marginTop: '2px', marginLeft: '5px' }}>กลับหน้าหลัก</span>
                            </Button>
                        </Link>
                        <Link to="/page/">
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                                <SaveIcon></SaveIcon> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </Grid>

        </div >
    )
}

export default EditName