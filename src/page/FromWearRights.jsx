import React, { useState } from 'react'
import Back from '../component/Back'
import DetailName from '../component/DetailName'
import { Grid, Typography, Divider, FormControl, RadioGroup, Radio, Button, FormControlLabel, TextField, Select, MenuItem, InputAdornment } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย
import TBDocFromWR from '../TB/TBDocFromWR';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save'
// import FromWearRights from './FromWearRights';

const FromWearRights = () => {
  const [value, setValue] = useState('outlined');
  const [court, setCourt] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [DateImpersonation, setDateImpersonation] = useState(null);
  const [DateSendNote, setDateSendNote] = useState(null);
  const [DateAppointment, setDateAppointment] = useState(null);
  const [DateCourtOrder, setDateCourtOrder] = useState(null);
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ backgroundColor: '#efefef' }}>
      <Back BackFormWarrantApeal="กลับ" />
      <Grid container spacing={1} sx={{ padding: '20px' }}>
        <Grid item xs={12} sm={12} md={12} sx={{
          borderRadius: '5px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          margin: 'auto',
          height: 'auto',
          padding: '15px'
        }} >
          <DetailName />
          <Grid container spacing={1} sx={{ marginTop: '25px' }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                บันทึกยื่นสวมสิทธิ์
              </Typography>
              <Divider sx={{ borderColor: '#1530A8' }} />
            </Grid>
            <Grid container spacing={2} justifyContent="space-between" sx={{ padding: '10px 30px' }}>
              <Grid item xs={12} sm={6} md={4} >
                <Typography>ศาล <span style={{ color: 'red' }}>*</span>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={court}
                      onChange={(e) => setCourt(e.target.value)}
                      displayEmpty
                      sx={{
                        height: '45px',
                        '& .MuiInputSelect-Select': {
                          padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                        },
                      }}
                    >
                      <MenuItem value="court" >
                        ศาลจังหวัดหลังสวน
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} >
                <Typography>หมายเลขคดีดำ / หมายเลขคดีแดง <span style={{ color: 'red' }}>*</span></Typography>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    value={caseNumber}
                    onChange={(e) => setCaseNumber(e.target.value)}
                    displayEmpty
                    sx={{
                      height: '45px',
                      '& .MuiInputSelect-Select': {
                        padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                      },
                    }}
                  >
                    <MenuItem value="black_red" >
                      สป8859/2563/สป9959/2563
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                <Grid item xs={12} sm={6} md={4} >
                  <Typography>วันที่ยื่นสวมสิทธิ์ <span style={{ color: 'red' }}>*</span></Typography>
                  <DatePicker
                    value={DateImpersonation}
                    onChange={(newValue) => setDateImpersonation(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        sx: { height: '45px' },
                        InputProps: { sx: { height: '45px' } },
                      },
                    }}
                  />
                </Grid>
              </LocalizationProvider>

            </Grid>
            {/*  */}
            <Grid container spacing={2} justifyContent="space-between" sx={{ padding: '10px 30px' }}>
              <Grid item xs={12} sm={5} md={4} >
                <Typography>ผลการนำส่งคำบังคับคดี <span style={{ color: 'red' }}>*</span></Typography>
                <FormControl>
                  <RadioGroup
                    sx={{ marginTop: '5px' }}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group-1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="option0" control={<Radio />} label="ส่งได้" />
                    <FormControlLabel value="option11" control={<Radio />} label="ส่งไม่ได้" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography>วันที่ส่งหมาย <span style={{ color: 'red' }}>*</span></Typography>
                  <DatePicker
                    value={DateSendNote}
                    onChange={(newValue) => setDateSendNote(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        sx: { height: '45px' },
                        InputProps: { sx: { height: '45px' } },
                      },
                    }}
                  />
                </Grid>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography>วันที่นัดไต่สวน <span style={{ color: 'red' }}>*</span></Typography>
                  <DatePicker
                    value={DateAppointment}
                    onChange={(newValue) => setDateAppointment(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        sx: { height: '45px' },
                        InputProps: { sx: { height: '45px' } },
                      },
                    }}
                  />
                </Grid>
              </LocalizationProvider>
              {/* </Grid> */}

              {/* <Grid container spacing={2} justifyContent="space-between" sx={{padding: '10px 30px'}}> */}
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                <Grid item xs={12} sm={6} md={4} >
                  <Typography>วันที่ศาลมีคำสั่ง <span style={{ color: 'red' }}>*</span></Typography>
                  <DatePicker
                    value={DateCourtOrder}
                    onChange={(newValue) => setDateCourtOrder(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        sx: { height: '45px' },
                        InputProps: { sx: { height: '45px' } },
                      },
                    }}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={12} sm={5} md={4} >
                <Typography>ศาลอนุญาต <span style={{ color: 'red' }}>*</span></Typography>
                <FormControl>
                  <RadioGroup
                    sx={{ marginTop: '5px' }}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group-1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="อนุญาต" />
                    <FormControlLabel value="No" control={<Radio />} label="ไม่อนุญาต" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4} >
                <Typography>รายละเอียดเพิ่มเติม <span style={{ color: 'red' }}>*</span></Typography>
                <TextField
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                {/* <TextField
  multiline
  rows={4}
  variant="outlined"
  fullWidth
  InputProps={{
    sx: {
      resize: 'both',
      overflow: 'auto', // เพิ่ม scroll หากขยาย
    },s
  }} ขยายช่องได้
/> */}
              </Grid>
            </Grid>
            {/*  */}

          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                เอกสารประกอบการเบิกค่าธรรมเนียม / ค่าใช้จ่ายอื่นๆ
              </Typography>
              <Divider sx={{ borderColor: '#1530A8' }} />

              <Grid container spacing={2} sx={{ padding: '10px 10px' }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography>ประเภทค่าใช้จ่าย/ค่าธรรมเนียม  <span style={{ color: 'red' }}>*</span></Typography>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      displayEmpty
                      sx={{
                        height: '45px',
                        '& .MuiInputSelect-Select': {
                          padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                        },
                      }}
                    >
                      <MenuItem value="Type" >
                        สป8859/2563/สป9959/2563
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Typography>จำนวนเงิน <span style={{ color: 'red' }}>*</span></Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiInputBase-input': {
                        height: '11px', // กำหนดความสูงให้เหมาะสม
                      },
                    }} InputProps={{
                      endAdornment: <InputAdornment position="end"
                      >บาท</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                  <Typography>ใบเสร็จเล่มที่  <span style={{ color: 'red' }}>*</span></Typography>
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
                  <Typography>ใบเสร็จเลขที่  <span style={{ color: 'red' }}>*</span></Typography>
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
                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', }}>
                  <Link to="/page">
                    <Button sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                      <AddIcon />เพิ่ม
                    </Button>
                  </Link>
                  <Link to="/page">
                    <Button sx={{ color: 'black', marginTop: '10px', marginLeft: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                      <ClearIcon /> ยกเลิก
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12} sx={{ overflowX: 'auto' }}>
                <TBDocFromWR />
              </Grid>

              <Typography sx={{ marginTop: '20px', marginLeft: '15px', fontWeight: 'bold' }}>ผู้รับผิดชอบ</Typography>
              <Divider sx={{ borderColor: '#1530A8' }} />

              <Grid item xs={12} sm={6} md={4} sx={{ padding: '10px' }}>
                <Typography>ชื่อสังกัด/ฝ่ายงาน <span style={{ color: 'red' }}>*</span>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      displayEmpty
                      sx={{
                        height: '45px',
                        '& .MuiInputSelect-Select': {
                          padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                        },
                      }}
                    >
                      <MenuItem value="compony" >
                        บังคับคดี
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={4} sx={{ padding: '10px' }}>
                <Typography>ชื่อผู้รับผิดชอบ <span style={{ color: 'red' }}>*</span>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      displayEmpty
                      sx={{
                        height: '45px',
                        '& .MuiInputSelect-Select': {
                          padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                        },
                      }}
                    >
                      <MenuItem value="Name" >
                        นายตุ้ยนุ้ย
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Link>
                  <Button sx={{ alignItems: 'center', color: 'white', background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0 ,0,0,0.3)' }}>
                    <SaveIcon /> <span style={{ marginTop: '2px', marginLeft: '5px' }}>บันทึก</span>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


    </div >
  )
}

export default FromWearRights