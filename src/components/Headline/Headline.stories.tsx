import React from 'react';
import { storiesOf } from '@storybook/react';

import { text } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';
import Headline from './Headline';

storiesOf('Headline', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Headline level="1">{text('children_level_1', 'Headline level 1')}</Headline>
                    <Headline level="2">{text('children_level_2', 'Headline level 2')}</Headline>
                    <Headline level="3">{text('children_level_3', 'Headline level 3')}</Headline>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );