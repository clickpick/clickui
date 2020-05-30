import { HTMLAttributes } from 'react';
import styled from '../../theme';

interface CaptionProps extends HTMLAttributes<HTMLElement> { }

const Caption = styled.span<CaptionProps>`
    font-size: ${(props) => props.theme.fontSize.caption};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 16px;

    p& {
        margin: 0;
    }
`;

export default Caption;