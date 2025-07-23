import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link, } from 'react-router-dom';
import {
    Box, Toolbar, IconButton, List, ListItem, ListItemButton,
    Typography, ListItemIcon, ListItemText, Collapse,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { House } from 'lucide-react';
import DSL from '../Image/DSL.png';
import { BookText } from 'lucide-react';

const drawerWidth = 290;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));


export default function TemporaryDrawer() {
    const location = useLocation();  // ดึง path ปัจจุบัน เช่น /page/SystemWork
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openSendEmail, setOpenSendEmail] = React.useState(false);
    const [openList, setOpenList] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState('');
    // const [openSystem, setOpenSystem] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        openMenusFromPath(location.pathname); // แสดงเมนูที่ตรงกับ path ปัจจุบัน
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setOpenSendEmail(false);  // ปิดเมนูย่อยของ "งานดำเนินคดี"
        setOpenList(false);  // ปิดเมนูย่อยของ "งานบังคับคดี"
        setOpenSee(false);  // ปิดเมนูย่อยของ "พิพากษา"
        // setOpenSystem(false);  // ปิดเมนูย่อยของ "งานระบบ'"
    };
    const toggleSendEmailMenu = () => {
        setOpenSendEmail(!openSendEmail);
    };

    const toggleList = () => {
        setOpenList(!openList);
    };

    const [openSubFirstLevel, setOpenSubFirstLevel] = React.useState(false);
    // const [openSubApeal, setOpenSubApeal] = React.useState(false);
    // State
    const [openCancelMenu, setOpenCancelMenu] = React.useState(false);
    const [openSueMenu, setOpenSueMenu] = React.useState(false);
    const [openSee, setOpenSee] = React.useState(false);
    const [openSeeApeal, setOpenSeeApeal] = React.useState(false);
    const [openSupreme, setOpenSupreme] = React.useState(false);
    // const [openEditAppeal, setOpenEditAppeal] = React.useState(false);

    // Toggle
    const toggleCancelMenu = () => setOpenCancelMenu(!openCancelMenu);
    const toggleSueMenu = () => setOpenSueMenu(!openSueMenu);
    const toggleSeeMenu = () => setOpenSee(!openSee);

    const openMenusFromPath = (path) => {
        // เคลียร์เมนูทั้งหมดก่อน
        setOpenSendEmail(false);
        setOpenCancelMenu(false);
        setOpenSueMenu(false);
        setOpenSee(false);
        setOpenSeeApeal(false);
        setOpenList(false);
        setOpenSubFirstLevel(false);
        setOpenSupreme(false);

        // ตรวจสอบ path แล้วเปิดเฉพาะเมนูย่อยที่เกี่ยวข้อง
        if (['/page/CancelContract', '/page/RecordCancelContract'].includes(path)) {
            setOpenSendEmail(true);
            setOpenCancelMenu(true);
        } else if (['/page/Sue', '/page/Compromise'].includes(path)) {
            setOpenSendEmail(true);
            setOpenSueMenu(true);
        } else if (['/page/ResultsFirst', '/page/FirstDegreeCase'].includes(path)) {
            setOpenSendEmail(true);
            setOpenSee(true);
            setOpenSubFirstLevel(true);
        } else if (['/page/Appeal', '/page/ResultAppeal', '/page/EditAppeal', '/page/ProsecutionAppeal', '/page/WarrantApeal'].includes(path)) {
            setOpenSendEmail(true);
            setOpenSee(true);
            setOpenSeeApeal(true);
        } else if (['/page/SupremeLaw', '/page/ResultSupremeLaw', '/page/EditSupremeLaw', '/page/ProsecuSupremeLaw'].includes(path)) {
            setOpenSendEmail(true);
            setOpenSee(true);
            setOpenSupreme(true);
        } else if ([
            '/page/WearRights',
            '/page/ForcedWarrant',
            '/page/Mediation',
            '/page/ResultsInvestigation',
            '/page/SeizePPT',
            '/page/Auction',
            '/page/PetitionProperty',
            '/page/FileBankruptcy',
        ].includes(path)) {
            setOpenList(true);
        }
    };

    React.useEffect(() => {
        if (open) {
            openMenusFromPath(location.pathname);
        }
    }, [location.pathname, open]);


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{
                backgroundColor: '#1530A8',
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <img src={DSL} alt="DSL Logo" style={{ width: '50px', height: 'auto', marginTop: '5px' }} />
                    </Typography>
                    <Typography></Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{ backgroundColor: ' #1530A8' }}>
                    <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                {/* <List>
                    {['หน้าแรก'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                disabled={!open}
                                onClick={() => {
                                    // ไม่ต้องรีเซ็ตการเลือกเมนูหากคลิกที่ "หน้าแรก"

                                    setSelectedMenu(text);  // ตั้งค่าเมนูที่เลือก
                                }
                                }
                                component={Link}
                                to="/"
                                sx={{
                                    justifyContent: open ? 'initial' : 'center',
                                    bgcolor: location.pathname === '/' ? '#1530A8' : 'transparent', // ✅ เช็ค path
                                    color: location.pathname === '/' ? 'white' : 'inherit',
                                    '&:hover': {
                                        bgcolor: location.pathname === '/' ? '#1530A8' : '#f0f0f0',
                                        color: location.pathname === '/' ? 'white' : 'inherit',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{
                                    minWidth: 0, mr: open ? 3 : 'auto',
                                    justifyContent: open ? 'initial' : 'center',
                                    color: selectedMenu === text && selectedMenu !== '' ? 'white' : 'inherit',
                                }}>
                                    <House />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>  */}

                {/* <List>
                    {['งานระบบ'].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                disabled={!open} // ปิดการคลิกเมนูเมื่อ drawer ปิด
                                onClick={toggleSystem}
                                sx={{
                                    justifyContent: open ? 'initial' : 'center',
                                    bgcolor: selectedMenu === text ? '#1530A8' : 'transparent',  // เปลี่ยนพื้นหลังเมนูที่เลือก
                                    color: selectedMenu === text ? 'white' : 'inherit',  // เปลี่ยนสีข้อความเมนูที่เลือก
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: open ? 'initial' : 'center',
                                    color: selectedMenu === text ? 'white' : 'inherit', // เปลี่ยนสีไอคอนเมื่อเลือก
                                }}>
                                    <BookText />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                {open && <ArrowDropDownIcon />} 
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>  */}

                {/* <Collapse in={openSystem} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                            { name: 'เงื่อนไขเพื่อคัดลูกหนี้เพื่อการบอกเลิกสัญญาและดำเนินคดี', link: '/page/SystemWork' },
                            { name: 'เงื่อนไขสัญญาประนีประนอมยอมความ', link: '/page/ForcedWarrant' },
                            { name: 'เงื่อนไขลูกหนี้ที่เข้าข่ายบังคับคดี', link: '/page/ConditEnforcement' },
                            // { name: 'สืบทรัพย์', link: '/page/ResultsInvestigation' },
                            // { name: 'ยึดทรัพย์', link: '/page/SeizePPT' },
                            // { name: 'ขายทอดตลาด', link: '/page/Auction' },
                            // { name: 'ยื่นคำร้องของเฉลี่ยทรัพย์', link: '/page/PetitionProperty' },
                            // { name: 'ยื่นขอรับชำระหนี้คดีล้มละลาย', link: '/page/FileBankruptcy' },


                        ].map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton component={Link} to={item.link} sx={{
                                    pl: 4,
                                    bgcolor: location.pathname === item.link ? '#1530A8' : 'transparent', // ✅ เปลี่ยนพื้นหลังถ้า path ตรงกัน
                                    color: location.pathname === item.link ? 'white' : 'inherit',
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                        '& .MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    }
                                }}>
                                    <ListItemText
                                        sx={{
                                            whiteSpace: 'normal',
                                            wordBreak: 'break-word',
                                        }} primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>  */}

                <List>
                    {/* หัวข้อหลัก: งานดำเนินคดี */}
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            disabled={!open}
                            onClick={toggleSendEmailMenu}
                            sx={{
                                justifyContent: open ? 'initial' : 'center',
                                bgcolor: 'transparent',  // ✅ ไม่เปลี่ยนสีพื้นหลังเมื่อคลิก
                                color: 'inherit',        // ✅ ไม่เปลี่ยนสีข้อความเมื่อคลิก
                                '&:hover': {
                                    bgcolor: '#1530A8',
                                    color: 'white',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: open ? 'initial' : 'center',
                                    color: 'inherit',  // ✅ ไม่เปลี่ยนสีไอคอน
                                }}
                            >
                                <BookText />
                            </ListItemIcon>
                            <ListItemText primary="งานดำเนินคดี" sx={{ opacity: open ? 1 : 0 }} />
                            {open && <ArrowDropDownIcon />}
                        </ListItemButton>
                    </ListItem>

                    {/* เมนูย่อยของงานดำเนินคดี */}
                    <Collapse in={openSendEmail} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* กลุ่ม: บอกเลิกสัญญา */}
                            <ListItemButton onClick={toggleCancelMenu}
                                sx={{
                                    pl: 4,
                                    bgcolor: 'transparent',
                                    color: 'inherit',
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                        '& .MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    },
                                }}>
                                <ListItemText primary="บอกเลิกสัญญา" />
                                <ArrowDropDownIcon />
                            </ListItemButton>

                            <Collapse in={openCancelMenu} timeout="auto" unmountOnExit>
                                {[{ name: 'รายการลูกหนี้ที่รอบอกเลิกสัญญา', link: '/page/CancelContract' },
                                { name: 'บันทึกผลการจัดส่งข้อมูลหนังสือบอกเลิกสัญญา', link: '/page/RecordCancelContract' }].map((item) => (
                                    <ListItem key={item.name} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to={item.link}
                                            onClick={() => setSelectedMenu(item.name)} // ✅ ใส่ตรงนี้!
                                            sx={{
                                                pl: 6,
                                                bgcolor: location.pathname === item.link ? '#1530A8' : 'transparent',
                                                color: location.pathname === item.link ? 'white' : 'inherit',
                                                '&:hover': {
                                                    bgcolor: '#1530A8',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <ListItemText primary={item.name} sx={{
                                                whiteSpace: 'normal',
                                                wordBreak: 'break-word',
                                            }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Collapse>

                            {/* กลุ่ม: สั่งฟ้อง */}
                            <ListItemButton onClick={toggleSueMenu}
                                sx={{
                                    pl: 4,
                                    bgcolor: 'transparent',
                                    color: 'inherit',
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                        '& .MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    },
                                }}>
                                <ListItemText primary="สั่งฟ้อง" />
                                <ArrowDropDownIcon />
                            </ListItemButton>
                            <Collapse in={openSueMenu} timeout="auto" unmountOnExit>
                                {[{ name: 'สร้างคำฟ้อง', link: '/page/Sue' }, { name: 'สร้างสัญญาประนีประนอม', link: '/page/Compromise' }].map((item) => (
                                    <ListItem key={item.name} disablePadding>
                                        <ListItemButton
                                            component={Link}
                                            to={item.link}
                                            onClick={() => setSelectedMenu(item.name)}
                                            sx={{
                                                pl: 6,
                                                bgcolor: location.pathname === item.link ? '#1530A8' : 'transparent',
                                                color: location.pathname === item.link ? 'white' : 'inherit',
                                                '&:hover': {
                                                    bgcolor: '#1530A8',
                                                    color: 'white',
                                                },
                                            }}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </Collapse>

                            {/* กลุ่ม: พิพากษา */}
                            <ListItemButton onClick={toggleSeeMenu}
                                sx={{
                                    pl: 4,
                                    bgcolor: 'transparent',
                                    color: 'inherit',
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                        '& .MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    },
                                }}>
                                <ListItemText primary="พิพากษา" />
                                <ArrowDropDownIcon />
                            </ListItemButton>

                            <Collapse in={openSee} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* ชั้นต้น */}
                                    <ListItemButton
                                        onClick={() => setOpenSubFirstLevel(!openSubFirstLevel)}
                                        sx={{
                                            pl: 6,
                                            bgcolor: 'transparent',
                                            color: 'inherit',
                                            '&:hover': {
                                                bgcolor: '#1530A8',
                                                color: 'white',
                                            },
                                        }}>
                                        <ListItemText primary="ชั้นต้น" />
                                        <ArrowDropDownIcon />
                                    </ListItemButton>

                                    <Collapse in={openSubFirstLevel} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/ResultsFirst"
                                                    onClick={() => setSelectedMenu('ผลการดำเนินคดีศาลชั้นต้น')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/ResultsFirst' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/ResultsFirst' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText primary="ผลการดำเนินคดีศาลชั้นต้น" />
                                                </ListItemButton>

                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/FirstDegreeCase"
                                                    onClick={() => setSelectedMenu('ออกคำบังคับคดีชั้นต้น')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/FirstDegreeCase' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/FirstDegreeCase' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ออกคำบังคับคดีชั้นต้น" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/FirstDegreeCase"
                                                    onClick={() => setSelectedMenu('ออกคำบังคับคดีชั้นต้น')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/FirstDegreeCase' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/FirstDegreeCase' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }} >
                                                    <ListItemText primary="ออกคำบังคับคดีชั้นต้น" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Collapse>

                                    {/* ชั้นอุทธรณ์ */}
                                    <ListItemButton
                                        onClick={() => setOpenSeeApeal(!openSeeApeal)}
                                        sx={{
                                            pl: 6,
                                            bgcolor: 'transparent',
                                            color: 'inherit',
                                            '&:hover': {
                                                bgcolor: '#1530A8',
                                                color: 'white',
                                            },
                                        }}>
                                        <ListItemText primary="ชั้นอุทธรณ์" />
                                        <ArrowDropDownIcon />
                                    </ListItemButton>

                                    <Collapse in={openSeeApeal} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/Appeal"
                                                    onClick={() => setSelectedMenu('ยื่นอุทธรณ์/งดอุทธรณ์')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/Appeal' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/Appeal' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText primary="ยื่นอุทธรณ์/งดอุทธรณ์" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/ResultAppeal"
                                                    onClick={() => setSelectedMenu('ผลพิจารณอนุมัติยื่นอุทธรณ์/งดอุทธรณ์')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/ResultAppeal' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/ResultAppeal' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText primary="ผลพิจารณอนุมัติยื่นอุทธรณ์/งดอุทธรณ์" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/EditAppeal"
                                                    onClick={() => setSelectedMenu('ยื่น/แก้อุทธรณ์')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/EditAppeal' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/EditAppeal' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText primary="ยื่น/แก้อุทธรณ์" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/ProsecutionAppeal"
                                                    onClick={() => setSelectedMenu('ผลการดำเนินคดี')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/ProsecutionAppeal' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/ProsecutionAppeal' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ผลการดำเนินคดี" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/WarrantApeal"
                                                    onClick={() => setSelectedMenu('ออกหมายบังคับคดี')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/WarrantApeal' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/WarrantApeal' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }} >
                                                    <ListItemText primary="ออกหมายบังคับคดี" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Collapse>

                                    {/* ชั้นฎีกา*/}
                                    <ListItemButton
                                        onClick={() => setOpenSupreme(!openSupreme)}
                                        sx={{
                                            pl: 6,
                                            bgcolor: 'transparent',
                                            color: 'inherit',
                                            '&:hover': {
                                                bgcolor: '#1530A8',
                                                color: 'white',
                                            },
                                        }}>
                                        <ListItemText primary="ชั้นฎีกา" />
                                        <ArrowDropDownIcon />
                                    </ListItemButton>
                                    <Collapse in={openSupreme} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/SupremeLaw"
                                                    onClick={() => setSelectedMenu('ยื่นฎีกา')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/SupremeLaw' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/SupremeLaw' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ยื่นฎีกา" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/ResultSupremeLaw"
                                                    onClick={() => setSelectedMenu('ผลพิจารณาอนุมัติยื่นฎีกา/งดฎีกา')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/ResultSupremeLaw' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/ResultSupremeLaw' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ผลพิจารณาอนุมัติยื่นฎีกา/งดฎีกา" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/EditSupremeLaw"
                                                    onClick={() => setSelectedMenu('ยื่น/แก้ฎีกา')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/EditSupremeLaw' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/EditSupremeLaw' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ยื่น/แก้ฎีกา" />
                                                </ListItemButton>
                                            </ListItem>


                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to="/page/ProsecuSupremeLaw"
                                                    onClick={() => setSelectedMenu('ผลการดำเนินคดี')}
                                                    sx={{
                                                        pl: 8,
                                                        bgcolor: location.pathname === '/page/ProsecuSupremeLaw' ? '#1530A8' : 'transparent',
                                                        color: location.pathname === '/page/ProsecuSupremeLaw' ? 'white' : 'inherit',
                                                        '&:hover': {
                                                            bgcolor: '#1530A8',
                                                            color: 'white',
                                                        },
                                                    }}>
                                                    <ListItemText primary="ผลการดำเนินคดี" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Collapse>

                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                </List>


                <List>
                    {['งานบังคับคดี'].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                disabled={!open}
                                onClick={text === 'งานบังคับคดี' ? toggleList : null}  // เชื่อมโยงการคลิกกับฟังก์ชัน toggleList
                                component={text === 'หน้าแรก' ? Link : 'div'}
                                to={text === 'หน้าแรก' ? '/' : undefined}
                                sx={{
                                    justifyContent: open ? 'initial' : 'center',
                                    bgcolor: selectedMenu === text ? '#1530A8' : 'transparent',  // เปลี่ยนพื้นหลังเมนูที่เลือก
                                    color: selectedMenu === text ? 'white' : 'inherit',  // เปลี่ยนสีข้อความเมนูที่เลือก
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: open ? 'initial' : 'center',
                                    color: selectedMenu === text ? 'white' : 'inherit', // เปลี่ยนสีไอคอนเมื่อเลือก
                                }}>
                                    {text === 'หน้าแรก' ? <House /> : <BookText />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                {open && <ArrowDropDownIcon />} {/* แสดง ArrowDropDownIcon เฉพาะเมื่อ Drawer เปิด */}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Collapse in={openList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                            { name: 'สวมสิทธิ์', link: '/page/WearRights' },
                            { name: 'ออกหมายบังคับคดี', link: '/page/ForcedWarrant' },
                            { name: 'งานไกล่เกลี่ย', link: '/page/Mediation' },
                            { name: 'สืบทรัพย์', link: '/page/ResultsInvestigation' },
                            { name: 'ยึดทรัพย์', link: '/page/SeizePPT' },
                            { name: 'ขายทอดตลาด', link: '/page/Auction' },
                            { name: 'ยื่นคำร้องของเฉลี่ยทรัพย์', link: '/page/PetitionProperty' },
                            { name: 'ยื่นขอรับชำระหนี้คดีล้มละลาย', link: '/page/FileBankruptcy' },


                        ].map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton component={Link} to={item.link} sx={{
                                    pl: 4,
                                    bgcolor: location.pathname === item.link ? '#1530A8' : 'transparent', // ✅ เปลี่ยนพื้นหลังถ้า path ตรงกัน
                                    color: location.pathname === item.link ? 'white' : 'inherit',
                                    '&:hover': {
                                        bgcolor: '#1530A8',
                                        color: 'white',
                                        '& .MuiListItemText-root': {
                                            color: 'white',
                                        },
                                    }
                                }}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>


            </Drawer>

        </Box >
    );
}
