import { ThemeProps, Margins, Paddings } from './index';

type MarginParameters = 'margin' | 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left';
type PaddingParameters = 'padding' | 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left';


// type Type<T extends boolean> = keyof Spacing[T extends true ? 'margins' : 'paddings'];
// type Type<T extends boolean> = keyof (T extends true ? Margins : Paddings);
// type Params<T extends boolean> = T extends true ? MarginParameters : PaddingParameters;

// function createSpacingFn<T extends boolean>(spacingB: T) {
//     return function (type: Type<T>, parameters: Params<T>[]) {
//         return function (props: ThemeProps): string {
//             const spacing: keyof Spacing = (spacingB) ? 'margins' : 'paddings';
//             const value = props.theme.spacing[spacing][type];
//             // return parameters.map((param) => `${param}: ${value}px;`).join('');
//             return '';
//         }
//     }
// }

export const margin = (type: keyof Margins, parameters: MarginParameters[]) => (props: ThemeProps): string => {
    const value = props.theme.spacing.margins[type];
    return parameters.map((param) => `${ param }: ${ value }px;`).join('');
};

export const padding = (type: keyof Paddings, parameters: PaddingParameters[]) => (props: ThemeProps): string => {
    const value = props.theme.spacing.paddings[type];
    return parameters.map((param) => `${param}: ${value}px;`).join('');
};