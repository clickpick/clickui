import React, {
    FC, HTMLAttributes, ReactNode,
    useMemo,
    createElement, memo
} from 'react';
import cn from 'classnames';

import { HasChildren } from '../../typings';

import Grid from '../Grid';
import Caption from '../Caption';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, HasChildren {
    priority?: 'primary' | 'secondary' | 'tertiary';
    shape?: 'round' | 'circle';
    size?: 'small' | 'medium';
    before?: ReactNode;
    disabled?: boolean;
    href?: string;
}

const Button: FC<ButtonProps> = memo(({
    className,
    priority = 'primary', shape = 'round', size = 'small',
    before, children,
    href,
    ...restProps
}: ButtonProps) => {
    const isLink = useMemo<boolean>(() => href !== undefined, [href]);
    const hasNotPressed = useMemo<boolean>(() => restProps['aria-pressed'] === false, [restProps]);

    const classNames = useMemo<string>(() => {
        const classNames = cn(className, 'Button', 'Bs(bb)', 'Bs(bb)--all', 'reset-indent');

        if (shape === 'circle') {
            return cn(classNames, 'Button--primary', 'Button--circle', 'padding-blue');
        }

        return cn(classNames, {
            [`Button--${shape}`]: shape,
            [`Button--${priority}`]: priority,
            [`Button--${size}`]: size,
            'Button--unselect': !isLink && hasNotPressed,
            'padding-green--tb padding-orange--rl': shape === 'round' && size === 'medium',
            'padding-yellow': shape === 'round' && size === 'small'
        });
    }, [className, shape, priority, size, isLink, hasNotPressed]);

    const beforeView = useMemo<ReactNode>(() => {
        if (!before || shape !== 'round') {
            return null;
        }

        return (
            <Grid
                inline
                alignItems="center"
                className="Button__before margin-aqua--right"
                children={before} />
        );
    }, [before, shape]);


    const contentView = useMemo<ReactNode>(() => {
        if (!children) {
            return null;
        }

        return createElement(
            (size === 'small') ? Caption : 'span',
            { className: 'Button__content' },
            children
        );
    }, [children, size]);

    if (isLink) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classNames} {...restProps}>
                {beforeView}
                {contentView}
            </a>
        );
    }

    return (
        <button className={classNames} {...restProps}>
            {beforeView}
            {contentView}
        </button>
    );
});

export default Button;