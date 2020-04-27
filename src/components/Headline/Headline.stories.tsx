import React from 'react';
import { storiesOf } from '@storybook/react';
import Headline from './Headline';
import { text } from '@storybook/addon-knobs/';

storiesOf('Headline', module)
    .add(
        'default',
        () => <Headline>{text('children', 'Headline')}</Headline>,
        { info: { inline: true } }
    );