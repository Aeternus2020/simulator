'use client';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export  const LaunguageToggleButton = () => {
  const [alignment, setAlignment] = React.useState('polish');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="polish">PL</ToggleButton>
      <ToggleButton value="english">EN</ToggleButton>
      <ToggleButton value="ukraine">UA</ToggleButton>
    </ToggleButtonGroup>
  );
};
