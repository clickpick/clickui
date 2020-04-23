import React, { FC, HTMLAttributes, memo } from 'react';
import cn from 'classnames';

interface FootnoteProps extends HTMLAttributes<HTMLParagraphElement> { }

const Footnote: FC<FootnoteProps> = memo(({ className, ...restProps }: FootnoteProps) => {
    return (
        <p className={cn(className, 'Footnote', 'reset-indent')} {...restProps} />
    );
});

export default Footnote;