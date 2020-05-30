import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './IconButton';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';
import Grid from '../Grid';

const IconPlus = (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 11V17C9.5 17.2652 9.60537 17.5196 9.79291 17.7071C9.98044 17.8946 10.2348 18 10.5 18C10.7652 18 11.0196 17.8946 11.2071 17.7071C11.3946 17.5196 11.5 17.2652 11.5 17V11H17.5C17.7652 11 18.0196 10.8946 18.2071 10.7071C18.3946 10.5196 18.5 10.2652 18.5 10C18.5 9.73478 18.3946 9.48044 18.2071 9.29291C18.0196 9.10537 17.7652 9 17.5 9H11.5V3C11.5 2.73478 11.3946 2.48044 11.2071 2.29291C11.0196 2.10537 10.7652 2 10.5 2C10.2348 2 9.98044 2.10537 9.79291 2.29291C9.60537 2.48044 9.5 2.73478 9.5 3V9H3.5C3.23478 9 2.98044 9.10537 2.79291 9.29291C2.60537 9.48044 2.5 9.73478 2.5 10C2.5 10.2652 2.60537 10.5196 2.79291 10.7071C2.98044 10.8946 3.23478 11 3.5 11H9.5Z" />
    </svg>
);

export default { title: 'IconButton ' };

storiesOf('IconButton', module)
    .add(
        'default',
        () => {
            return (
                <ThemeProvider theme={theme}>
                    <Grid container direction="column">
                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="primary"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="primary"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="primary"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="primary"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="secondary"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="secondary"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="secondary"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="secondary"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="tertiary"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="tertiary"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="tertiary"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="tertiary"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="destructive"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive_secondary"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="destructive_secondary"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive_secondary"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="destructive_secondary"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="attention"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>

                        <Grid container alignItems="center" style={{ marginBottom: '40px' }}>
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention_secondary"
                                shape="round"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '96px' }}
                                priority="attention_secondary"
                                shape="round"
                                size="small"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention_secondary"
                                shape="circle"
                                size="large"
                                children={IconPlus} />
                            <IconButton
                                style={{ marginRight: '48px' }}
                                priority="attention_secondary"
                                shape="circle"
                                size="small"
                                children={IconPlus} />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            );
        },
        { info: { inline: false } }
    );