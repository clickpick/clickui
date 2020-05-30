import { HTMLAttributes } from 'react';
import styled from '../../theme';

interface FootnoteProps extends HTMLAttributes<HTMLElement> { }

const Footnote = styled.p<FootnoteProps>`
    margin: 0;

    font-size: ${(props) => props.theme.fontSize.footnote};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 20px;
`;

export default Footnote;