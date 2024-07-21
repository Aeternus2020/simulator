'use client';
import { AppBar } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  '&.MuiPaper-root': {
  height: 100,
  fontFamily: theme.fontFamily.title,
  backgroundColor: theme.colors.primary,
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 20px',
  alignItems: 'center',
  '& .MuiButtonBase-root':{
    color: theme.colorText.secondary,
    backgroundColor: theme.colors.secondary,
    height: 30,
    width: 30,
      [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
    fontSize: 20,
    height: 'auto',
    width: 'auto',
      },
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: theme.colors.third,
  },
},
}));

export const StyledLogo = styled(Image)(({ theme }) => ({
  background: 'url(/images/300371163_492814349517733_8247935427622085032_n.svg)',
  width: '80px !important',
  height: '80px !important',
  margin: '10px',
  padding: 10,
  display: 'none',
  [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
    display: 'block',
  },
}));

