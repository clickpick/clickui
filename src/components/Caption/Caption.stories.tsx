import React from 'react';
import { storiesOf } from '@storybook/react';
import Caption from './Caption';
import { text } from '@storybook/addon-knobs/';

storiesOf('Caption', module)
    .add(
        'default',
        () => <Caption>{text('children', 'Some text')}</Caption>,
        { info: { inline: true } }
    );