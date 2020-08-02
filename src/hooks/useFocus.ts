import { FocusEventHandler, Dispatch, SetStateAction, useState } from 'react';

interface Bind<T> {
    onFocus: FocusEventHandler<T>;
    onBlur: FocusEventHandler<T>;
}

type UseFocus<T> = [Bind<T>, boolean, Dispatch<SetStateAction<boolean>>];

export function useFocus<T>(initialFocus = false): UseFocus<T> {
    const [focus, setFocus] = useState<boolean>(initialFocus || false);

    const onFocus: FocusEventHandler<T> = () => setFocus(true);
    const onBlur: FocusEventHandler<T> = () => setFocus(false);

    return [{ onFocus, onBlur }, focus, setFocus];
}
