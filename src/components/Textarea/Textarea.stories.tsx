import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import { text, number, boolean } from '@storybook/addon-knobs/';

storiesOf('Textarea', module)
    .add(
        'default',
        () => {
            const maxLength = number('maxLength', 20);

            return (
                <Textarea
                    placeholder={text('placeholder', 'Enter text...')}
                    label={text('label', 'Caption')}
                    hint={text('hint', 'Footnote')}
                    error={boolean('error', false)}
                    maxLength={maxLength} />
            );
        },
        { info: { inline: true } }
    );