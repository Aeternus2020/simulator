'use client';
import styled from 'styled-components';

export const StyledMain = styled('main')(({ theme }) => ({
    fontFamily: theme.fontFamily.text,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0px',
    padding: '80px 0',
    minHeight: '100vh',
}));
