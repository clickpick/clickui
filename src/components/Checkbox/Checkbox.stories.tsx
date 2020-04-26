import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { text, boolean } from '@storybook/addon-knobs/';

storiesOf('Checkbox', module)
    .add(
        'default',
        () => {
            const fill = text('fill', '');

            return <>
                <Checkbox
                    fill={(fill) ? fill : undefined}
                    children={text('children', 'Some text')} />
                <Checkbox
                    fill={(fill) ? fill : undefined}
                    controlSize="medium"
                    children={text('children', 'Some text')} />
            </>;
        },
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple Checkbox component

            ### Usage
            ~~~ts
            <Checkbox>Some text</Checkbox>
            ~~~
            `
        }
    )
    .add(
        'disabled',
        () => {
            return <>
                <Checkbox
                    children={text('children', 'Some text')}
                    checked={boolean('checked', false)}
                    disabled={boolean('disabled', true)} />
                <Checkbox
                    controlSize="medium"
                    children={text('children', 'Some text')}
                    checked={boolean('checked', false)}
                    disabled={boolean('disabled', true)} />
            </>;
        },
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple Checkbox component

            ### Usage
            ~~~ts
            <Checkbox>Some text</Checkbox>
            ~~~
            `
        }
    );