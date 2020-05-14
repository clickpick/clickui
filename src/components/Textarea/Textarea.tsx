import React, {
    FC, InputHTMLAttributes, ChangeEvent,
    useRef, useCallback, useLayoutEffect,
    memo, forwardRef
} from 'react';
import cn from 'classnames';

import Field, { FieldProps } from '../Field';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>, FieldProps { }

export function changeHeight(element: HTMLTextAreaElement | ChangeEvent<HTMLTextAreaElement>, defaultHeight = 20) {
    if (element) {
        const target = (element instanceof HTMLTextAreaElement) ? element : element.target;
        target.style.height = `${defaultHeight}px`;
        target.style.height = `${target.scrollHeight}px`;
    }
}

const Textarea: FC<TextareaProps> = memo(forwardRef(({
    className, style,
    view, label, value, maxLength, error, hint, autofocus, aside,
    onChange, triggerMaxLength,
    ...restProps
}: TextareaProps, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }

        changeHeight(e);
    }, [onChange]);

    useLayoutEffect(() => {
        if (textareaRef.current) {
            changeHeight(textareaRef.current);
        }
    }, [textareaRef]);

    return (
        <Field
            className={cn(className, 'Textarea')}
            style={style}
            view={view}
            label={label}
            value={value}
            maxLength={maxLength}
            error={error}
            hint={hint}
            autofocus={autofocus}
            aside={aside}
            triggerMaxLength={triggerMaxLength}
            onChange={handleChange}>
            <textarea className="reset-indent" {...restProps} ref={textareaRef} />
        </Field>
    );
}));

export default Textarea;