'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

declare module 'styled-components' {
	export interface Itheme {
		colors: {
			primary: string;
			secondary: string;
			third: string;
			fourth: string;
		};
		colorText: {
			primary: string;
			secondary: string;
			price: string;
			third: string;
		};
		fontFamily: {
			title: string;
			text: string;
		};
		breakpoints: {
			xs: number;
			sm: number;
			md: number;
			lg: number;
			xl: number;
		};
	}
}

const theme = {
	colors: {
		primary: '#141416',
		secondary: '#1B1B1E',
		third: '#009661',
	},
	colorText: {
		primary: '#ffffff',
		secondary: '#858586',
		price: '#009661',
	},
	fontFamily: {
		title: 'Manpore',
		text: 'Merriweather',
	},
	breakpoints: {
		xs: 320,
		sm: 480,
		mdm: 600,
		md: 768,
		lg: 992,
		xsl: 1120,
		xl: 1220,
	},
};

interface MyComponentProps {
	children: ReactNode;
}

const Theme: React.FC<MyComponentProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;