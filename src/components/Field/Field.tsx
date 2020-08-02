import React, {
    FC, CSSProperties, ReactNode, ReactElement,
    useRef, useEffect,
    isValidElement, cloneElement
} from 'react';
import styled, { margin, padding } from '../../theme';

import { HasClassName, HasChildren, HasOnChange } from '../../typings';

import useInput from '../../hooks/use-input';
import { useFocus } from '../../hooks/useFocus';

import Grid from '../Grid';
import Caption from '../Caption';
import Footnote from '../Footnote';

export interface FieldProps extends HasClassName, HasChildren {
    style?: CSSProperties;
    view?: 'default' | 'promo';
    label?: ReactNode;
    value?: string | string[] | number;
    maxLength?: number;
    error?: boolean;
    hint?: ReactNode;
    autofocus?: boolean;
    aside?: ReactNode;
    triggerMaxLength?: VoidFunction;
}

type Props = FieldProps & HasOnChange<HTMLElement>;

const Field: FC<Props> = ({
    view = 'default',
    value, autofocus, maxLength,
    children, label, aside, hint, error,
    onChange, triggerMaxLength,
    ...restProps
}: Props) => {
    const control = useInput(value, onChange);
    const [focusBind, focus] = useFocus(!!autofocus);
    const controlRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (autofocus && controlRef.current) {
            controlRef.current.focus();
        }
    }, [autofocus]);

    useEffect(() => {
        if (maxLength !== undefined && triggerMaxLength && control.value.length === maxLength) {
            triggerMaxLength();
        }
    }, [control.value, maxLength, triggerMaxLength]);

    const controlView = (isValidElement(children))
        ? cloneElement(children as ReactElement, {
            ...children.props,
            maxLength,
            ...control,
            ...focusBind
        })
        : null;

    let counter = null;
    if (maxLength !== undefined) {
        const hide = (maxLength < 10) ? false : control.value.length < maxLength - 10;
        const max = control.value.length === maxLength;

        counter = (
            <Counter container justify="flex-end" hide={hide} max={max}>
                <Caption children={`${control.value.length}/${maxLength}`} />
            </Counter>
        );
    }

    return (
        <label {...restProps}>
            {(label) && <Label children={label} focus={focus} />}

            <Body view={view} focus={focus} error={error}>
                <Grid container>
                    {controlView}
                    {(aside) && <Side inline children={aside} />}
                </Grid>

                {counter}
            </Body>

            {(hint) && <Hint children={hint} error={error} />}
        </label>
    );
};

const StyledField = styled(Field)``;

const Label = styled(Caption) <{ focus?: boolean }>`
    display: block;
    ${margin('aqua', ['margin-bottom'])}
    color: ${(props) => (props.focus) ? props.theme.color.primary : props.theme.color.onSurface.secondary};
    transition-property: color, opacity;
    transition: 150ms ease-in;
`;

const Body = styled(Grid) < { view: FieldProps['view']; focus?: boolean; error?: boolean; success?: boolean }>`
    position: relative;
    display: block;
    ${padding('yellow', ['padding'])}
    border-radius: 4px;
    background-color: ${(props) => (props.view === 'promo' && !props.focus && !props.error && !props.success)
        ? 'transparent'
        : (props.error)
            ? props.theme.color.errorSecondary
            : (props.focus)
                ? props.theme.color.secondary
                : (props.success)
                    ? props.theme.color.successSecondary
                    : props.theme.color.surface.accent};
    transition: background-color 150ms ease-in;

    & input,
    & textarea {
        width: 100%;
        height: 20px;

        border: 0;

        background-color: transparent;

        font-size: ${(props) => props.theme.fontSize.body};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: 20px;

        overflow-y: hidden;
        outline: none;
    }

    & input::placeholder,
    & textarea::placeholder {
        color: ${(props) => props.theme.color.onSurface.tertiary};
    }
`;

const Counter = styled(Grid)<{ hide?: boolean; max?: boolean }>`
    max-height: ${(props) => (props.hide) ? '0' : '20px'};
    color: ${(props) => (props.max) ? props.theme.color.error : props.theme.color.onSurface.tertiary};
    overflow: hidden;
    transition-property: color, max-height;
    transition: 100ms ease-in;
`;

const Side = styled(Grid)`
    flex-shrink: 0;
    ${margin('aqua', ['margin-left'])}
`;

const Hint = styled(Footnote)<{ error?: boolean }>`
    ${margin('aqua', ['margin-top'])}
    color: ${(props) => (props.error) ? props.theme.color.error : props.theme.color.onSurface.secondary};
    transition-property: color, opacity;
    transition: 150ms ease-in;
`;

export default StyledField;
