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

		white: string;
		black: string;
	};
	
	fontSize: {
		caption: string;
		footnote: string;
		body: string;
	};

	fontWeight: {
		normal: number;
		medium: number;
		bold: number;
	};
}

export default styled;
export { css, keyframes, ThemeProvider };