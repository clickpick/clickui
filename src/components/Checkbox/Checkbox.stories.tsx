import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { text, boolean } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';

storiesOf('Checkbox', module)
    .add(
        'default',
        () => {
            const fill = text('fill', '');

            return (
                <ThemeProvider theme={theme}>
                    <Checkbox
                        fill={(fill) ? fill : undefined}
                        children={text('children', 'Some text')} />
                    <Checkbox
                        fill={(fill) ? fill : undefined}
                        controlSize="medium"
                        children={text('children', 'Some text')} />
                </ThemeProvider>
            );
        },
        { info: { inline: true } }
    )
    .add(
        'disabled',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Checkbox
                        children={text('children', 'Some text')}
                        checked={boolean('checked', false)}
                        disabled={boolean('disabled', true)} />
                    <Checkbox
                        controlSize="medium"
                        children={text('children', 'Some text')}
                        checked={boolean('checked', false)}
                        disabled={boolean('disabled', true)} />
                </ThemeProvider>
            );
        },
        { info: { inline: true } }
    );