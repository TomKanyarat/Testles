import React, { useState, useEffect } from 'react';
import Back from '../component/Back'
import { Grid, Box, Typography, Divider, TextField, FormControlLabel, Checkbox, Button, InputAdornment, FormGroup } from '@mui/material'
import { FormControl, MenuItem, Select } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';
const ConditCancel = () => {
    const [year, setYear] = useState('');
    const [frequency, setFrequency] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    // const DropChange = (event) => {
    //     setValue(event.target.value);
    // };
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');

    const [select, setSelect] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value) // ลบออกถ้าคลิกซ้ำ
                : [...prev, value] // เพิ่มถ้ายังไม่มี
        );
    };

    const handChange = (event) => {
        const value = event.target.value;
        setSelect(value);
    };
    const handChange1 = (event) => {
        const value = event.target.value;
        setSelect1(value);
    };
    const handChange2 = (event) => {
        const value = event.target.value;
        setSelect2(value);
    };

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

    const [suspendDebt, setSuspendDebt] = useState(false); // ขอระงับหนี้
    const [isDead, setIsDead] = useState(false); // ตาย
    const [isMissing, setIsMissing] = useState(false); // สาบสูญ

    useEffect(() => {
        if (isDead && isMissing && !suspendDebt) {
            setSuspendDebt(true);
        }
        if ((!isDead || !isMissing) && suspendDebt) {
            setSuspendDebt(false);
        }
    }, [suspendDebt, isDead, isMissing]);

    const handleSuspendDebtChange = (event) => {
        const checked = event.target.checked;
        setSuspendDebt(checked);
        if (checked) {
            setIsDead(true);
            setIsMissing(true);
        } else {
            setIsDead(false);
            setIsMissing(false);
        }
    };

    const [debtpayment, setDebtpayment] = useState(false); // ขอรับชำระหนี้
    const [chronic, setChronic] = useState(false); // โรคเรื้อรัง
    const [imprisonment, setImprisonment] = useState(false); // จำคุกตลอดชีวิต
    const [disability, setDisability] = useState(false); // ทุพพลภาพ
    const [bankrupt, setBankrupt] = useState(false); // ล้มละลาย
    const [contagious, setContagious] = useState(false); // โรคติดต่อ

    useEffect(() => {
        const allChecked = chronic && imprisonment && disability && bankrupt && contagious;
        if (allChecked && !debtpayment) {
            setDebtpayment(true);
        }
        if (!allChecked && debtpayment) {
            setDebtpayment(false);
        }
    }, [chronic, imprisonment, disability, bankrupt, contagious, debtpayment]);

    const Change = (event) => {
        const checked = event.target.checked;
        setDebtpayment(checked);
        if (checked) {
            setChronic(true);
            setContagious(true);
            setBankrupt(true);
            setDisability(true);
            setImprisonment(true);
        } else {
            setChronic(false);
            setContagious(false);
            setBankrupt(false);
            setDisability(false);
            setImprisonment(false);
        }
    };

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
            <Box sx={{ backgroundColor: '#efefef', height: '100vh' }}>
                <Back BackConditCancel="กลับ" />
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
                            เพิ่มหลักเกณฑ์และเงื่อนไขการบอกเลิกสัญญา
                        </Typography>
                        <Divider sx={{ BorderWidth: 1, borderColor: '#1530A8' }} />
                        {/*start  */}
                        <Grid container spacing={1} sx={{ padding: '5px 20px' }}>
                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>เกณฑ์เงื่อนไขลูกหนี้ดำเนินคดีในปี พ.ศ. <span style={{ color: 'red' }}>*</span> </Typography>
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
                                            Active
                                        </MenuItem>
                                        <MenuItem value="firm2" >
                                            Closed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3.5} >
                                <Typography>เลขหนังสืออนุมัติด้วยเกณฑ์เงื่อนไข </Typography>
                                <TextField fullWidth
                                    variant="outlined"
                                    placeholder="10/01/2563"
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                        },
                                    }}
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={1} sx={{ padding: '5px 20px' }}>
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>ความถี่ในการดึงข้อมูล <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={frequency} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setFrequency(e.target.value)} displayEmpty
                                        inputProps={{
                                            'aria-label': 'ศาล',
                                        }}
                                        sx={{
                                            height: '45px',
                                            '& .MuiInputBase-input': {
                                                padding: '10.5px 14px', // เพิ่ม padding ในช่อง
                                            },
                                        }}>
                                        <MenuItem value="firm01" >
                                            Active
                                        </MenuItem>
                                        <MenuItem value="firm02" >
                                            Closed
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography>เดือน <span style={{ color: 'red' }}>*</span> </Typography>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={month} // ค่า value ที่เลือกจาก dropdown
                                        onChange={(e) => setMonth(e.target.value)} displayEmpty
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
                            <Grid item xs={12} sm={6} md={3.5}>
                                <Typography> ทุกวันที่ <span style={{ color: 'red' }}>*</span> </Typography>
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
                                            1
                                        </MenuItem>
                                        <MenuItem value="date2" >
                                            2
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid >
                        {conditions.map((cond, index) => (
                            <Grid key={cond.id} container sx={{ border: '1px solid lightgray', padding: '20px', borderRadius: '10px' }}>
                                <Box onClick={() => handleRemoveCondition(cond.id)} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Button sx={{ backgroundColor: '#C05151', color: 'white' }}>
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
                                            <Typography>
                                                ประเภทกลุ่มลูกหนี้ <span style={{ color: 'red' }}>*</span>
                                            </Typography>

                                            <FormControlLabel sx={{ marginLeft: '5px' }}
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option1')}
                                                        onChange={handleChange}
                                                        value="option1"
                                                    />
                                                } label="ลูกหนี้กยศ."
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option2')}
                                                        onChange={handleChange}
                                                        value="option2"
                                                    />
                                                } label="ลูกหนี้กรอ."
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option3')}
                                                        onChange={handleChange}
                                                        value="option3"
                                                    />
                                                } label="ลักษณะที่ 1"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option4')}
                                                        onChange={handleChange}
                                                        value="option4"
                                                    />
                                                } label="ลักษณะที่ 2"
                                            /><FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option5')}
                                                        onChange={handleChange}
                                                        value="option5"
                                                    />
                                                } label="ลักษณะที่ 3"
                                            /><FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option6')}
                                                        onChange={handleChange}
                                                        value="option6"
                                                    />
                                                } label="ลักษณะที่ 4"
                                            /><FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('option7')}
                                                        onChange={handleChange}
                                                        value="option7"
                                                    />
                                                } label="ลักษณะที่ 5"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                ดึงกลุ่มลูกหนี้ไกล่เกลี่ยก่อนฟ้อง <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={select === 'option8'}
                                                        onChange={handChange}
                                                        value="option8"
                                                    />
                                                }
                                                label="ดึงข้อมูล"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={select === 'option9'} // 
                                                        onChange={handChange}
                                                        value="option9"
                                                    />
                                                }
                                                label="ไม่ดึงข้อมูล"
                                            />
                                        </Box>

                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                ดึงกลุ่มลูกหนี้ที่ปรับโครงสร้างหนี้ <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={select1 === 'option10'}
                                                        onChange={handChange1}
                                                        value="option10"
                                                    />
                                                }
                                                label="ดึงข้อมูล"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={select1 === 'option11'} // 
                                                        onChange={handChange1}
                                                        value="option11"
                                                    />
                                                }
                                                label="ไม่ดึงข้อมูล"
                                            />
                                        </Box>

                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                ดึงกลุ่มลูกหนี้ที่หมดอายุสัญญาการชำระหนี้และมียอดหนี้คงค้าง ตั้งแต่ <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <TextField
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
                                            <FormControlLabel
                                                sx={{ marginLeft: '5px' }}
                                                control={
                                                    <Checkbox
                                                        checked={select2 === 'option12'}
                                                        onChange={handChange2}
                                                        value="option12"
                                                    />
                                                }
                                                label="ดึงข้อมูล"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={select2 === 'option13'} // 
                                                        onChange={handChange2}
                                                        value="option13"
                                                    />
                                                }
                                                label="ไม่ดึงข้อมูล"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                จำนวนวันที่ผิดนัดชำระ ตั้งแต่ <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{
                                                        endAdornment: <InputAdornment position="end"
                                                        >วัน</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Typography sx={{ marginLeft: 2 }}>  ถึง </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        marginLeft: '15px',
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{
                                                        endAdornment: <InputAdornment position="end"
                                                        >วัน</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                เงินต้นคงเหลือ ตั้งแต่ <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <Grid item xs={5} sm={3} md={2}>
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
                                            <Typography sx={{ marginLeft: 2 }}>  ถึง </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        marginLeft: '15px',
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{
                                                        endAdornment: <InputAdornment position="end"
                                                        >บาท</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography sx={{ marginRight: 2 }}>
                                                วันที่ชำระหนี้ครั้งสุดท้าย ตั้งแต่ <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{

                                                        endAdornment: <InputAdornment position="end"
                                                        >วัน</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Typography sx={{ marginLeft: 2 }}>  ถึง </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        marginLeft: '15px',
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{

                                                        endAdornment: <InputAdornment position="end"
                                                        >วัน</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ padding: '5px 20px' }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <Typography>เงื่อนไขที่ยกเว้นไม่ดึงข้อมูล</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <FormGroup sx={{ marginLeft: '10px' }}>
                                                <FormControlLabel control={
                                                    <Checkbox checked={deferment} onChange={Onchange} />}
                                                    label="ขอผ่อนชำระ"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={nomoney} onChange={(e) => setNomoney(e.target.checked)} />}
                                                    label="ไม่มีรายได้"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={money} onChange={(e) => setMoney(e.target.checked)} />}
                                                    label="รายได้ไม่เกิน 8,008 บาทต่อเดือน"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={lowmoney} onChange={(e) => setLowMomey(e.target.checked)} />}
                                                    label="รายได้ถดถอย"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={suffer} onChange={(e) => setSuffer(e.target.checked)} />}
                                                    label="ประสบภัย"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={family} onChange={(e) => setFamily(e.target.checked)} />}
                                                    label="ดูแลบุคคลในครอบครัว"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={restructuring} onChange={(e) => setRestructuring(e.target.checked)} />}
                                                    label="ปรังปรุงโครงสร้างหนี้"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={paybreak} onChange={(e) => setPaybreak(e.target.checked)} />}
                                                    label="พักชำระหนี้บัตรสวัสดิการแห่งรัฐ"
                                                />
                                            </FormGroup>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <FormGroup sx={{ marginLeft: '10px' }}>
                                                <FormControlLabel control={
                                                    <Checkbox checked={debtpayment} onChange={Change} />}
                                                    label="ขอระงับการเรียกให้ชำระหนี้"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={chronic} onChange={(e) => setChronic(e.target.checked)} />}
                                                    label="โรคเรื้อรัง"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={imprisonment} onChange={(e) => setImprisonment(e.target.checked)} />}
                                                    label="จำคุกตลอดชีวิต"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={bankrupt} onChange={(e) => setBankrupt(e.target.checked)} />}
                                                    label="ล้มละลาย"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={contagious} onChange={(e) => setContagious(e.target.checked)} />}
                                                    label="โรคติดต่อร้ายแรง"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={disability} onChange={(e) => setDisability(e.target.checked)} />}
                                                    label="ทุพพลภาพ"
                                                />

                                            </FormGroup>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <FormGroup sx={{ marginLeft: '10px' }}>
                                                <FormControlLabel control={
                                                    <Checkbox checked={suspendDebt} onChange={handleSuspendDebtChange} />}
                                                    label="ขอระงับหนี้"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={isDead} onChange={(e) => setIsDead(e.target.checked)} />}
                                                    label="ตาย"
                                                />
                                                <FormControlLabel control={
                                                    <Checkbox checked={isMissing} onChange={(e) => setIsMissing(e.target.checked)} />}
                                                    label="สาบสูญ"
                                                />
                                            </FormGroup>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ padding: '0 20px' }}>
                                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '30px' }}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="สถานะบัญชี (ปิดบัญชีสาเหตุต่างๆ)" />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="หักเงินเดือนพรบ.กองทุนฯ (องค์กรนายจ้าง)" />
                                        </FormGroup>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="ลูกหนี้ที่มีการชำระหนี้มากว่า" />
                                            </FormGroup>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{
                                                        endAdornment: <InputAdornment position="end"
                                                        >%</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                            <Typography sx={{ marginLeft: 2 }}>  ดูการชำระหนี้ย้อนหลังไม่เกิน </Typography>
                                            <Grid item xs={5} sm={3} md={2} >
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    sx={{
                                                        marginLeft: '15px',
                                                        '& .MuiInputBase-input': {
                                                            height: '11px',  // กำหนดความสูงให้เหมาะสม
                                                        },
                                                    }} InputProps={{
                                                        endAdornment: <InputAdornment position="end"
                                                        >ปี</InputAdornment>,
                                                    }}
                                                />
                                            </Grid>
                                        </Box>
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

export default ConditCancel