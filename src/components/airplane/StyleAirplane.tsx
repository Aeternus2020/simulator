'use client';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAirplaneCanvas = styled(Canvas)({
    // backgroundColor: theme.colors.primary,
    width: '300px!important',
    height: '260px!important',
});

export const StyledMotionDiv = styled(motion.div)(({ theme }) => ({
    // backgroundColor: 'red',
    top: 170,
    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
        top: 130,
          },
}));