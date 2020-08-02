import { ChangeEventHandler, useState } from 'react';

type InputableElement = HTMLInputElement | HTMLTextAreaElement;

interface Bind<T> {
    value: string;
    onChange: ChangeEventHandler<T>;
}

type UseInput<T extends InputableElement> = [Bind<T>, string];

export function useInput<T extends InputableElement>(defaultValue?: string | string[] | number, handleChange?: ChangeEventHandler<T>): UseInput<T> {
    const [stateValue, setStateValue] = useState<string>('');

    const onChange: ChangeEventHandler<T> = (e) => {
        if (defaultValue !== undefined) {
            setStateValue(e.target.value);
        }

        if (handleChange) {
            handleChange(e);
        }
    };

    const value = (defaultValue === undefined) ? stateValue : defaultValue.toString();

    return [{ value, onChange }, value];
}
