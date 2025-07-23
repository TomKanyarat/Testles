import { useState } from 'react';
import SubHeader from '../component/SubHeader'
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { FormControl, MenuItem, Select } from '@mui/material';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

import Divider from '@mui/material/Divider';
import TBCancelContract from '../TB/TBCancelContract'
import TestMenu from '../component/TestMenu';
// import Cancel_contract from './Cancel_contract';

const Cancel_contract = () => {
  const [value, setValue] = useState('option1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ backgroundColor: '#efefef', height: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <TestMenu />
        <Box component="main" sx={{
          overflowX: 'auto',
        }}>
          <SubHeader />
          <SubHeader text="หน้าหลัก" />
          <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
            <Grid item xs={12} sm={12} md={12} sx={{
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              height: 'auto',
              padding: '15px',
              overflowX: 'auto',
            }}>
              <Typography sx={{
                marginLeft: '15px'
              }}>
                ค้นหา
              </Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />


              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                  <Typography>เลขที่บัตรประชาชน</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiInputBase-input': {
                        height: '11px',  // กำหนดความสูงให้เหมาะสม

                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                  <Typography>เลขที่บัญชีเงินกู้</Typography>
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

                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px' }}>
                  <Typography>  ประเภทบัญชีเงินกู้ </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={value} // ค่า value ที่เลือกจาก dropdown
                      onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                      displayEmpty
                      inputProps={{
                        'aria-label': 'สถานะ',
                      }}
                      sx={{
                        '& .MuiInputBase-input': {
                          height: '45px',
                          padding: '0 8px', // เพิ่ม padding ในช่อง
                          lineHeight: '40px', // เพิ่ม line height เพื่อขยับข้อความลง
                        },
                      }}
                    >
                      <MenuItem value="typebank1" >
                        Active
                      </MenuItem>
                      <MenuItem value="typebank2" >
                        Closed
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                  <Typography>  สถานะการดำเนินการ </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={value} // ค่า value ที่เลือกจาก dropdown
                      onChange={handleChange} // ฟังก์ชันในการเปลี่ยนค่า
                      displayEmpty
                      inputProps={{
                        'aria-label': 'สถานะ',
                      }}
                      sx={{
                        '& .MuiInputBase-input': {
                          height: '45px',
                          padding: '0 8px', // เพิ่ม padding ในช่อง
                          lineHeight: '40px', // เพิ่ม line height เพื่อขยับข้อความลง
                        },
                      }}
                    >
                      <MenuItem value="statusActive1" >
                        Active
                      </MenuItem>
                      <MenuItem value="statusActive2" >
                        Closed
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      mt: 2
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: '#efefef',
                        color: 'gray',
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                      }}
                    ><ClearIcon></ClearIcon>
                      ล้าง
                    </Button>
                    <Button
                      sx={{
                        background: 'linear-gradient(90deg, #081342, #102583, #1530A8)',
                        color: 'white',
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                      }}
                    ><SearchIcon></SearchIcon>
                      ค้นหา
                    </Button>

                  </Box>
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
              <Typography sx={{ marginLeft: '15px' }}>ข้อมูล</Typography>
              <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
              <TBCancelContract />
            </Grid>
          </Grid>

        </Box>
      </Box>
    </div>
  )
}

export default Cancel_contract