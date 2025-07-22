import * as React from 'react';
import {
    Accordion, AccordionSummary, AccordionDetails, Box,
    Typography, TextField, Grid, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function OfficeInfoSection() {

    const [expanded, setExpanded] = React.useState(true);

    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Box sx={{ display: 'flex', height: '100%' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1530A8' }} />}
                                sx={{ flexDirection: 'row-reverse' }} >
                                <Typography sx={{ fontWeight: 'bold' }}>ข้อมูลสำนักงาน</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>ประเภทสำนักงานทนายความ <span style={{color: 'red'}}>*</span></Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>ชื่อ <span style={{color: 'red'}}>*</span></Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>เลขประจำตัวผู้เสียภาษี *</Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>ความสามารถในการรับงาน *</Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>โทรศัพท์</Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography>อีเมล</Typography>
                                        <TextField fullWidth size="small" variant="outlined" />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography>สถานะสำนักงานทนายความ</Typography>
                                        <RadioGroup row defaultValue="register">
                                            <FormControlLabel value="register" control={<Radio />} label="ขึ้นทะเบียน" />
                                            <FormControlLabel value="withdraw" control={<Radio />} label="เพิกถอน" />
                                        </RadioGroup>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography>การรับมอบงาน</Typography>
                                        <RadioGroup row defaultValue="accept">
                                            <FormControlLabel value="accept" control={<Radio />} label="รับงานได้" />
                                            <FormControlLabel value="not_accept" control={<Radio />} label="ไม่สามารถรับงานได้" />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}
