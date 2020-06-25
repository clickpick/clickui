import * as styledComponents from 'styled-components';

const {
  	default: styled,
  	css,
  	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export interface ThemeInterface {
    color: {
        primary: string;
		secondary: string;

		onSurface: {
			primary: string;
			secondary: string;
			tertiary: string;
		};

		onPrimary: {
			primary: string;
			secondary: string;
		};

		error: string;
		errorSecondary: string;

		attention: string;
		attentionSecondary: string;

		success: string;
		successSecondary: string;

		white: string;
		black: string;
	};
	
	fontSize: {
		caption: string;
		footnote: string;
		body: string;
	};

	fontWeight: {
		regular: number;
		medium: number;
		bold: number;
	};

	spacing: Spacing;
}

export interface Spacing {
	margins: Margins;
	paddings: Paddings;
}

export interface Margins {
	aqua: number;
	purple: number;
	pink: number;
}

export interface Paddings {
	yellow: number;
	green: number;
	blue: number;
	red: number;
}

export default styled;
export { css, keyframes, ThemeProvider };
export type ThemeProps = styledComponents.ThemeProps<ThemeInterface>;