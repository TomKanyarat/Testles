import React from 'react';
import { Grid, Typography, Button,Divider } from '@mui/material';
import TabelDetailCompromise from '../TB/TabelDetailCompromise';
import Back from '../component/Back';
import { Link, } from 'react-router-dom';
import DetailName from '../component/DetailName';

const DetailCompromise = () => {
    // const location = useLocation(); // Use hook inside a React component

    // Function to check if the current route matches
    // const isActiveLink = (path) => location.pathname === path;

    return (
        <div style={{backgroundColor: '#efefef',height: '100vh'}}>
                <Back backCompromise="กลับ" />
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
                    >
                        <DetailName />
                    </Grid>
                </Grid>
                {/*  */}
                <Grid container spacing={1} sx={{ padding: '20px', }}>
                    <Grid item xs={12} sm={12} md={12} sx={{
                        borderRadius: '5px', backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', margin: 'auto',
                        height: 'auto',
                        padding: '20px',
                    }}>
                        <Typography sx={{ marginLeft: '15px',fontWeight: 'bold' }} >
                            รายการสัญญาประนีประนอมยอมความ
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                        <Link
                            to="/page/ComproFrom" >
                            <Button sx={{ backgroundColor: '#efefef', padding: '5px 20px', marginTop: '10px', color: 'black', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                สร้างสัญญาประนีประนอม
                            </Button>
                        </Link>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px', }} >
                            <TabelDetailCompromise />
                        </Grid>
                    </Grid>
                </Grid>

        </div>
    )
}

export default DetailCompromise