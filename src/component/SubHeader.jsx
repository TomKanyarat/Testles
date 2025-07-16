import React from 'react';
import { Box, Grid, } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = (props) => {
  const location = useLocation();

  const menuItems = [
    { label: props.text, path: "/" },
    { label: props.SystemWork, path: "/page/SystemWork" },
    { label: props.textheader, path: "/page/Sue" },
    { label: props.CancelContract, path: "/page/CancelContract" },
    { label: props.RecordCancelContract, path: "/page/RecordCancelContract" },
    { label: props.textll, path: "/page/Compromise" },

    // ชั้นต้น
    { label: props.ResultsFirst, path: "/page/ResultsFirst" },
    { label: props.FirstDegreeCase, path: "/page/FirstDegreeCase" },

    // อุทธรณ์
    { label: props.Appeal, path: "/page/Appeal" },
    { label: props.ResultAppeal, path: "/page/ResultAppeal" },
    { label: props.EditAppeal, path: "/page/EditAppeal" },
    { label: props.ProsecutionAppeal, path: "/page/ProsecutionAppeal" },
    { label: props.WarrantApeal, path: "/page/WarrantApeal" },
    // ฎีกา
    { label: props.SupremeLaw, path: "/page/SupremeLaw" },
    { label: props.ResultSupremeLaw, path: "/page/ResultSupremeLaw" },
    { label: props.EditSupremeLaw, path: "/page/EditSupremeLaw" },
    { label: props.ProsecutionSupremeLaw, path: "/page/ProsecuSupremeLaw" },
    { label: props.WarrantSupremeLaw, path: "/page/WarrantSupremeLaw" },

    // บังคับคดี
    { label: props.WearRights, path: "/page/WearRights" },
    { label: props.ForcedWarrant, path: "/page/ForcedWarrant" },
    { label: props.Searchtocreate, path: "/page/ForcedWarrant" }, // เส้นทางซ้ำ
    { label: props.ResultsInvestigation, path: "/page/ResultsInvestigation" },
    { label: props.SeizePPT, path: "/page/SeizePPT" },
    { label: props.DeteilSeizePPT, path: "/page/DetailSeizePPT" },
    { label: props.SeizeMoney, path: "/page/SeizeMoney" },
    { label: props.Auction, path: "/page/Auction" },
    { label: props.AnnounceAuction, path: "/page/AnnounceAuction" },
    // { label: props.AnnounceAuction, path: "/page/AnnounceAuction" },

  ];
  // Searchtocreate
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '24px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {menuItems.map((item, index) =>
              item.label ? (
                <Link
                  key={index}
                  to={item.path}
                  style={{
                    textDecoration: location.pathname === item.path ? 'underline' : 'none',
                    color: location.pathname === item.path ? '#1530A8' : 'black',
                    fontSize: '0.95rem',
                  }}
                >
                  {item.label}
                </Link>
              ) : null
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
    //      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
    //   {menuItems.map((item, index) =>
    //     item.label ? (
    //       <Button
    //         key={index}
    //         component={Link}
    //         to={item.path}
    //         variant={location.pathname === item.path ? 'contained' : 'text'} // ✅ กำหนดปุ่มแบบ Active
    //         sx={{
    //           fontSize: '0.95rem',
    //           color: location.pathname === item.path ? 'white' : 'black',
    //           backgroundColor: location.pathname === item.path ? '#1530A8' : 'transparent',
    //           textTransform: 'none',
    //           '&:hover': {
    //             backgroundColor: location.pathname === item.path ? '#102583' : '#f0f0f0',
    //           },
    //         }}
    //       >
    //         {item.label}
    //       </Button>
    //     ) : null
    //   )}
    // </Box>

  );
};

export default SubHeader;

