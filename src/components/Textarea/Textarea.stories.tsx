import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import { text, number, boolean } from '@storybook/addon-knobs/';

import { ThemeProvider } from '../../theme';
import { theme } from '../../theme/schema';

storiesOf('Textarea', module)
    .add(
        'default',
        () => {
            const maxLength = number('maxLength', 20);

            return (
                <ThemeProvider theme={theme}>
                    <Textarea
                        placeholder={text('placeholder', 'Enter text...')}
                        label={text('label', 'Caption')}
                        hint={text('hint', 'Footnote')}
                        error={boolean('error', false)}
                        maxLength={maxLength} />

                    <br/>

                    <Textarea
                        view="promo"
                        placeholder={text('placeholder', 'Enter text...')}
                        label="Promo"
                        error={boolean('error', false)} />
                </ThemeProvider>
            );
        },
        { info: { inline: true } }
    );