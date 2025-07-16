import { useState } from 'react';
import SubHeader from '../component/SubHeader'
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { FormControl, MenuItem, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import TestMenu from '../component/TestMenu';
import TBRecordCancel from '../TB/TBRecordCancel';

const RecordCancelContract = () => {
    // const [value, setValue] = useState('option1');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    const [citizenId, setCitizenId] = useState('');
    const [cifNo, setCifNo] = useState('');
    const [loanAccountNo, setLoanAccountNo] = useState('');
    const [accountType, setAccountType] = useState('');
    const [status, setStatus] = useState('');

    const handleClear = () => {
        setCitizenId('');
        setCifNo('');
        setLoanAccountNo('');
        setAccountType('');
        setStatus('');
    };

    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />
                <Box component="main" sx={{
                    overflowX: 'auto',
                }}>
                    <SubHeader />
                    <SubHeader CancelContract="รายการลูกหนี้ที่รอบอกเลิกสัญญา" RecordCancelContract="บันทึกผลการจัดส่งข้อมูลหนังสือบอกเลิกสัญญา" />
                    <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                        <Grid item xs={12} sm={12} md={12} sx={{
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                            height: 'auto',
                            padding: '15px',
                        }}>

                            <Typography sx={{
                                marginLeft: '15px',
                            }}>
                                ค้นหา
                            </Typography>
                            <Divider sx={{ borderColor: '#1530A8' }} />
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                                    <Typography>เลขที่บัตรประชาชน</Typography>
                                    <TextField value={citizenId} onChange={(e) => setCitizenId(e.target.value)} fullWidth variant="outlined" sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม

                                        },
                                    }} />
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                                    <Typography>CIF No.</Typography>
                                    <TextField value={cifNo} onChange={(e) => setCifNo(e.target.value)} fullWidth variant="outlined"
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '11px',  // กำหนดความสูงให้เหมาะสม

                                            },
                                        }} />
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                                    <Typography>เลขที่บัญชีเงินกู้</Typography>
                                    <TextField value={loanAccountNo} onChange={(e) => setLoanAccountNo(e.target.value)} fullWidth variant="outlined"
                                        sx={{
                                            '& .MuiInputBase-input': {
                                                height: '11px',  // กำหนดความสูงให้เหมาะสม

                                            },
                                        }} />
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '5px', }}>
                                    <Typography>ประเภทบัญชีเงินกู้</Typography>
                                    <FormControl fullWidth>
                                        <Select value={accountType} onChange={(e) => setAccountType(e.target.value)} displayEmpty inputProps={{
                                            'aria-label': 'สถานะ',
                                        }}
                                            sx={{
                                                height: '45px',
                                                '& .MuiInputBase-input': {
                                                    padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                },
                                            }}>
                                            <MenuItem value="accountType1">Active</MenuItem>
                                            <MenuItem value="accountType2">Closed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                    <Typography>สถานะ</Typography>
                                    <FormControl fullWidth>
                                        <Select value={status} onChange={(e) => setStatus(e.target.value)} inputProps={{
                                            'aria-label': 'สถานะ',
                                        }}
                                            sx={{
                                                height: '45px',
                                                '& .MuiInputBase-input': {
                                                    padding: '10.5px px', // เพิ่ม padding ในช่อง
                                                },
                                            }}>
                                            <MenuItem value="status1">Active</MenuItem>
                                            <MenuItem value="status2">Closed</MenuItem>
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
                                            onClick={handleClear}
                                            sx={{
                                                backgroundColor: '#efefef',
                                                color: 'gray',
                                                boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                                            }}
                                        >
                                            <ClearIcon />
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
                                        <Button
                                            sx={{
                                                background: 'linear-gradient(90deg, #081342, #102583, #1530A8)',
                                                color: 'white',
                                                boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                                            }}
                                            onClick={() => { window.location.href = "/page/RecordCancelFromOne"; }}
                                        >
                                            Upload สถานะการจัดส่ง
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
                            <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8', }} />
                            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
                                <TBRecordCancel />
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </div>
    )
}

export default RecordCancelContract