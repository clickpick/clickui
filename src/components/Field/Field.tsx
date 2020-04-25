import React, {
    FC, ReactNode, ReactElement,
    useMemo, useRef, useEffect,
    isValidElement, cloneElement,
    memo
} from 'react';
import cn from 'classnames';

import { HasClassName, HasChildren, HasOnChange } from '../../typings';

import useInput from '../../hooks/use-input';
import useFocus from '../../hooks/use-focus';

import Caption from '../Caption';
import Footnote from '../Footnote';

export interface FieldProps extends HasClassName, HasChildren {
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

const Field: FC<Props> = memo(({
    className, view = 'default',
    value, autofocus, maxLength,
    children, label, aside, hint, error,
    onChange, triggerMaxLength,
    ...restProps
}: Props) => {
    const classNames = useMemo<string>(() =>
        cn(className, 'Field', { [`Field--${view}`]: view }, 'Bs(bb) Bs(bb)--all D(b) padding-yellow--rl'),
        [className, view]);

    const control = useInput(value, onChange);
    const [focus, focusHandler] = useFocus(!!autofocus);
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

    const labelView = useMemo<ReactNode>(() => {
        if (!label) {
            return null;
        }

        return (
            <Caption
                className={cn('Field__label', {
                    'Field__label--focused': focus,
                    'color-opacity--secondary': !focus && !!control.value
                }, 'margin-aqua--bottom', 'padding-yellow--rl', 'D(ib)')}
                children={label} />
        );
    }, [label, focus, control.value]);

    const controlView = useMemo<ReactNode>(() => {
        if (!isValidElement(children)) {
            return null;
        }

        return cloneElement(children as ReactElement, {
            className: 'Field__control body',
            maxLength,
            ...control,
            ...focusHandler
        });
    }, [children, maxLength, control, focusHandler]);

    const asideView = useMemo<ReactNode>(() => {
        if (!aside) {
            return null;
        }

        return <div className="Field__aside margin-aqua--left" children={aside} />;
    }, [aside]);

    const counterView = useMemo<ReactNode>(() => {
        if (maxLength === undefined) {
            return null;
        }

        const hide = (maxLength < 10) ? false : control.value.length < maxLength - 10;
        const max = control.value.length === maxLength

        return (
            <Caption
                className={cn('Field__counter', {
                    'Field__counter--hide': hide,
                    'Field__counter--max': max
                })}
                children={`${control.value.length}/${maxLength}`} />
        );
    }, [maxLength, control.value]);

    const bodyView = useMemo<ReactNode>(() => {
        return (
            <div className={cn('Field__body', 'padding-yellow', {
                'Field__body--focused': focus,
                'Field__body--error': error
            })}>
                <div className="Field__body-in">
                    {controlView}
                    {asideView}
                </div>

                {counterView}
            </div>
        );
    }, [focus, error, controlView, asideView, counterView]);

    const hintView = useMemo<ReactNode>(() => {
        if (!hint) {
            return null;
        }

        return (
            <Footnote
                className={cn('Field__hint', 'margin-aqua--top', 'padding-yellow--rl', {
                    'Field__hint--error': error
                })}
                children={hint} />
        );
    }, [hint, error]);

    return (
        <label className={classNames} {...restProps}>
            {labelView}
            {bodyView}
            {hintView}
        </label>
    );
});

export default Field;