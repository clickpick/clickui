import {
    ChangeEventHandler,
    useState, useRef, useMemo, useCallback
} from 'react';

export interface UseInput<T> {
    value: string;
    onChange: ChangeEventHandler<T>;
};

export default function useChange<T extends HTMLElement>(defaultValue?: string | string[] | number, handleChange?: ChangeEventHandler<T>): UseInput<T> {
    const [stateValue, setStateValue] = useState<string>('');
    const isControlledOutside = useRef<boolean>(defaultValue === undefined);
    const value = useMemo<string>(() => {
        if (defaultValue === undefined) {
            return stateValue;
        }

        return defaultValue.toString();
    }, [defaultValue, stateValue]);

    const onChange = useCallback((e) => {
        if (isControlledOutside.current) {
            setStateValue(e.target.value);
        }

        if (handleChange) {
            handleChange(e);
        }
    }, [isControlledOutside, handleChange]);

    return { value, onChange };
}