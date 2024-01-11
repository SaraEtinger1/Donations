import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mySubmit from './Form';
import { yellow } from '@mui/material/colors';
function CircularProgressWithLabel(props) {
    return <Box sx={{ position: 'relative', display: 'inline-flex'  }}>
        <CircularProgress variant="determinate"   style={{ width: '260px', height: '150px'}}{...props} />
        <Box
            sx={{
                top: 0,
                left: 110,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color:"text.secondary",
            }}
        >
            <Typography variant="poster" component="h3"  fontSize='5rem'>
                {`${Math.round(props.value)}%`}
            </Typography>
        </Box>
    </Box>

}

export default CircularProgressWithLabel;
