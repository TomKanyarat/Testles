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
const drawerWidth = 240;

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
    const [openSee, setOpenSee] = React.useState(false);
    const [openList, setOpenList] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState('');
    const [openSystem, setOpenSystem] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setOpenSendEmail(false);  // ปิดเมนูย่อยของ "งานดำเนินคดี"
        setOpenList(false);  // ปิดเมนูย่อยของ "งานบังคับคดี"
        setOpenSee(false);  // ปิดเมนูย่อยของ "พิพากษา"
        setOpenSystem(false);  // ปิดเมนูย่อยของ "งานระบบ'"

        // หากเมนูที่เลือกอยู่ในเมนูย่อย ให้ไม่รีเซ็ตการเลือก
        if (selectedMenu === 'บอกเลิกสัญญา' || selectedMenu === 'สั่งฟ้อง') {
            setSelectedMenu(selectedMenu);  // เก็บเมนูที่เลือก
        }
    };
    const toggleSendEmailMenu = () => {
        setSelectedMenu('งานดำเนินคดี'); // 👈 สำคัญ
        setOpenSendEmail(prev => !prev);
        setOpenList(false);  // ปิดเมนูย่อยของ "งานบังคับคดี"
        setOpenSee(false);  // ปิดเมนูย่อยของ "พิพากษา"
        setOpenSystem(false);  // ปิดเมนูย่อยของ "งานระบบ"
    };

    const toggleSeeMenu = () => {
        setOpenSee(prev => !prev);
        setOpenSystem(false);
        setOpenSendEmail(false);
        setOpenList(false);
    };

    const toggleList = () => {
        setSelectedMenu('งานบังคับคดี'); // 👈 สำคัญ
        setOpenList(prev => !prev);
        setOpenSystem(false);
        setOpenSendEmail(false);
        setOpenSee(false);
    };


    const toggleSystem = () => {
        setSelectedMenu('งานระบบ'); // 
        setOpenSystem(prev => !prev);
        setOpenSendEmail(false);        // ปิดเมนูอื่น
        setOpenList(false);
        setOpenSee(false);

    };

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

                <List>
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
                </List>


                <List>
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
                                    {text === 'หน้าแรก' ? <House /> : <BookText />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                {open && <ArrowDropDownIcon />} {/* แสดง ArrowDropDownIcon เฉพาะเมื่อ Drawer เปิด */}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Collapse in={openSystem} timeout="auto" unmountOnExit>
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
                </Collapse>


                <List>
                    {['งานดำเนินคดี'].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                disabled={!open} // ปิดการคลิกเมนูเมื่อ drawer ปิด
                                onClick={toggleSendEmailMenu}
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
                                    minWidth: 0, mr: open ? 3 : 'auto',
                                    justifyContent: open ? 'initial' : 'center',
                                    color: selectedMenu === text ? 'white' : 'inherit', // เปลี่ยนสีไอคอนเมื่อเลือก
                                }}>
                                    <BookText />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                {open && <ArrowDropDownIcon />} {/* แสดง ArrowDropDownIcon เฉพาะเมื่อ Drawer เปิด */}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Collapse in={openSendEmail} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                            { name: 'บอกเลิกสัญญา', link: '/page/CancelContract' },
                            { name: 'สั่งฟ้อง', link: '/page/Sue' },
                            { name: 'พิพากษา', link: '#', onClick: toggleSeeMenu },
                        ].map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton
                                    onClick={(event) => {
                                        // หากไม่ใช่ "พิพากษา" ให้ตั้งค่าเมนูที่เลือก
                                        if (item.name !== 'พิพากษา') {
                                            setSelectedMenu(item.name);
                                        }
                                        // ตรวจสอบว่ามี onClick ใน item หรือไม่
                                        if (item.onClick) {
                                            item.onClick(event);  // เรียกใช้ฟังก์ชัน onClick ของ item ถ้ามี
                                        }
                                    }}
                                    component={item.link === '#' ? 'div' : Link}
                                    to={item.link !== '#' ? item.link : undefined}
                                    sx={{
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
                                    }}
                                >
                                    <ListItemText primary={item.name} />
                                    {/* ใส่ไอคอนเฉพาะกับ "พิพากษา" */}
                                    {item.name === 'พิพากษา' && <ArrowDropDownIcon />}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

                <Collapse in={openSee} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                            { name: 'ชั้นต้น', link: '/page/ResultsFirst' },
                            { name: 'ชั้นอุทธรณ์', link: '/page/Appeal' },
                            { name: 'ชั้นฎีกา', link: '/page/SupremeLaw' },
                        ].map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.link}
                                    onClick={() => setSelectedMenu(item.name)} // ตั้งค่าเมนูย่อยที่ถูกเลือก
                                    sx={{
                                        pl: 4,
                                        bgcolor: location.pathname === item.link ? '#1530A8' : 'transparent', // ✅ เปลี่ยนพื้นหลังถ้า path ตรงกัน
                                        color: location.pathname === item.link ? 'white' : 'inherit',
                                        '&:hover': {
                                            bgcolor: '#1530A8',
                                            color: 'white',
                                            '& .MuiListItemText-root': {
                                                color: 'white',
                                            },
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

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
