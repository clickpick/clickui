import React, { FC, HTMLAttributes, ReactNode, memo } from 'react';
import cn from 'classnames';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

const Headline: FC<HeadlineProps> = memo(({ className, children, ...restProps }: HeadlineProps) => {
    return (
        <h1 className={cn(className, 'Headline', 'reset-indent')} {...restProps}>
            {children}
        </h1>
    );
});

export default Headline;