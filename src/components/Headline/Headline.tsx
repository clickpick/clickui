import React, { FC, HTMLAttributes, ReactNode, ElementType, useMemo, memo } from 'react';
import styled from '../../theme';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    level: '1' | '2' | '3';
}

const Headline: FC<HeadlineProps> = ({ level, children, ...restProps }: HeadlineProps) => {
    const Component = useMemo<ElementType>(() => {
        switch (level) {
            case '1':
                return 'h1';
            case '2':
                return 'h2';
            case '3':
                return 'h3';
        }
    }, [level]);

    return <Component children={children} {...restProps} />;
};

const StyledHeadline = styled(memo(Headline))`
    margin: 0;

    font-size: ${(props) => props.theme.fontSize.headline};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    line-height: 36px;
`;

export default StyledHeadline;