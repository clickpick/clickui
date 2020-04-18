import React, { FC, HTMLAttributes, memo } from 'react';

interface CaptionProps extends HTMLAttributes<HTMLSpanElement> { }

const Caption: FC<CaptionProps> = memo((props: CaptionProps) => {
    console.log(123);
    return <span {...props} />;
});

export default Caption;