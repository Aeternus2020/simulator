'use client';
import { Button, Typography} from '@mui/material';
import React from 'react';
import { StyledHero, StyledHeroTypography } from './StyleHero';
import Airplane from '../airplane/Airplane';

export const Hero = () => {
    return(
    <StyledHero>
        <StyledHeroTypography>
            <Typography variant='h1'>Podbij niebo z naszym symulatorem lotu!</Typography>
            <Button>Lecę</Button>
        </StyledHeroTypography>
        <Airplane />
    </StyledHero>
    );
};
