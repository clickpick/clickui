import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { text, boolean } from '@storybook/addon-knobs/';

const IconArrow = (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.54663 6.04581C3.54664 5.91729 3.57227 5.79005 3.62207 5.67157C3.67187 5.55309 3.7448 5.44574 3.83661 5.3558C4.02354 5.17258 4.27487 5.06995 4.53662 5.06995C4.79837 5.06995 5.0497 5.17258 5.23663 5.3558L8.5036 8.56979L11.7696 5.3558C11.9565 5.17258 12.2079 5.06995 12.4696 5.06995C12.7314 5.06995 12.9827 5.17258 13.1696 5.3558C13.2615 5.44568 13.3346 5.55299 13.3845 5.67148C13.4343 5.78997 13.46 5.91725 13.46 6.04581C13.46 6.17436 13.4343 6.30161 13.3845 6.4201C13.3346 6.5386 13.2615 6.64594 13.1696 6.73581L9.2016 10.6408C9.01467 10.824 8.76334 10.9267 8.50159 10.9267C8.23983 10.9267 7.98856 10.824 7.80164 10.6408L3.83362 6.73581C3.7424 6.64559 3.67006 6.53811 3.62079 6.41965C3.57152 6.30119 3.5463 6.17411 3.54663 6.04581Z" />
    </svg>
);

const IconPlus = (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 11V17C9.5 17.2652 9.60537 17.5196 9.79291 17.7071C9.98044 17.8946 10.2348 18 10.5 18C10.7652 18 11.0196 17.8946 11.2071 17.7071C11.3946 17.5196 11.5 17.2652 11.5 17V11H17.5C17.7652 11 18.0196 10.8946 18.2071 10.7071C18.3946 10.5196 18.5 10.2652 18.5 10C18.5 9.73478 18.3946 9.48044 18.2071 9.29291C18.0196 9.10537 17.7652 9 17.5 9H11.5V3C11.5 2.73478 11.3946 2.48044 11.2071 2.29291C11.0196 2.10537 10.7652 2 10.5 2C10.2348 2 9.98044 2.10537 9.79291 2.29291C9.60537 2.48044 9.5 2.73478 9.5 3V9H3.5C3.23478 9 2.98044 9.10537 2.79291 9.29291C2.60537 9.48044 2.5 9.73478 2.5 10C2.5 10.2652 2.60537 10.5196 2.79291 10.7071C2.98044 10.8946 3.23478 11 3.5 11H9.5Z" />
    </svg>
);

export default { title: 'Button ' };

storiesOf('Button', module)
    .add(
        'primary (default)',
        () => {
            const withIcon = boolean('with icon', false);

            return <>
                <Button before={(withIcon) ? IconArrow : undefined} style={{ marginRight: 8 }}>{text('children', 'Primary')}</Button>
                <Button size="medium" before={(withIcon) ? IconPlus : undefined}>{text('children', 'Primary')}</Button>
            </>;
        },
        { info: { inline: true } }
    )
    .add(
        'secondary',
        () => {
            const withIcon = boolean('with icon', false);
            const withPressed = boolean('with pressed', false);
            const isPressed = boolean('aria-pressed', false);

            return <>
                <Button
                    priority="secondary"
                    before={(withIcon) ? IconArrow : undefined}
                    aria-pressed={(withPressed) ? isPressed : undefined}
                    children={text('children', 'Secondary')}
                    style={{ marginRight: 8 }} />
                <Button
                    priority="secondary"
                    size="medium"
                    before={(withIcon) ? IconPlus : undefined}
                    aria-pressed={(withPressed) ? isPressed : undefined}
                    children={text('children', 'Secondary')} />
            </>;
        },
        { info: { inline: true } }
    )
    .add(
        'tertiary',
        () => {
            const withIcon = boolean('with icon', false);
            const withPressed = boolean('with pressed', false);
            const isPressed = boolean('aria-pressed', false);

            return <>
                <Button
                    priority="tertiary"
                    before={(withIcon) ? IconArrow : undefined}
                    aria-pressed={(withPressed) ? isPressed : undefined}
                    children={text('children', 'Tertiary')}
                    style={{ marginRight: 8 }} />
                <Button
                    priority="tertiary"
                    size="medium"
                    before={(withIcon) ? IconPlus : undefined}
                    aria-pressed={(withPressed) ? isPressed : undefined}
                    children={text('children', 'Tertiary')} />
            </>;
        },
        { info: { inline: true } }
    )
    .add(
        'circle (only medium)',
        () => {
            return (
                <Button shape="circle">{IconPlus}</Button>
            );
        },
        { info: { inline: true } }
    )
    .add(
        'link',
        () => {
            const withIcon = boolean('with icon', false);
            const href = text('href', '#');

            return <>
                <Button href={href} priority="secondary" before={(withIcon) ? IconArrow : undefined} style={{ marginRight: 8 }}>{text('children', 'Primary')}</Button>
                <Button href={href} size="medium" before={(withIcon) ? IconPlus : undefined}>{text('children', 'Primary')}</Button>
            </>;
        },
        { info: { inline: true } }
    );