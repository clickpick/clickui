import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';
import { text } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';
import Grid from '../Grid';

storiesOf('Label', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Grid container direction="column" alignItems="flex-start">
                        <Label
                            priority="primary"
                            children={text('children', 'Label')}
                            style={{ marginBottom: '40px'}} />
                        <Label
                            priority="secondary"
                            children={text('children', 'Label')}
                            style={{ marginBottom: '40px'}} />
                        <Label
                            priority="accent"
                            children={text('children', 'Label')}
                            style={{ marginBottom: '40px'}} />
                        <Label
                            priority="accent_secondary"
                            children={text('children', 'Label')}
                            style={{ marginBottom: '40px'}} />
                    </Grid>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );