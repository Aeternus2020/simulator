'use client';
import { AppBar } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 100,
  fontFamily: theme.fontFamily.title,
  backgroundColor: theme.colors.primary,
  color: theme.colorText.secondary,
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 20px',
  alignItems: 'center',
  '& .MuiTypography-h3': {
    color: theme.colorText.primary,
  },
  '& .MuiButtonBase-root':{
    color: theme.colorText.secondary,
    backgroundColor: theme.colors.secondary,
    height: 50,
    width: 50,
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: theme.colors.third,
  }
}));

export const StyledLogo = styled(Image)({
  background: 'url(/images/300371163_492814349517733_8247935427622085032_n.svg)',
  width: '80px !important',
  height: '80px !important',
  margin: '10px',
  padding: 10,
});

