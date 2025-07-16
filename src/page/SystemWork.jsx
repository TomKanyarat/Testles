// import React, { useState } from 'react';
import SubHeader from '../component/SubHeader';
import { Grid, Box, Typography, Divider, Button } from '@mui/material';
import TestMenu from '../component/TestMenu';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import TBConditCancel from '../TB/TBConditCancel';
const Sue = () => {
    // const [value, setValue] = useState('option1');

    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Box sx={{ display: 'flex', height: '100%' }}>
                <TestMenu />
                <Box component="main" sx={{ flexGrow: 1, height: '100%', overflowY: 'auto' }}>

                    <Grid container spacing={1} sx={{ padding: '100px 20px' }}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                borderRadius: '5px',
                                backgroundColor: 'white',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                                padding: '15px',
                            }}>
                            <Typography sx={{ marginLeft: '15px' }}>
                                เงื่อนไขเพื่อคัดลูกหนี้เพื่อการบอกเลิกสัญญาและดำเนินคดี
                            </Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                            <Link to="/page/FromConditCancel">
                                <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                    <AddIcon />เพิ่ม
                                </Button>
                            </Link>

                            <Grid container spacing={2} sx={{marginTop: '5px'}}>
                                <Grid item xs={12} sm={12} md={12}>
                                <TBConditCancel/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Sue;
