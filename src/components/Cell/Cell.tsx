import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styled, { css, margin, padding } from '../../theme';

import Grid from '../Grid';
import Caption from '../Caption';

interface CellProps extends HTMLAttributes<HTMLDivElement>, Multiline {
    size: 'small' | 'medium';
    before?: ReactNode;
    caption?: ReactNode;
    after?: ReactNode;
    expandable?: boolean;
    textPrimaryColor?: string;
    textSecondaryColor?: string;
    chevronColor?: 'black' | 'white';
}

interface Multiline {
    multiline?: boolean;
}

const Cell: FC<CellProps> = ({
    size, before, children, caption, after, multiline, expandable,
    textPrimaryColor, textSecondaryColor, chevronColor = 'black',
    ...restProps
}: CellProps) => {
    return (
        <div {...restProps} role={(expandable) ? 'button' : undefined}>
            <Wrapper container alignItems="center" size={size}>
                {(before) && <Side container alignItems="center" children={before} />}

                <Main zeroMinWidth={!multiline}>
                    <Content children={children} multiline={multiline} />
                    {(caption) && <StyledCaption children={caption} multiline={multiline} />}
                </Main>

                {(after) &&
                    <Side container alignItems="center" aside>
                        {after}
                        {(expandable) &&
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.04593 14.9534C7.91741 14.9534 7.79017 14.9277 7.67169 14.8779C7.55321 14.8281 7.44586 14.7552 7.35593 14.6634C7.1727 14.4765 7.07007 14.2251 7.07007 13.9634C7.07007 13.7016 7.1727 13.4503 7.35593 13.2634L10.5699 9.9964L7.35593 6.73041C7.1727 6.54348 7.07007 6.29215 7.07007 6.0304C7.07007 5.76864 7.1727 5.51731 7.35593 5.33038C7.4458 5.23846 7.55311 5.1654 7.6716 5.11554C7.79009 5.06568 7.91737 5.04004 8.04593 5.04004C8.17448 5.04004 8.30174 5.06568 8.42023 5.11554C8.53872 5.1654 8.64606 5.23846 8.73593 5.33038L12.6409 9.2984C12.8242 9.48533 12.9268 9.73666 12.9268 9.99841C12.9268 10.2602 12.8242 10.5114 12.6409 10.6984L8.73593 14.6664C8.64571 14.7576 8.53823 14.8299 8.41977 14.8792C8.30131 14.9285 8.17423 14.9537 8.04593 14.9534Z"
                                    fill={chevronColor}
                                    fillOpacity="0.3" />
                            </svg>}
                    </Side>}
            </Wrapper>
        </div>
    );
};

const StyledCell = styled(Cell)`
    --clickui_text_primary: ${(props) => props.textPrimaryColor || props.theme.color.black};
    --clickui_text_secondary: ${(props) => props.textSecondaryColor || props.theme.color.onSurface.secondary};

    &[role="button"] {
        cursor: pointer;
    }
`;

const Wrapper = styled(Grid)<{ size: CellProps['size'] }>`
    ${(props) => padding((props.size === 'medium') ? 'yellow' : 'green', ['padding-top', 'padding-bottom'])}
    ${padding('blue', ['padding-right', 'padding-left'])}

    font-size: ${(props) => props.theme.fontSize.body};
`;

const Side = styled(Grid) <{ aside?: boolean }>`
    flex-shrink: 0;
    align-self: center;
    ${(props) => margin('purple', [(props.aside) ? 'margin-left' : 'margin-right'])}

    ${(props) => (props.aside) ? `color: ${props.theme.color.onSurface.secondary}` : ''}
`;

const multilineText = css<Multiline>`
    ${(props) => (!props.multiline) && `
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    `}
`;

const Main = styled(Grid)`
    flex-grow: 1;
`;

const Content = styled.div<Multiline>`
    ${multilineText}
    color: ${(props) => props.theme.color.black};
    color: var(--clickui_text_primary);
`;

const StyledCaption = styled(Caption)<Multiline>`
    color: ${(props) => props.theme.color.onSurface.secondary};
    color: var(--clickui_text_secondary);
    ${multilineText}
`;

export default StyledCell;