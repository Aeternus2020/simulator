import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '@/components/header/Header';
import { Main } from '@/components/main/Main';
import Theme from '@/Theme';
import { StyledPage } from './StyleApp';


export default function Home() {


  return (
    <Theme>
      <StyledPage>
        <CssBaseline />
        <Header />
        <Main />
      </StyledPage>
    </Theme>
  );
}
