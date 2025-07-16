import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Box,
    Grid,
} from '@mui/material';

function SearchYear() {
    const [selectedYear, setSelectedYear] = useState('');

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography>ค้นหา</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="year-select-label">ปี</InputLabel>
                        <Select
                            labelId="year-select-label"
                            value={selectedYear}
                            onChange={handleChange}
                            label="ปี"
                            sx={{ backgroundColor: 'white', height: '45px' }}
                        >
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchYear;
