// import React, { useState } from 'react'; // เพิ่ม useState
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import check from '../Image/check.png';
// import SaveIcon from '@mui/icons-material/Save';

// const AlertSave = () => {
//     const [open, setOpen] = useState(false);

//     const handleSave = () => {
//         setOpen(true); // เปิด Dialog
//     };

//     const handleClose = () => {
//         setOpen(false); // ปิด Dialog
//     };
//     return (
//         <div>
//             <Button
//                 onClick={handleSave}
//                 sx={{
//                     background: 'linear-gradient(90deg, #081342, #102583, #1530A8)',
//                     boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
//                     color: 'white',
//                 }}
//             >
//                 <SaveIcon />
//                 <span style={{ marginLeft: '10px' }}>บันทึก</span>
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
//                     บันทึกข้อมูลเรียบร้อย
//                 </DialogTitle>

//                 <DialogContent sx={{ textAlign: 'center' }}>
//                     <img src={check} style={{ width: '100px', height: '100px', }} />
//                     <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', width: '400px', height: 'auto' }}>
//                         คุณได้ทำการบันทึกข้อมูลสำเร็จแล้ว
//                     </DialogContentText>
//                     <DialogActions sx={{ justifyContent: 'center', }}>
//                         <Link to="/page/confirmAppeal" style={{ textDecoration: 'none' }}>
//                             <Button onClick={handleClose} autoFocus variant="contained" color="success" >
//                                 ตกลง
//                             </Button>
//                         </Link>
//                     </DialogActions>
//                 </DialogContent>

//             </Dialog>
//         </div>
//     )
// }

// export default AlertSave