import React, { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styled, { margin } from '../../theme';

import { HasChildren } from '../../typings';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, HasChildren {
    controlSize?: 'small' | 'medium';
    fill?: string;
}

const Checkbox: FC<CheckboxProps> = ({
    className,
    controlSize = 'small', fill, style,
    children,
    ...restProps
}: CheckboxProps) => {
    const classNames = cn(className, 'Checkbox', {
        [`Checkbox--${controlSize}`]: controlSize
    });

    const styles = (fill) ? { ...style, '--checkbox_background': fill } : style;

    return (
        <label className={classNames} style={styles}>
            <input {...restProps} type="checkbox" />
            <CustomControl size={controlSize}>
                <Check size={controlSize} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00007 8.58608L10.2931 5.29308C10.3853 5.19757 10.4956 5.12139 10.6177 5.06898C10.7397 5.01657 10.8709 4.98898 11.0037 4.98783C11.1364 4.98668 11.2681 5.01198 11.391 5.06226C11.5139 5.11254 11.6256 5.18679 11.7195 5.28069C11.8134 5.37458 11.8876 5.48623 11.9379 5.60913C11.9882 5.73202 12.0135 5.8637 12.0123 5.99648C12.0112 6.12926 11.9836 6.26048 11.9312 6.38248C11.8787 6.50449 11.8026 6.61483 11.7071 6.70708L7.70707 10.7071C7.51954 10.8946 7.26523 10.9999 7.00007 10.9999C6.7349 10.9999 6.4806 10.8946 6.29307 10.7071L4.29307 8.70708C4.19756 8.61483 4.12139 8.50449 4.06898 8.38248C4.01657 8.26048 3.98898 8.12926 3.98783 7.99648C3.98668 7.8637 4.01195 7.73202 4.06223 7.60913C4.11251 7.48623 4.18678 7.37458 4.28068 7.28068C4.37457 7.18679 4.48621 7.11254 4.60911 7.06226C4.732 7.01198 4.86369 6.98668 4.99647 6.98783C5.12925 6.98898 5.26048 7.01657 5.38248 7.06898C5.50449 7.12139 5.61482 7.19757 5.70707 7.29308L7.00007 8.58608Z" />
                </Check>
            </CustomControl>
            {(children) && <Children children={children} />}
        </label>
    );
};

const Check = styled.svg<{ size: CheckboxProps['controlSize'] }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: scale(0) translate(-50%, -50%);
    z-index: 2;

    fill: ${(props) => (props.size === 'medium') ? props.theme.color.white : 'var(--checkbox_check)'};

    transition: transform 150ms ease-in;
`;

const CustomControl = styled.span<{ size: CheckboxProps['controlSize'] }>`
    position: absolute;
    width: ${(props) => (props.size === 'medium') ? '36px' : '16px'};
    height: ${(props) => (props.size === 'medium') ? '36px' : '16px'};
    margin-top: ${(props) => (props.size === 'medium' ? '-9px' : '0')};
    margin-left: ${(props) => (props.size === 'medium' ? '-36px' : '-16px')};
    transition: transform 150ms ease-in;

    &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: 0 0;
        transform: translate(-50%, -50%);
        z-index: 1;
        display: block;
        content: '';
        width: ${(props) => (props.size === 'medium' ? '14px' : '6px')};
        height: ${(props) => (props.size === 'medium' ? '14px' : '6px')};
        border-radius: ${(props) => (props.size === 'medium' ? '1px' : '50%')};
        box-shadow: 0 0 0 2px var(--checkbox_background);
        transition-property: ${(props) => (props.size) ? 'box-shadow' : 'transform, opacity'};
        transition: 150ms ease-in;
    }
`;

const Children = styled.span`
    display: inline-block;
    ${margin('aqua', ['margin-left'])}
`;

const StyledCheckbox = styled(Checkbox)`
    --checkbox_check: ${(props) => props.theme.color.primary};

    box-sizing: border-box;
    display: inline-block;
    min-height: ${(props) => (props.controlSize === 'medium') ? '36px' : '16px'};
    padding-top: ${(props) => (props.controlSize === 'medium') ? '9px' : '0'};
    padding-left: ${(props) => (props.controlSize === 'medium') ? '36px' : '16px'};
    cursor: pointer;

    & input {
        position: absolute;
        z-index: -1;
        appearance: none;
        opacity: 0;
    }

    & input:checked + ${CustomControl}::before {
        ${(props) => {
            if (props.controlSize === 'medium') {
                return `
                    background-color: var(--checkbox_background);
                    box-shadow:
                        0 0 0 2px var(--checkbox_background),
                        inset 0 0 0 7px var(--checkbox_background);
                `;
            }

            return `
                opacity: 0;
                transform: scale(0, 0) translate(-50%, -50%);
            `;
        }}
    }

    & input:checked + ${CustomControl} ${Check} {
        transform: scale(1) translate(-50%, -50%);
    }

    & input:focus + ${CustomControl} {
        transform: scale(1.2);
    }

    & input:disabled + ${CustomControl} {
        opacity: 0.3;
    }
`;

export default StyledCheckbox;