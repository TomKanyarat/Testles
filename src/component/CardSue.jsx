import React from 'react';
import { Card, Divider, Typography, Box } from '@mui/material';
import ButtonDetail from './ButtonDetail'; // ใช้ ButtonDetail ที่สร้างขึ้น


const CardSue = () => {
    const cardData = [
        {
            title: 'รออนุมัติบอกเลิกสัญญา',
            itemsCount: 5,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Cancel_contract',
        },
        {
            title: 'รอบอกเลิกสัญญา',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Read',
        },
        {
            title: 'บอกเลิกสัญญา',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Read',
        },
        {
            title: 'รออนุมัติฟ้อง',
            itemsCount: 4,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Sue',
        },
        {
            title: 'รอฟ้อง',
            itemsCount: 4,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Sue',
        },
        {
            title: 'ฟ้อง',
            itemsCount: 2,
            buttonText: 'ดูรายละเอียด',
            to: '/page/Sue',
        },
        {
            title: 'รอสร้างสัญญาประนีประนอมยอมความ',
            itemsCount: 1,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'สัญญาประนีประนอมยอมความ',
            itemsCount: 1,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'รอพิพากษา',
            itemsCount: 1,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'พิพากษา(ตามยอม)',
            itemsCount: 1,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'พิพากษา(ฝ่ายเดียว)',
            itemsCount: 1,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'รอออกคำบังคับ',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'ออกคำบังคับ',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'รอปรับปรุงหนี้ตามคำพิพากษา',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'ปรับปรุงหนี้ตามคำพิพากษา',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'ติดตามหนี้หลังคำพิพากษากรณีตามยอม',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'ส่งกลับแก้ไข',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'แก้ไขบันทึกส่งกลับมา',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
    ];

    return (
        <>
            <h3>งานดำเนินคดี</h3>
            <Divider sx={{ borderColor: '#081342', }} />

            <Box sx={{
                display: 'grid',
                justifyContent: 'center',
                gridTemplateColumns: {
                    xs: '1fr',           // หน้าจอเล็กแสดงทีละ 1 card
                    sm: 'repeat(2, 1fr)', // แสดง 2 card
                    md: 'repeat(3, 1fr)', // แสดง 3 card
                    lg: 'repeat(4, 1fr)', // แสดง 4 card
                },
                gap: 2,
                overflow: 'auto',
                marginTop: '10px',
                height: 'auto',

            }}>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: '100%', // เต็มความกว้างของ grid column ที่กำหนด
                            minHeight: '165px',
                            padding: '10px',
                            border: '1px solid lightgray',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography sx={{ fontSize: '18px', textAlign: 'start' }}>
                            {card.title}
                        </Typography>

                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: '16px', marginTop: '8px' }} >
                            {card.itemsCount} รายการ
                        </Typography>

                        <Typography
                            sx={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center' }} >
                            <ButtonDetail ButtonText={card.buttonText} to={card.to} />
                        </Typography>

                    </Card>
                ))}
            </Box>

        </>
    );
};

export default CardSue;
