import React, { FC, HTMLAttributes, useMemo, memo } from 'react';
import cn from 'classnames';

interface CaptionProps extends HTMLAttributes<HTMLSpanElement> { }

const Caption: FC<CaptionProps> = memo(({ className, ...restProps }: CaptionProps) => {
    const classNames = useMemo(() => cn(className, 'Caption'), [className]);

    return <span className={classNames} {...restProps} />;
});

export default Caption;