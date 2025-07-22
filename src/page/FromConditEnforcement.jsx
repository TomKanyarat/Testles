import React, { useState, useEffect } from 'react';
import Back from '../component/Back'
import { Grid, Box, Typography, Divider, TextField, FormControlLabel, Checkbox, Button, InputAdornment, FormGroup } from '@mui/material'
import { FormControl, MenuItem, Select } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';

const FromConditEnforcement = () => {
    const [period, setPeriod] = useState('');
    const [year, setYear] = useState('');
    const [number, setNumber] = useState('');
    const [yearprosecution, setYearprosecution] = useState('');
    const [time, setTime] = useState('');
    const [condit, setCondit] = useState('');
    const [yearcourt, setYearcourt] = useState('');
    const [yearprosecution1, setYearprosecution1] = useState('');
    const [toprosecution1, setToprosecution1] = useState('');
    const [tocourt, setTocourt] = useState('');
    const [toprosecution, setToprosecution] = useState('');
    const [yearcourt1, setYearcourt1] = useState('');
    const [tocourt1, setTocourt1] = useState('');
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    // const DropChange = (event) => {
    //     setValue(event.target.value);
    // };
    // const [select1, setSelect1] = useState('');
    // const [select2, setSelect2] = useState('');

    // const [select, setSelect] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value) // ลบออกถ้าคลิกซ้ำ
                : [...prev, value] // เพิ่มถ้ายังไม่มี
        );
    };

    // const handChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };
    // const handChange1 = (event) => {
    //     const value = event.target.value;
    //     setSelect1(value);
    // };
    // const handChange2 = (event) => {
    //     const value = event.target.value;
    //     setSelect2(value);
    // };

    const [deferment, setDefermentt] = useState(false); // ขอผ่อนผัน
    const [nomoney, setNomoney] = useState(false); // ไม่มีรายได้
    const [money, setMoney] = useState(false); //  รายได้ไม่เกิน 8,008
    const [suffer, setSuffer] = useState(false); // ประสบภัย
    const [lowmoney, setLowMomey] = useState(false); // รายได้ถดถอย
    const [family, setFamily] = useState(false); // ดูแลบุคคลใรครอบครัว
    const [restructuring, setRestructuring] = useState(false); // ปรับปรุงโครงสร้างหนี้
    const [paybreak, setPaybreak] = useState(false); // พักชำระ

    useEffect(() => {
        const allCheck = nomoney && money && suffer && lowmoney && family && restructuring && paybreak;
        if (allCheck && !deferment) {
            setDefermentt(true);
        }
        if (!allCheck && deferment) {
            setDefermentt(false);
        }
    }, [deferment, nomoney, money, suffer, lowmoney, family, restructuring, paybreak]);

    const Onchange = (event) => {
        const checked = event.target.checked;
        setDefermentt(checked);
        if (checked) {
            setNomoney(true);
            setMoney(true);
            setSuffer(true);
            setLowMomey(true);
            setFamily(true);
            setRestructuring(true);
            setPaybreak(true);
        } else {
            setNomoney(false);
            setMoney(false);
            setSuffer(false);
            setLowMomey(false);
            setFamily(false);
            setRestructuring(false);
            setPaybreak(false);
        }
    };

    // const [suspendDebt, setSuspendDebt] = useState(false); // ขอระงับหนี้
    // const [isDead, setIsDead] = useState(false); // ตาย
    // const [isMissing, setIsMissing] = useState(false); // สาบสูญ


    // const [debtpayment, setDebtpayment] = useState(false); // ขอรับชำระหนี้
    // const [chronic, setChronic] = useState(false); // โรคเรื้อรัง
    // const [imprisonment, setImprisonment] = useState(false); // จำคุกตลอดชีวิต
    // const [disability, setDisability] = useState(false); // ทุพพลภาพ
    // const [bankrupt, setBankrupt] = useState(false); // ล้มละลาย
    // const [contagious, setContagious] = useState(false); // โรคติดต่อ

    // useEffect(() => {
    //     const allChecked = chronic && imprisonment && disability && bankrupt && contagious;
    //     if (allChecked && !debtpayment) {
    //         setDebtpayment(true);
    //     }
    //     if (!allChecked && debtpayment) {
    //         setDebtpayment(false);
    //     }
    // }, [chronic, imprisonment, disability, bankrupt, contagious, debtpayment]);

    

    const [conditions, setConditions] = useState([{ id: 1 }]); // เริ่มด้วย 1 เงื่อนไข

    const handleRemoveCondition = (id) => {
        setConditions(conditions.filter((cond) => cond.id !== id));
    };
    const handleAddCondition = () => {
        const newId = conditions.length + 1;
        setConditions([...conditions, { id: newId }]);
    };


    return (
        <>
            <Box sx={{ backgroundColor: '#efefef', height: 'auto' }}>
                <Back BackConditEnforcement="กลับ" />
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

                        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} >
                            เพิ่มหลักเกณฑ์และเงื่อนไขลูกหนี้เข้าข่ายบังคับคดี
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                        {/*start  */}
                        <Grid container spacing={1} sx={{ padding: '5px 20px' }}>
                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>เกณฑ์ลูกหนี้เงื่อนไขบังคับคดีปี <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={year} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setYear(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="firm1" >
                                            2565
                                        </MenuItem>
                                        <MenuItem value="firm2" >
                                            2566
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>ครั้งที่ <span style={{ color: 'red' }}>*</span></Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={time} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setTime(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="firm1" >
                                            1
                                        </MenuItem>
                                        <MenuItem value="firm2" >
                                            2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>

                        <Grid container spacing={1} sx={{ padding: '5px 20px' }}>
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>ชื่อรุ่นบังคับคดี <span style={{ color: 'red' }}>*</span> </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>เลขหนังสืออนุมัติด้วยเกณฑ์เงื่อนไข </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={number} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setNumber(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}>
                                        <MenuItem value="month1" >
                                            Active
                                        </MenuItem>
                                        <MenuItem value="month2" >
                                            Closed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} sx={{ padding: '5px 20px' }}>
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>ความถี่ในการดึงข้อมูล <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={condit} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setCondit(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="date1" >
                                            1
                                        </MenuItem>
                                        <MenuItem value="date2" >
                                            2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>เดือน <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={day} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setDay(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="date1" >
                                            มกราคม
                                        </MenuItem>
                                        <MenuItem value="date2" >
                                            กุมภาพันธ์
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>ทุกวันที่ <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={date} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setDate(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}
                                    >
                                        <MenuItem value="date1" >
                                            1
                                        </MenuItem>
                                        <MenuItem value="date2" >
                                            2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {conditions.map((cond, index) => (
                            <Grid key={cond.id} container sx={{ border: '1px solid lightgray', padding: '20px', borderRadius: '10px' }}>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Button onClick={() => handleRemoveCondition(cond.id)} sx={{ backgroundColor: '#C05151', color: 'white' }}>
                                        <DeleteIcon /> ลบเงื่อนไข
                                    </Button>
                                    {/* ปิดการลบเงื่อนไขที่ 1 {index > 0 && (
        <Button
          onClick={() => handleRemoveCondition(cond.id)}
          sx={{ backgroundColor: '#C05151', color: 'white' }}
        >
          <DeleteIcon /> ลบเงื่อนไข
        </Button>
      )} */}
                                </Box>

                                <Typography>เงื่อนไขที่ {index + 1}</Typography>
                                <Grid container spacing={1} sx={{ padding: '0 20px' }}>
                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <FormControlLabel sx={{ marginLeft: '5px' }}
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option1')}
                                                        onChange={handleChange}
                                                        value="option1"
                                                    />
                                                } label="พิพากษาตามยอม"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid container spacing={1} sx={{ padding: '10px 10px' }}>
                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>ระยะเวลาบังคับคดีคงเหลือ <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={period} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setPeriod(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}>
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>งวดค้างชำระ (งวด) <span style={{ color: 'red' }}>*</span> </Typography>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                    },
                                                }} InputProps={{
                                                    endAdornment: <InputAdornment position="end"
                                                    >บาท</InputAdornment>,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1} sx={{ padding: '10px 10px' }}>
                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>รุ่นปีที่ดำเนินคดี <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={yearprosecution} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setYearprosecution(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>ถึง <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={toprosecution} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setToprosecution(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1} sx={{ padding: '10px 10px' }}>
                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>รุ่นปีที่ศาลพิพากษา </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={yearcourt} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setYearcourt(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }} >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>ถึง <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={tocourt} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setTocourt(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>อายุสัญญาตามคำพิพากษาศาลคงเหลือ <span style={{ color: 'red' }}>*</span> </Typography>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                    },
                                                }} InputProps={{
                                                    endAdornment: <InputAdornment position="end"
                                                    >ปี</InputAdornment>,
                                                }} />
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{ borderWidth: 1, borderColor: '#1530A8', borderStyle: 'solid' }} />

                                    <Grid container spacing={1} sx={{ padding: '0 20px', }}>
                                        <Grid item xs={12} sm={12} md={12} >
                                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                                <FormControlLabel sx={{ marginLeft: '5px' }}
                                                    control={
                                                        <Checkbox
                                                            checked={selectedOptions.includes('option1')}
                                                            onChange={handleChange}
                                                            value="option1"
                                                        />
                                                    } label="พิพากษาฝ่ายเดียว"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} sx={{ padding: '10px 10px' }}>
                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>รุ่นปีที่ดำเนินคดี <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={yearprosecution1} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setYearprosecution1(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>ถึง <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={toprosecution1} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setToprosecution1(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1} sx={{ padding: '10px 10px' }}>
                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>รุ่นปีที่ศาลพิพากษา <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={yearcourt1} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setYearcourt1(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3.5}>
                                            <Typography>ถึง <span style={{ color: 'red' }}>*</span> </Typography>
                                            <FormControl variant="outlined" fullWidth>
                                                <Select
                                                    value={tocourt1} // ค่า value ที่เลือกจาก dropdown
                                                    onChange={(e) => setTocourt1(e.target.value)} displayEmpty
                                                    inputProps={{
                                                        'aria-label': 'ศาล',
                                                    }}
                                                    sx={{
                                                        height: '45px',
                                                        '& .MuiInputBase-input': {
                                                            padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="date1" >
                                                        1
                                                    </MenuItem>
                                                    <MenuItem value="date2" >
                                                        2
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                                <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                                    <Grid item xs={12} sm={6} md={3.5}>
                                        <Typography>ยอดหนี้คงเหลือมากกว่า (บาท) <span style={{ color: 'red' }}>*</span> </Typography>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                '& .MuiInputBase-input': {
                                                    height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                },
                                            }} InputProps={{
                                                endAdornment: <InputAdornment position="end"
                                                >ปี</InputAdornment>,
                                            }} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} sx={{ marginTop: '30px' }}>
                                        <Typography><span style={{ color: 'red' }}>* กรณีดึงข้อมูลเพื่อวิเคราะห์ไม่จำเป็นต้องระบุยอดหนี้คงเหลือ</span> </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                                    <Grid item xs={12} sm={4} md={4}>

                                        <Typography>สถานะบุคคลที่ยกเว้น</Typography>
                                        <FormGroup sx={{ marginLeft: '10px' }}>
                                            <FormControlLabel control={
                                                <Checkbox checked={deferment} onChange={Onchange} />}
                                                label="เสียชีวิต"
                                            />
                                            <FormControlLabel control={
                                                <Checkbox checked={nomoney} onChange={(e) => setNomoney(e.target.checked)} />}
                                                label="สาบสูญ"
                                            />
                                            <FormControlLabel control={
                                                <Checkbox checked={money} onChange={(e) => setMoney(e.target.checked)} />}
                                                label="พิการหรือทุพพลภาพ"
                                            />
                                            <FormControlLabel control={
                                                <Checkbox checked={lowmoney} onChange={(e) => setLowMomey(e.target.checked)} />}
                                                label="เป็นโรคติดต่อร้ายแรง"
                                            />
                                            <Typography sx={{ marginLeft: '-10px' }} >สถานะบุคคลล้มละลาย</Typography>
                                            <FormControlLabel control={
                                                <Checkbox checked={suffer} onChange={(e) => setSuffer(e.target.checked)} />}
                                                label="ต้องคดีล้มละลาย"
                                            />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                              
                            </Grid>
                        ))}
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
                            <Button onClick={handleAddCondition} sx={{ background: 'linear-gradient(45deg, #108F0D, #196618)', color: 'white', marginTop: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', }}>
                                <AddIcon /><span style={{
                                    marginLeft: '10px'
                                }}>เพิ่มเงื่อนไขในการดึงข้อมูล</span>
                            </Button>
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center', marginTop: '15px' }}>
                            <Button sx={{ background: 'linear-gradient(90deg, #081342, #102583, #1530A8)', boxShadow: '0px 4px 6px rgba(0,0,0,0.3)', marginLeft: '10px', color: 'white' }}>
                                <SaveIcon /><span style={{
                                    marginLeft: '10px'
                                }}>บันทึก</span>
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FromConditEnforcement