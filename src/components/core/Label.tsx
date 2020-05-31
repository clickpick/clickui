import { css } from '../../theme';

export interface CoreLabelProps {
    priority: 'primary' | 'secondary' | 'accent' | 'accent_secondary';
}

export const CoreLabel = css<CoreLabelProps>`
    box-sizing: border-box;
    height: 20px;

    border-radius: 4px;

    background-color: ${(props) => {
        switch (props.priority) {
            case 'secondary':
                return props.theme.color.secondary;

            case 'accent':
                return props.theme.color.error;

            case 'accent_secondary':
                return props.theme.color.errorSecondary;

            default:
                return props.theme.color.primary;
        }
    }};
    
    color: ${(props) => {
        switch (props.priority) {
            case 'secondary':
                return props.theme.color.primary;

            case 'accent_secondary':
                return props.theme.color.error;

            default:
                return props.theme.color.onPrimary.primary;
        }
    }};
`;