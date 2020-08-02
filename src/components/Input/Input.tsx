import React, { FC, InputHTMLAttributes } from 'react';
import Field, { FieldProps } from '../Field';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps { }

const Input: FC<InputProps> = ({
    className, style,
    view, label, value, maxLength, error, hint, autofocus, aside,
    onChange, triggerMaxLength,
    ...restProps
}: InputProps) => {
    return (
        <Field
            className={className}
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
            onChange={onChange}>
            <input type="text" {...restProps} />
        </Field>
    );
};

export default Input;