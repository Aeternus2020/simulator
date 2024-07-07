'use client';
import styled from 'styled-components';

export const StyledMain = styled('main')(({ theme }) => ({
    fontFamily: theme.fontFamily.text,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0px',
    padding: '1.5rem',
    minHeight: '100vh',
}));
