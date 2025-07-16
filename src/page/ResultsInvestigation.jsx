import React from 'react';
import { Box, Grid, Typography, Divider, TextField } from '@mui/material';
import TestMenu from '../component/TestMenu';
import SubHeader from '../component/SubHeader';
// import DetailName from '../component/DetailName';
import TBResultsInvestigation from '../TB/TBResultsInvestigation';
function ResultsInvestigation() {
    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />
                <Box component="main" sx={{ overflow: 'auto' }}>
                    <SubHeader />
                    <SubHeader ResultsInvestigation="ผลการสืบทรัพย์" />
                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            padding: '15px',
                        }}>
                            <Typography sx={{ marginLeft: '15px' }}>ค้นหา</Typography>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                            <Grid container spacing={1} sx={{padding: '5px'}}>
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
                                    <Typography> สถานะการดำเนินคดีปัจจุบัน </Typography>
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
                                    <Typography> CIF No. </Typography>
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
                            <Typography sx={{ marginLeft: '20px', fontWeight: 'bold', }}>ข้อมูล</Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                                <TBResultsInvestigation />
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </div>
    )
}

export default ResultsInvestigation