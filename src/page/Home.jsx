import { Grid, Card, Box } from '@mui/material';
import SubHeader from '../component/SubHeader';
import Searchyear from '../component/Searchyear';
import CardSue from '../component/CardSue';
import TestMenu from '../component/TestMenu';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <TestMenu />

      <Box component="main" sx={{ flexGrow: 1, overflow: 'auto', }}>
        <SubHeader />
        <SubHeader text="หน้าหลัก" />

        <Searchyear />

        <Grid container spacing={2} sx={{ padding: '10px' }}>
          {/* CardSue Section */}
          <Grid item xs={12}>
            <Card
              sx={{
                padding: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ccc',
              }}
            >
              <CardSue />
            </Card>
          </Grid>

          {/* Future Cards: Uncomment as needed */}
          {/*
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2 }}>
              <CardText />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2 }}>
              <CardCompromise />
            </Card>
          </Grid>
          */}
        </Grid>
      </Box>
    </Box>
  );
}
