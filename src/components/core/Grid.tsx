import { css } from '../../theme';

export interface CoreGridProps {
    container?: boolean;
    inline?: boolean;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between' | 'space-around';
    zeroMinWidth?: boolean;
}

export const CoreGrid = css<CoreGridProps>`
    ${(props) => (props.container) && `
        display: ${(props.inline) ? 'inline-flex' : 'flex'};
        ${(props.wrap) ? `flex-wrap: ${props.wrap};` : ''}
        ${(props.direction) ? `flex-direction: ${props.direction};` : ''}
        ${(props.justify) ? `justify-content: ${props.justify};` : ''}
        ${(props.alignItems) ? `align-items: ${props.alignItems};` : ''}
        ${(props.alignContent) ? `align-content: ${props.alignContent};` : ''}
        ${(props.zeroMinWidth) ? `min-width: 0;` : ''}
    `}
`;