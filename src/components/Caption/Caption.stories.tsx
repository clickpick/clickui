import React from 'react';
import { storiesOf } from '@storybook/react';
import Caption from './Caption';
import { text } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';

storiesOf('Caption', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Caption>{text('children', 'Some text')}</Caption>
                    <Caption as="p">Paragraph</Caption>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );