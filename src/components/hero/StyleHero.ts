'use client';
import styled from 'styled-components';
// import Image from 'next/image';
import { Container } from '@mui/material';

// export const StyledHeroImg = styled(Image)({
//     width: 'auto',
//     height: 'auto',
//     display: 'block',
//     maxWidth: '100%', 
//     position: 'relative',
//   });

export const StyledHero = styled(Container)(({ theme }) => ({
    background: theme.colors.primary,
    position: 'relative',
    padding: '30px 0 0 0 !important',
    minHeight: 260,
    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
      minHeight: 230,
        },
    '& button': {
      backgroundColor: theme.colors.third,
      color: theme.colorText.primary,
    }
}));

export const StyledHeroTypography = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 30,
});
