import React from 'react'
import Back from '../component/Back';
import { Button, Divider, Grid, Typography } from '@mui/material';
import DetailName from '../component/DetailName';
import TBDetailWear from '../TB/TBDetailWear';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
function DetailWearRights() {
    return (
        <div>
            <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
                <Back BackWearRights="กลับ" />
                <Grid container spacing={1} sx={{ padding: '20px', }}>
                    <Grid item xs={11} sm={12} md={11} sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        height: 'auto',
                        padding: '15px'
                    }} >
                        <DetailName />
                    </Grid>
                </Grid>

                <Grid container spacing={1} sx={{ padding: '20px', }}>
                    <Grid item xs={11} sm={12} md={11} sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        height: 'auto',
                        padding: '15px'
                    }} >
                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }}>ลูกหนี้รอยื่นสวมสิทธิ์/ออกหมายบังคับคดี</Typography>
                        <Divider sx={{ borderColor: '#1530A8' }} />
                        <Link to="/page/FromWearRights" >
                            <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px' , boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',}}>
                            <AddIcon /> เพิ่ม
                            </Button>
                        </Link>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px' }}>
                            <TBDetailWear />
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default DetailWearRights