import { useState } from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import { TextField, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import thLocale from 'date-fns/locale/th'; // สำหรับภาษาไทย


const ComproCapital = () => {
    const createData = (name, price, type) => ({ name, price, type });

    const rows = [
        createData("เงินต้น", "61,234.35", "บาท"),
        createData("ดอกเบี้ย", "0.00", "บาท"),
        createData("เบี้ยปรับ", "0.00", "บาท"),
    ];

    const rows1 = [
        createData("เงินต้น", "144,000.00", "บาท"),
        createData("ดอกเบี้ย", "0.00", "บาท"),
        createData("เบี้ยปรับ", "0.00", "บาท"),
    ];

    const [DateOfFiling, setDateOfFiling] = useState(null);

    return (
        <div>
            {/* Section: ข้อมูลทุนทรัพย์ */}
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Typography sx={{ padding: "20px 60px", fontWeight: "bold" }}> ข้อมูลทุนทรัพย์ </Typography>

                <Grid container spacing={2} sx={{ padding: "10px 60px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography>วันที่พิมพ์ <span style={{ color: 'red' }}>*</span></Typography>
                            <DatePicker
                                value={DateOfFiling}
                                onChange={(newValue) => setDateOfFiling(newValue)}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        variant: 'outlined',
                                        sx: {
                                            '& .MuiInputBase-root': {
                                                height: '45px',
                                            }
                                        }
                                    },
                                }}
                            />
                        </Grid>
                    </LocalizationProvider>
                </Grid>

                <Grid container spacing={2} sx={{ padding: "10px 60px" }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography>ทุนทรัพย์ ณ วันฟ้อง <span style={{ color: "red" }}>*</span></Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="61,234.35"
                            sx={{
                                "& .MuiInputBase-input": { height: "11px" },
                            }}
                            InputProps={{
                                readOnly: true,
                                endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Section: ตารางข้อมูลทุนทรัพย์ */}
                <Grid item xs={6} sm={5} md={4}>
                    <TableContainer component={Paper} sx={{ margin: "0px 50px" }}>
                        <Table aria-label="ข้อมูลทุนทรัพย์">
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            backgroundColor: index % 2 === 0 ? "white" : "#efefef",
                                        }}
                                    >
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* Section: ภาระหนี้รวม ณ วันที่ทำสัญญา */}
                <Grid container spacing={2} sx={{ padding: "10px 60px" }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography> ภาระหนี้รวม ณ วันที่ทำสัญญา </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="61,234.35"
                            sx={{
                                "& .MuiInputBase-input": { height: "11px" },
                            }}
                            InputProps={{
                                readOnly: true,
                                endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
                {/* Section: ตารางข้อมูลภาระหนี้ */}
                <Grid item xs={6} sm={5} md={4}>
                    <TableContainer component={Paper} sx={{ margin: "0px 50px" }}>
                        <Table aria-label="ภาระหนี้">
                            <TableBody>
                                {rows1.map((row1, index) => (
                                    <TableRow
                                        key={row1.name}
                                        sx={{
                                            backgroundColor: index % 2 === 0 ? "white" : "#efefef",
                                        }}
                                    >
                                        <TableCell>{row1.name}</TableCell>
                                        <TableCell align="right">{row1.price}</TableCell>
                                        <TableCell align="right">{row1.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* Section: ลดเบี้ยปรับ และศาล */}
                <Grid container>
                    <Grid item xs={5} md={4}>
                        <Typography sx={{ padding: "20px 70px" }}>
                            ลดเบี้ยปรับ (ถ้ามี)
                        </Typography>
                        <Typography sx={{ padding: "0 80px" }}>
                            8.00
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sm={6} md={4}>
                        <Typography sx={{ margin: "20px 50px" }}>
                            เป็นจำนวนเงิน
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
};

export default ComproCapital;
