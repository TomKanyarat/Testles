import React from 'react';
import { Card, Divider, Typography, } from '@mui/material'; 
import ButtonDetail from './ButtonDetail'; // ใช้ ButtonDetail ที่สร้างขึ้น


const CardSue = () => {
    const cardData = [
        {
            title: 'รออนุมัติบังคับคดี',
            itemsCount: 6,
            buttonText: 'ดูรายละเอียด',
            to: '/page/',
        },
        {
            title: 'รอยื่นสวมสิทธิ์/ออกหมายบังคับคดี',
            itemsCount: 4,
            buttonText: 'ดูรายละเอียด',
            to: '/page/',
        },
        {
            title: 'รอยึดทรัพย์/อายัดทรัพย์',
            itemsCount: 0,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'รอขายทอดตลาด',
            itemsCount: 0,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
        {
            title: 'รอเปลี่ยนแปลงเงื่อนไขในการชำระหนี้ไกล่เกลี่ยชั้นบังคับคดี',
            itemsCount: 0,
            buttonText: 'ดูรายละเอียด',
            to: '/page1',
        },
    ];

    return (
        <>
               งานบังคับคดี
            <Divider sx={{ borderColor: '#081342', borderWidth: 1 }} />

            {cardData.map((card, index) => (
                <Card sx={{ padding: '15px', width: '100%', marginTop: '5px', minHeight: '100px' }} key={index}>
                    <Typography sx={{ fontSize: '14px', marginTop: '-10px', textAlign: 'start' }}>
                        {card.title}
                    </Typography>
                    <Typography style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {card.itemsCount} รายการ
                    </Typography>
                    <ButtonDetail ButtonText={card.buttonText} to={card.to} />
                </Card>
            ))}
        </>
    );
};

export default CardSue;
