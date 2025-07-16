import React, { useState } from 'react';
import Back from '../component/Back';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
// import DetailName from '../component/DetailName';
import { Link } from 'react-router-dom';
// import TBSeizeAssets from '../TB/TBSeizeAssets';
import SaveIcon from '@mui/icons-material/Save'
import TBRecordCancelFromOne from '../TB/TBRecordCancelFromOne'

function RecordCancelFromOne() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
        }
    };


    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }
    return (
        <div style={{ backgroundColor: '#efefef', height: '100vh' }}>
            <Back BackRecordCancelContract="กลับ" />
            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>

                    <Typography sx={{ marginLeft: '15px'}}> บันทึกผลการจัดส่งข้อมูลหนังสือบอกเลิกสัญญา</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={4} sx={{ marginTop: '5px', marginLeft: '30px', }}>
                            <Typography>Upload ไฟล์สถานะการจัดส่ง</Typography>
                            <input
                                id="pdf-upload"
                                type="file"
                                accept="application/pdf"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <label htmlFor="pdf-upload">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Button variant="contained" component="span">
                                        เลือกไฟล์
                                    </Button>

                                    {previewUrl && (
                                        <Box sx={{ mt: 2 }}>
                                            <Link
                                                variant="outlined"
                                                color="primary"
                                                onClick={() => window.open(previewUrl, '_blank')}
                                            >
                                                {selectedFile && (
                                                    <Typography variant="body2">
                                                        {selectedFile.name}
                                                    </Typography>
                                                )}
                                            </Link>
                                        </Box>
                                    )}
                                </Box>
                            </label>




                        </Grid>
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
                                    background: 'linear-gradient(90deg, #081342, #102583, #1530A8)',
                                    color: 'white',
                                    boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                                }}>
                                <SaveIcon />
                                บันทึก
                            </Button>

                            <Button
                                sx={{
                                    backgroundColor: '#efefef',
                                    color: 'gray',
                                    boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
                                }}>
                                ยกเลิก
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ padding: '20px 20px', }}>
                <Grid item xs={12} sm={12} md={12}
                    sx={{
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                        padding: '15px',
                    }}>
<Typography sx={{ marginLeft: '15px'}}>รายการลูกหนี้ที่รอบอกเลิกสัญญา</Typography>
                    <Divider sx={{ borderColor: '#1530A8' }} />
                    <Grid item xs={12} sm={12} md={12} sx={{ marginTop: '15px' }}>
                        <TBRecordCancelFromOne />
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}

export default RecordCancelFromOne