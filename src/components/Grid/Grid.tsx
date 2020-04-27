import React, { FC, HTMLAttributes, useMemo, memo } from 'react';
import cn from 'classnames';

import { HasChildren } from '../../typings';

interface GridProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
    container?: boolean;
    inline?: boolean;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between' | 'space-around';
    zeroMinWidth?: boolean;
}

const Grid: FC<GridProps> = memo(({
    className,
    container, inline,
    wrap = 'nowrap', direction = 'row', justify = 'flex-start', alignItems = 'stretch', alignContent = 'stretch',
    zeroMinWidth,
    ...restProps
}: GridProps) => {
    const classNames = useMemo(() =>
        cn(className, 'Grid', {
            'Grid--container': container,
            'Grid--inline': inline,
            [`Grid--wrap-${wrap}`]: wrap !== 'nowrap',
            [`Grid--direction-${direction}`]: direction !== 'row',
            [`Grid--justify-${justify}`]: justify !== 'flex-start',
            [`Grid--align-items-${alignItems}`]: alignItems !== 'stretch',
            [`Grid--align-content-${alignContent}`]: alignContent !== 'stretch',
            'Grid--zero-min-width': zeroMinWidth
        }, 'Bs(bb)'),
        [className, container, inline, wrap, direction, justify, alignItems, alignContent, zeroMinWidth]);

    return <div className={classNames} {...restProps} />;
});

export default Grid;