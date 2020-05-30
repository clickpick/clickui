import React, {
    FC, ButtonHTMLAttributes, ReactNode, ElementType,
    useMemo,
    createElement, memo
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
    const beforeView = useMemo<ReactNode>(() => {
        if (before === undefined) {
            return;
        }

        return (
            <Side
                as="span"
                container
                inline
                alignItems="center"
                children={before} />
        );
    }, [before]);

    const asideView = useMemo<ReactNode>(() => {
        if (aside === undefined) {
            return;
        }

        return (
            <Side
                as="span"
                container
                inline
                alignItems="center"
                aside
                children={aside} />
        );
    }, [aside]);

    const contentView = useMemo<ReactNode>(() => {
        return (
            <Grid container justify="center" alignItems="center" as="span">
                {beforeView}
                {children}
                {asideView}
            </Grid>
        );
    }, [beforeView, children, asideView]);

    return createElement(
        (restProps.href) ? 'a' : component,
        restProps,
        contentView
    );
};

const StyledButton = styled(memo(Button))`
    ${CoreButton};

    width: ${(props) => (props.mobileFull) ? '100%' : 'auto'};
    max-width: 270px;

    padding: ${(props) => (props.size === 'large') ? '12px 24px' : '8px 12px'};

    border-radius: 4px;

    font-size: ${(props) => props.theme.fontSize.footnote};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    line-height: 20px;

    @media (min-width: 600px) {
        width: auto;
    }
`;

const Side = styled(Grid) <{ aside?: boolean }>`
    align-self: center;
    ${(props) => (props.aside) ? 'margin-left: 10px;' : 'margin-right: 10px;'}
`;

export default StyledButton;