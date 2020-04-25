import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import { text, boolean, number } from '@storybook/addon-knobs/';

storiesOf('Input', module)
    .add(
        'default',
        () => {
            const maxLength = number('maxLength', 20);

            return (
                <Input
                    placeholder={text('placeholder', 'Enter text...')}
                    label={text('label', 'Caption')}
                    hint={text('hint', 'Footnote')}
                    error={boolean('error', false)}
                    maxLength={maxLength} />
            );
        },
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple Input component

            ### Usage
            ~~~ts
            <Input>Some text</Input>
            ~~~
            `
        }
    );