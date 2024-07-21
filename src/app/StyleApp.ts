'use client';
import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledPage = styled(Container)(({ theme }) => ({
  padding: '0px !important',
    '& .MuiTypography-root': {
        color: theme.colorText.secondary,
        fontSize: theme.fontSize,
        fontFamily: theme.fontFamily.text,
        [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
          fontSize: 18,
            },
            [`@media screen and (min-width: ${theme.breakpoints.mdm}px)`]: {
                fontSize: 20,
                  },
      },
      '& .MuiTypography-h3': {
        color: theme.colorText.primary,
        fontFamily: theme.fontFamily.title,
        fontWeight: 600,
        fontSize: 26,
        [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
          fontSize: 30,
            },
            [`@media screen and (min-width: ${theme.breakpoints.mdm}px)`]: {
                fontSize: 36,
                  },
                  [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
                    fontSize: 40,
                      },
      },
      '& .MuiTypography-h1': {
        color: theme.colorText.primary,
        fontFamily: theme.fontFamily.title,
        fontWeight: 600,
        fontSize: 26,
      },
    '& button': {
      cursor: 'pointer',
    }
  }));