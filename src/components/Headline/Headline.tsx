import React, { FC, HTMLAttributes, ReactNode, ElementType } from 'react';
import styled from '../../theme';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    level: '1' | '2' | '3';
}

const Headline: FC<HeadlineProps> = ({ level, children, ...restProps }: HeadlineProps) => {
    let Component: ElementType = 'div';

    switch (level) {
        case '1':
            Component = 'h1';
            break;
        case '2':
            Component = 'h2';
            break;
        case '3':
            Component = 'h3';
            break;
    }

    return <Component children={children} {...restProps} />;
};

const StyledHeadline = styled(Headline)`
    margin: 0;

    font-size: ${(props) => props.theme.fontSize.headline};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    line-height: 36px;
`;

export default StyledHeadline;