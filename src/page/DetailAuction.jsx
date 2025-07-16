import React from 'react';
import { Grid, Typography, Button, Divider } from '@mui/material';
// import TabelDetailCompromise from '../TB/TabelDetailCompromise';
import Back from '../component/Back';
import { Link, } from 'react-router-dom';
import DetailName from '../component/DetailName';
import AddIcon from '@mui/icons-material/Add';
import TBDetailAuction from '../TB/TBDetailAuction';
// import DetailAuction from './DetailAuction';

const DetailAuction = () => {
    // const location = useLocation(); // Use hook inside a React component

    // Function to check if the current route matches
    // const isActiveLink = (path) => location.pathname === path;

    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Back backAuction="กลับ" />
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
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                        ชะลอขายทอดตลาด
                    </Typography>
                    <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                    <Link
                        to="/page/FromAuction" >
                        <Button sx={{
                            color: 'white', background: 'linear-gradient(45deg, #108F0D, #196618)', marginTop: '10px', '&:disabled': {
                                background: '#ccc',
                                color: '#666',
                            },
                        }} >
                            <AddIcon /> เพิ่ม
                        </Button>
                    </Link>
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '10px', }} >
                        <TBDetailAuction />
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default DetailAuction