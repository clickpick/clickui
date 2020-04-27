import React from 'react';
import { storiesOf } from '@storybook/react';
import Footnote from './Footnote';
import { text } from '@storybook/addon-knobs/';

storiesOf('Footnote', module)
    .add(
        'default',
        () => <Footnote>{text('children', 'Some text')}</Footnote>,
        { info: { inline: true } }
    );