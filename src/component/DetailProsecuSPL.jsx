import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import Back from './Back';
import DetailName from './DetailName';

const DetailProsecuSPL = () => {
    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Back BackWarrantSPL="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={5} sm={10} md={12} sx={{
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    margin: 'auto',
                    height: 'auto',
                    padding: '15px',
                }}>
                    <DetailName />
                    <Typography sx={{marginLeft: '15px', fontWeight: 'bold', marginTop: '30px'}}>ออกหมายบังคับคดีชั้นฎีกา</Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </div>

    )
}

export default DetailProsecuSPL