import React from 'react';
import { Card, Divider, Typography, } from '@mui/material'; 
import ButtonDetail from './ButtonDetail'; // ใช้ ButtonDetail ที่สร้างขึ้น


const CardSue = () => {
    const cardData = [
        {
            title: 'รออนุมัติขอเฉลี่ยทรัพย์',
            itemsCount: 2,
            buttonText: 'ดูรายละเอียด',
            to: '/page/',
        },
        {
            title: 'รออนุมัติขอรับชำระหนี้คดีล้มละลาย',
            itemsCount: 3,
            buttonText: 'ดูรายละเอียด',
            to: '/page/',
        },
      
    ];

    return (
        <>
               ยื่นฟ้อง
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
