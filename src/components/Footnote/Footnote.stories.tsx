import React from 'react';
import { storiesOf } from '@storybook/react';
import Footnote from './Footnote';
import { text } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';

storiesOf('Footnote', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Footnote>{text('children', 'Some text')}</Footnote>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );