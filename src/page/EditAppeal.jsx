import React, { useState } from 'react'
import SubHeader from '../component/SubHeader'
import { Grid, Typography, TextField, Divider, Select, MenuItem, FormControl, Box } from '@mui/material'
import EditAppealTB from '../TB/EditAppealTB';
import TestMenu from '../component/TestMenu';
const EditAppeal = () => {
  const [value, setValue] = useState('option1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
      <Box sx={{ display: 'flex' }}>
        <TestMenu />

        <Box component="main" sx={{ overflow: 'auto' }}>
          <SubHeader />
          <SubHeader text="หน้าหลัก" />


          <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
            <Grid item xs={12} sm={12} md={12} sx={{
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              margin: 'auto',
              height: 'auto',
              padding: '15px',

            }}>
              <Typography sx={{ marginLeft: '15px' }}>ค้นหา</Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
              <Grid container spacing={2} sx={{ padding: '5px' }}>
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
                  <Typography>CIF No.</Typography>
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
                  <Typography>ชื่อลูกหนี้/ชื่อผู้เกี่ยวข้อง</Typography>
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
                  <Typography>  ศาล </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={value} // ค่า value ที่เลือกจาก dropdown
                      onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                      displayEmpty
                      inputProps={{
                        'aria-label': 'ศาล',
                      }}
                      sx={{
                        height: '45px',
                        '& .MuiInputSelect-Select': {

                          padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                        },

                      }}
                    >
                      <MenuItem value="firm9" >
                        Active
                      </MenuItem>
                      <MenuItem value="firm8" >
                        Closed
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
            <Grid item xs={12} sm={12} md={12} sx={{
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              margin: 'auto',
              height: 'auto',
              padding: '15px',

            }}>
              <Typography sx={{ marginLeft: '15px' }}>ผลการค้นหา</Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '5px', }}>
                  <EditAppealTB />
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default EditAppeal