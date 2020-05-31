import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter';
import { text } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';
import Grid from '../Grid';

storiesOf('Counter', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Grid container direction="column" alignItems="flex-start">
                        <Grid style={{ marginBottom: '40px' }}>
                            <Counter
                                priority="primary"
                                shape="round"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                            <Counter
                                priority="primary"
                                shape="circle"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                        </Grid>

                        <Grid style={{ marginBottom: '40px' }}>
                            <Counter
                                priority="secondary"
                                shape="round"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                            <Counter
                                priority="secondary"
                                shape="circle"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                        </Grid>

                        <Grid style={{ marginBottom: '40px' }}>
                            <Counter
                                priority="accent"
                                shape="round"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                            <Counter
                                priority="accent"
                                shape="circle"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                        </Grid>

                        <Grid style={{ marginBottom: '40px' }}>
                            <Counter
                                priority="accent_secondary"
                                shape="round"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                            <Counter
                                priority="accent_secondary"
                                shape="circle"
                                children={text('children', '0')}
                                style={{ marginRight: '68px' }} />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );