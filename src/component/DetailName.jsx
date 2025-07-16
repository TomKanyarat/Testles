import React from 'react'
import { Grid, Typography, Divider } from '@mui/material';

const DetailName = () => {
    return (
        <div>
            <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                รายละเอียดเลขที่กฎหมาย
            </Typography>
            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />

            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                    <Typography sx={{ fontWeight: 'bold' }}>เลขที่กฎหมาย</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>2563000000019</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                    <Typography>เลขที่บัตรประชาชน</Typography>
                    <Typography>3101701889961</Typography>
                </Grid>

                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                    <Typography>CIF No.</Typography>
                    <Typography>0000002417221</Typography>

                </Grid>
                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                    <Typography> ชื่อ-นามสกุล</Typography>
                    <Typography>นางสาวPPP</Typography>

                </Grid>
                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                    <Typography> สถานะการดำเนินคดีปัจจุบัน</Typography>
                    <Typography>--------</Typography>

                </Grid>
                <Grid item xs={6} sm={4} md={2.5} sx={{ marginTop: '5px', marginLeft: '30px' }}>
                    <Typography> คดีหมายเลขดำ/คดีหมายเลขแดง</Typography>
                    <Typography>ผบ4564/2563/ <span style={{ color: 'red' }}>-</span></Typography>

                </Grid>

            </Grid>
        </div>
    )
}

export default DetailName