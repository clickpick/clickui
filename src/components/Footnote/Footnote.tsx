import React, { FC, HTMLAttributes, useMemo, memo } from 'react';
import cn from 'classnames';

interface FootnoteProps extends HTMLAttributes<HTMLParagraphElement> { }

const Footnote: FC<FootnoteProps> = memo(({ className, ...restProps }: FootnoteProps) => {
    const classNames = useMemo(() => cn(className, 'Footnote', 'reset-margins', 'reset-paddings'), [className]);

    return <p className={classNames} {...restProps} />;
});

export default Footnote;