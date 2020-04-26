import React, { FC, HTMLAttributes, useMemo, memo } from 'react';
import cn from 'classnames';

import { HasChildren } from '../../typings';

export interface ListProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement>, HasChildren {
    as?: 'div' | 'ul';
}

const List: FC<ListProps> = memo(({
    className,
    as: Component = 'div', children, ...restProps
}: ListProps) => {
    const isUl = useMemo(() => Component === 'ul', [Component]);
    const classNames = useMemo(() => cn(className, 'List', {
        'List--ul': isUl
    }), [className, isUl]);

    if (isUl) {
        return (
            <ul
                className={classNames}
                children={React.Children.map(
                    children,
                    (item) => <li className="List__item" children={item} />
                )}
                {...restProps} />
        );
    }

    return <div className={classNames} children={children} {...restProps} />;
});

export default List;