import React from 'react'
import DetailName from '../component/DetailName';
import { Grid, Typography, Divider, Button } from '@mui/material';
import Back from '../component/Back';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const DetailEditAppeal = () => {
    return (
        <div style={{backgroundColor: '#efefef',height: '100vh'}}>
                <Back BackEditAppeal="กลับ"/>
                <Grid container spacing={1} sx={{ padding: '20px' }}>
                    <Grid item xs={5} sm={12} md={11} sx={{
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

                <Grid container spacing={1} sx={{ padding: '20px' }}>
                    <Grid item xs={5} sm={12} md={11} sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        height: 'auto',
                        padding: '15px'
                    }} >
                        <Typography sx={{ marginLeft: '15px' }}>ยื่น/แก้อุทธรณ์</Typography>
                        <Grid item xs={5} sm={12} md={12}>
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                            <Link to="/page/AddEditAppeal" style={{ textDecoration: 'none' }} >
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', marginTop: '10px', color: 'white' }}>
                                    <AddIcon /> เพิ่ม
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
        </div>
    )
}

export default DetailEditAppeal