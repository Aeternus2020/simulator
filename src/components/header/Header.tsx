'use client';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LaunguageToggleButton } from './Button';
import { StyledAppBar, StyledLogo } from './StyleHeader';

export const Header = () => {

  return (
    <>
        <StyledAppBar>
          <Toolbar>
          <StyledLogo src="/images/300371163_492814349517733_8247935427622085032_n.png" alt="Logo" width={70} height={70} layout="responsive" />
            <Typography variant="h3">
            Simulator Lotow
            </Typography>
          </Toolbar>
          <LaunguageToggleButton />
        </StyledAppBar>
    </>
  );
};

