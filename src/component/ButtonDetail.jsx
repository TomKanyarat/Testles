import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import File from '../Image/file.png';


const ButtonDetail = ({ ButtonText, to }) => {
    return (
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Link to={to} style={{ textDecoration: 'none' }}> {/* Link component */}
                <Button sx={{
                    background: 'linear-gradient(90deg, #081342, #102583, #1530A8)',
                    color: 'white',
                    height: '30px',
                    width: '120px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img src={File} style={{ width: '15px' }} alt="file" />
                    {ButtonText}
                </Button>
            </Link>
        </div>
    );
}

export default ButtonDetail;
