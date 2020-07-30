import React, {
    FC, InputHTMLAttributes, ChangeEvent,
    useRef, useLayoutEffect,
    forwardRef
} from 'react';
import styled from '../../theme';

import Field, { FieldProps } from '../Field';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>, FieldProps { }

export function changeHeight(element: HTMLTextAreaElement | ChangeEvent<HTMLTextAreaElement>, defaultHeight = 20) {
    if (element) {
        const target = (element instanceof HTMLTextAreaElement) ? element : element.target;
        target.style.height = `${defaultHeight}px`;
        target.style.height = `${target.scrollHeight}px`;
    }
}

const Textarea: FC<TextareaProps> = forwardRef(({
    view, label, value, maxLength, error, hint, autofocus, aside, style,
    onChange, triggerMaxLength,
    ...restProps
}: TextareaProps, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }

        changeHeight(e);
    };

    useLayoutEffect(() => {
        if (textareaRef.current) {
            changeHeight(textareaRef.current);
        }
    }, [textareaRef]);

    return (
        <Field
            view={view}
            label={label}
            value={value}
            maxLength={maxLength}
            error={error}
            hint={hint}
            autofocus={autofocus}
            aside={aside}
            triggerMaxLength={triggerMaxLength}
            onChange={handleChange}
            style={style}>
            <Control {...restProps} ref={textareaRef} />
        </Field>
    );
});

const Control = styled.textarea`
    margin: 0;
    padding: 0;
    resize: none;
    outline: none;
`;

export default Textarea;