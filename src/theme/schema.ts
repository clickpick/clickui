import { ThemeInterface } from './index';

export const theme: ThemeInterface = {
    color: {
        primary: '#456BF1',
        secondary: '#F2F6FE',

        onSurface: {
            primary: 'rgba(0, 0, 0, 0.9)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            tertiary: 'rgba(0, 0, 0, 0.3)',
        },

        onPrimary: {
            primary: '#FFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },

        error: '#E12F2F',
        errorSecondary: '#FCEAEA',

        attention: '#FF9500',
        attentionSecondary: 'rgba(255, 149, 0, 0.1)',

        success: '#3FA44B',
        successSecondary: 'rgba(63, 164, 75, 0.1)',

        white: '#FFF',
        black: '#000'
    },

    fontSize: {
        caption: '12px',
        footnote: '14px',
        body: '16px',
        button: '16px',
        headline: '30px',
    },

    fontWeight: {
        regular: 400,
        medium: 500,
        bold: 600
    },

    spacing: {
        margins: {
            aqua: 8,
            purple: 16,
            pink: 24
        },
        paddings: {
            yellow: 8,
            green: 12,
            blue: 16,
            red: 24
        }
    }
};