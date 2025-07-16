import React from 'react';
import { Divider, Grid, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Back from '../component/Back';
import DetailName from '../component/DetailName';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import TBDetailRSIVGT01 from '../TB/TBDetailRSIVGT01';
import TBDetailRSIVGT02 from '../TB/TBDetailRSIVGT02';
import TBDetailRSIVGT03 from '../TB/TBDetailRSIVGT03';
import TBDetailRSIVGT04 from '../TB/TBDetailRSIVGT04';
import AddIcon from '@mui/icons-material/Add';

function DetailResultInvestigation() {
    return (
        <div style={{ backgroundColor: '#efefef',  }}>
            <Back backResultInves="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '10px',
                    }}>
                    <DetailName />
                    <Typography sx={{ marginLeft: '15px', marginTop: '30px', fontWeight: 'bold' }}>บันทึกข้อมูลผลการสืบทรัพย์</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={1} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} sm={12} md={3.5}>
                            <Typography sx={{ marginLeft: '30px' }}>วันที่มอบหมายสืบทรัพย์ <span style={{ color: 'red' }}> * </span>
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
                        <Grid item xs={12} sm={12} md={3.5}>
                            <Typography sx={{ marginLeft: '30px' }}>วันที่สืบทรัพย์สิน <span style={{ color: 'red' }}> * </span>
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
                        <Grid item xs={12} sm={12} md={3.5}>
                            <Typography sx={{ marginLeft: '30px' }}>หมายเหตุ
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={2}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px', // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                /></Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '25px' }}>
                        <Link>
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)', }}>
                                <SaveIcon /> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                            </Button>
                        </Link>
                        <Link>
                            <Button sx={{ alignItems: 'center', color: 'black', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)', marginLeft: '20px' }}>
                                <ClearIcon /> <span style={{ marginTop: '2px', marginLeft: '5px' }}>ยกเลิก</span>
                            </Button>
                        </Link>
                        <Link to="/page/NoFoundProperty">
                            <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)', marginLeft: '20px' }}>
                                <span style={{ marginTop: '2px', marginLeft: '5px' }}>กรณีไม่พบทรัพย์</span>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>เลือกการสืบทรัพย์</Typography>
                        <Divider sx={{ borderColor: '#1530A8' }} />
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
                            <TBDetailRSIVGT01 />
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>อสังหาริมทรัพย์</Typography>
                        <Divider sx={{ borderColor: '#1530A8' }} />
                        <Link>
                            <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginLeft: '15px', marginTop: '10px' }}>
                                <AddIcon />  เพิ่ม
                            </Button>
                        </Link>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                            <TBDetailRSIVGT02 />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>สังหาริมทรัพย์</Typography>
                        <Divider sx={{ borderColor: '#1530A8' }} />
                        <Link>
                            <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginLeft: '15px', marginTop: '10px' }}>
                                <AddIcon />  เพิ่ม
                            </Button>
                        </Link>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                            <TBDetailRSIVGT03 />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>ไม่มีข้อมูล</Typography>
                        <Divider sx={{ borderColor: '#1530A8' }} />
                       
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                            <TBDetailRSIVGT04 />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailResultInvestigation