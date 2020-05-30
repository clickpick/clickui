import { ThemeInterface } from './index';

export const theme: ThemeInterface = {
    color: {
        primary: '#456BF1',
        secondary: 'rgba(69, 107, 241, 0.1)',
        tertiary: '#FFF',

        error: '#E12F2F',
        errorSecondary: 'rgba(225, 47, 47, 0.1)',

        attention: '#FF9500',
        attentionSecondary: 'rgba(255, 149, 0, 0.1)',

        white: '#FFF',
        black: '#000'
    },

    fontSize: {
        caption: '12px',
        footnote: '14px',
        body: '16px',
    },

    fontWeight: {
        normal: 400,
        medium: 500,
        bold: 600
    }
};