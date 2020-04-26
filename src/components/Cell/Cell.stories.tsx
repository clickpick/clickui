import React from 'react';
import { storiesOf } from '@storybook/react';
import Cell from './Cell';
import Checkbox from '../Checkbox';
import { text, boolean } from '@storybook/addon-knobs/';

const styles = {
    maxWidth: 350,
    backgroundColor: 'tomato',
}

storiesOf('Cell', module)
    .add(
        'default',
        () => {
            const showAsideContent = boolean('show aside content', false);

            return (
                <Cell
                    size="medium"
                    header={text('header', 'Header')}
                    description={text('description', 'Description')}
                    children={text('children', 'Some text')}
                    hint={text('hint', 'Hint')}
                    multiline={boolean('multiline', false)}
                    aside={(showAsideContent) ? <Checkbox controlSize="medium" /> : undefined}
                    style={styles} />
            );
        },
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple Cell component

            ### Usage
            ~~~ts
            <Cell>Some text</Cell>
            ~~~
            `
        }
    );