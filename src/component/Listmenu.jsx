import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { Link, Routes, Route } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import Collapse from '@mui/material/Collapse';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

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
  
const Listmenu = () => {
const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSendEmail, setOpenSendEmail] = React.useState(false);
  const [openSee, setOpenSee] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenSendEmail(false);  // ปิดเมนูย่อยของ "งานดำเนินคดี"
    setOpenList(false);  // ปิดเมนูย่อยของ "งานบังคับคดี"
  };

  const toggleSendEmailMenu = () => {
    setOpenSendEmail(!openSendEmail);
    // ปิดเมนูย่อยของ "งานบังคับคดี" เมื่อเปิด "งานดำเนินคดี"
    setOpenList(false);
  };

  const toggleSeeMenu = () => {
    setOpenSee(!openSee);
  };

  const toggleList = () => {
    setOpenList(!openList);
  };

  const toggleListMenu = (menu) => {
    setSelectedMenu(menu); // กำหนดเมนูที่เลือก
  };

  return (
    <>
    <List>
          {['หน้าแร'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                disabled={!open}
                onClick={() => {
                  toggleListMenu(text);  // เปลี่ยนเมนูที่เลือก
                  if (text === 'งานบังคับคดี') toggleList();  // เชื่อมโยงการคลิกกับฟังก์ชัน toggleList
                  setSelectedMenu(text);  // ตั้งค่าที่เลือกเมื่อคลิก
                }}
                component={text === 'หน้าแรก' ? Link : 'div'}
                to={text === 'หน้าแรก' ? '/' : undefined}
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  bgcolor: selectedMenu === text ? '#1530A8' : 'transparent',  // เปลี่ยนพื้นหลังเมนูที่เลือก
                  color: selectedMenu === text ? 'white' : 'inherit',  // เปลี่ยนสีข้อความเมนูที่เลือก
                  '&:hover': {
                    bgcolor: selectedMenu === text ? '#1530A8' : 'transparent',  // เปลี่ยนสีเมนูที่เลือกเมื่อ hover
                    color: selectedMenu === text ? 'white' : 'inherit',  // เปลี่ยนสีข้อความเมนูที่เลือกเมื่อ hover
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                  {text === 'หน้าแรก' ? <HomeIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          {['งานดำเนินคดี'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                disabled={!open} // ปิดการคลิกเมนูเมื่อ drawer ปิด
                onClick={toggleSendEmailMenu}
                sx={{ justifyContent: open ? 'initial' : 'center' }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                  <MailIcon />
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
              { name: 'Compose', link: '/page/Terminate_the_contract' },
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
                    justifyContent: open ? 'initial' : 'center',
                    bgcolor: item.name === 'พิพากษา' ? 'transparent' : (selectedMenu === item.name ? '#1530A8' : 'transparent'),  // เปลี่ยนพื้นหลังเมนูที่เลือก ยกเว้น "พิพากษา"
                    color: item.name === 'พิพากษา' ? 'inherit' : (selectedMenu === item.name ? 'white' : 'inherit'),  // เปลี่ยนสีข้อความเมนูที่เลือก ยกเว้น "พิพากษา"
                    '&:hover': {
                      bgcolor: item.name === 'พิพากษา' ? 'transparent' : (selectedMenu === item.name ? '#1530A8' : 'transparent'),  // เปลี่ยนสีเมนูที่เลือกเมื่อ hover ยกเว้น "พิพากษา"
                      color: item.name === 'พิพากษา' ? 'inherit' : (selectedMenu === item.name ? 'white' : 'inherit'),  // เปลี่ยนสีข้อความเมนูที่เลือกเมื่อ hover ยกเว้น "พิพากษา"
                    },
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
              { name: 'ชั้นต้น', link: '/page/Judgment' },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.link}
                  onClick={() => setSelectedMenu(item.name)} // ตั้งค่าเมนูย่อยที่ถูกเลือก
                  sx={{
                    pl: 4,
                    justifyContent: open ? 'initial' : 'center',
                    bgcolor: selectedMenu === item.name ? '#1530A8' : 'transparent', // เปลี่ยนพื้นหลังเมื่อเลือก
                    color: selectedMenu === item.name ? 'white' : 'inherit', // เปลี่ยนสีข้อความเมื่อเลือก
                    '&:hover': {
                      bgcolor: '#1530A8',
                      color: 'white',
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
                  {text === 'หน้าแรก' ? <HomeIcon /> : <MailIcon />}
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
              { name: 'Compose', link: '/s' },
              { name: 'สั่งฟ้อง', link: '/ss' },
              { name: 'Templates', link: 'หห' },
            ].map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton component={Link} to={item.link} sx={{ pl: 4 }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse></>
  )
}

export default Listmenu