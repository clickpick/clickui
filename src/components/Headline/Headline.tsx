import React, { FC, HTMLAttributes, ReactNode, useMemo, memo } from 'react';
import cn from 'classnames';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const Headline: FC<HeadlineProps> = memo(({ className, children, ...restProps }: HeadlineProps) => {
    const classNames = useMemo(() => cn(className, 'Headline'), [className]);

    return (
        <h1 className={classNames} {...restProps}>
            {children}
        </h1>
    );
});

export default Headline;