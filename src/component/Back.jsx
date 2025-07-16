import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Back = (props) => {
    const location = useLocation();

    const buttonLinks = [
        { path: "/page/Compromise", label: props.backCompromise },
        { path: "/page/DetailCompromise", label: props.BackDetailCompromise },
        { path: "/page/Sue", label: props.BackSue },
        { path: "/page/Appeal", label: props.BackAppeal },
        { path: "/page/DetailAppeal", label: props.BackConfirmAppeal },
        { path: "/page/EditAppeal", label: props.BackEditAppeal },
        { path: "/page/ProsecutionAppeal", label: props.BackProsecutionAppeal },
        { path: "/page/WarrantApeal", label: props.BackFormWarrantApeal },
        { path: "/page/SupremeLaw", label: props.BackSupremeLaw },
        { path: "/page/EditSupremeLaw", label: props.BackEditSupremeLaw },
        { path: "/page/WarrantSupremeLaw", label: props.BackWarrantSPL },
        { path: "/page/DetailWearRights", label: props.BackDetailWearRights },
        { path: "/page/ForcedWarrant", label: props.BackForcedWarrant },
        { path: "/page/WearRights", label: props.BackWearRights },
        { path: "/page/ResultsInvestigation", label: props.backResultInves },
        { path: "/page/DetailResultInvestigation", label: props.backNoFound },
        { path: "/page/SeizePPT", label: props.BackSeizePPT },
        { path: "/page/DetailSeizePPT", label: props.BackDetailSeizePPT },
        { path: "/page/SeizeMoney", label: props.BackSeizeMoney },
        { path: "/page/CancelContract", label: props.BackCancelContract },
        { path: "/page/RecordCancelContract", label: props.BackRecordCancelContract },
        { path: "/page/Auction", label: props.backAuction },
        { path: "/page/DetailAuction", label: props.BackDetailAuction },
        { path: "/page/AnnounceAuction", label: props.BackFromAnnounceAuction },
        { path: "/page/SystemWork", label: props.BackConditCancel },
    ];

    const currentPath = location.pathname;

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "20px 30px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px"
                    }}
                >
                    {buttonLinks.map(({ path, label }) =>
                        path !== currentPath && label ? (
                            <Button
                                key={path}
                                component={Link}
                                to={path}
                                startIcon={<ArrowBackIcon />}
                                sx={{
                                    height: 20,
                                    color: "black",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                }}
                            >
                                {label}
                            </Button>
                        ) : null
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Back;
