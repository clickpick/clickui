import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

storiesOf('List', module)
    .add(
        'div',
        () =>
            <List>
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
                <span>Item 4</span>
                <span>Item 5</span>
            </List>,
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple List component

            ### Usage
            ~~~ts
            <Caption>Some text</Caption>
            ~~~
            `
        }
    )
    .add(
        'ul',
        () =>
            <List as="ul">
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
                <span>Item 4</span>
                <span>Item 5</span>
            </List>,
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple List component

            ### Usage
            ~~~ts
            <Caption>Some text</Caption>
            ~~~
            `
        }
    );