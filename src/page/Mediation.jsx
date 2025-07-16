import React from 'react';
import {Box} from '@mui/material';
import TestMenu from '../component/TestMenu';
import SubHeader from '../component/SubHeader';

function Mediation() {
    return (
        <div style={{ backgroundColor: '#efefef' }}>
            <Box sx={{ display: 'flex' }}>
                <TestMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                    <SubHeader />
                    <SubHeader Searchtocreate="ค้นหาลูกหนี้เพื่อสร้างหนังสือบันทึกข้อตกลงไกล่เกลี่ย"  />
                </Box>
            </Box>

        </div>
    )
}

export default Mediation