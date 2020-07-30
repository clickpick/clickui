import React, {
    FC, ButtonHTMLAttributes, ReactNode, ElementType,
    createElement
} from 'react';
import styled from '../../theme';

import { HasChildren } from '../../typings';
import { CoreButton, CoreButtonProps } from '../core/Button';
import Grid from '../Grid';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, CoreButtonProps, HasChildren {
    size: 'large' | 'small';
    mobileFull?: boolean;
    before?: ReactNode;
    aside?: ReactNode;
    component?: ElementType;
    href?: string;
    target?: string;
}

const Button: FC<ButtonProps> = ({
    priority, size, mobileFull,
    before, aside, children,
    component = 'button',
    ...restProps
}: ButtonProps) => {
    const contentView = (
        <Grid container justify="center" alignItems="center" as="span">
            {(before) && <Side as="span" inline alignItems="center" children={before} />}
            {children}
            {(aside) && <Side as="span" inline alignItems="center" aside children={aside} />}
        </Grid>
    );

    return createElement(
        (restProps.href) ? 'a' : component,
        restProps,
        contentView
    );
};

const StyledButton = styled(Button)`
    ${CoreButton};

    width: ${(props) => (props.mobileFull) ? '100%' : 'auto'};
    max-width: 270px;

    padding: ${(props) => (props.size === 'large') ? '12px 24px' : '8px 12px'};

    border-radius: 4px;

    font-size: ${(props) => props.theme.fontSize.button};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 20px;

    @media (min-width: 600px) {
        width: auto;
    }
`;

const Side = styled(Grid)<{ aside?: boolean }>`
    align-self: center;
    ${(props) => (props.aside) ? 'margin-left: 10px;' : 'margin-right: 10px;'}
`;

export default StyledButton;