import React from 'react'
import SubHeader from '../component/SubHeader';
import { Grid, Typography, TextField, Divider, Box } from '@mui/material';
import WarrantApealTB from '../TB/WarrantApealTB';
import TestMenu from '../component/TestMenu';
const WarrantApeal = () => {
  return (
    <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
      <Box sx={{ display: 'flex' }}>
        <TestMenu />

        <Box component="main" sx={{ overflow: 'auto' }}>
          <SubHeader />

          <SubHeader Appeal="ยื่นอุทธรณ์/งดอุทธรณ์"
            ResultAppeal="ผลพิจารณาอนุมัติยื่นอุทธรณ์/งดอุทธรณ์"
            EditAppeal="ยื่น/แก้อุธรณ์" ProsecutionAppeal="ผลการดำเนินคดี"
            WarrantApeal="ออกหมายบังคับคดี" />

          <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
            <Grid item xs={12} sm={12} md={12} sx={{
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              height: 'auto',
              padding: '15px',

            }}>
              <Typography sx={{ marginLeft: '15px' }}>ค้นหา</Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
              <Grid container spacing={2} sx={{padding: '5px'}}>
                <Grid item xs={12} sm={6} md={3} >
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
                <Grid item xs={12} sm={6} md={3} >
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
                <Grid item xs={12} sm={6} md={3} >
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
                <Grid item xs={12} sm={6} md={3} >
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
                <Grid item xs={12} sm={6} md={3} >
                  <Typography>สถานะการดำเนินคดีในปัจจุบัน</Typography>
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
                <Grid item xs={12} sm={6} md={3} >
                  <Typography> CIF No. </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiInputBase-input': {
                        height: '11px', // กำหนดความสูงให้เหมาะสม
                      },
                    }} />
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
              <Typography sx={{ marginLeft: '15px' }}>ผลการค้นหา</Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '5px', }}>
                  <WarrantApealTB />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default WarrantApeal