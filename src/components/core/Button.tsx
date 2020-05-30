import { css } from '../../theme';

export interface CoreButtonProps {
    priority: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'destructive_secondary' | 'attention' | 'attention_secondary';
}

export const CoreButton = css<CoreButtonProps>`
    position: relative;

    margin: 0;
    border: 0;

    background-color: ${(props) => {
        switch (props.priority) {
            case 'secondary':
                return props.theme.color.secondary;

            case 'tertiary':
                return props.theme.color.onPrimary.primary;

            case 'destructive':
                return props.theme.color.error;

            case 'destructive_secondary':
                return props.theme.color.errorSecondary;

            case 'attention':
                return props.theme.color.attention;

            case 'attention_secondary':
                return props.theme.color.attentionSecondary;

            default:
                return props.theme.color.primary;
        }
    }};

    color: ${(props) => {
        switch (props.priority) {
            case 'secondary': case 'tertiary':
                return props.theme.color.primary;

            case 'destructive_secondary':
                return props.theme.color.error;

            case 'attention_secondary':
                return props.theme.color.attention;

            default:
                return props.theme.color.onPrimary.primary;
        }
    }};

    text-decoration: none;
    outline: 0;
    cursor: pointer;

    svg {
        width: 16px;
        height: 16px;
        fill: ${(props) => {
            switch (props.priority) {
                case 'secondary': case 'tertiary':
                    return props.theme.color.primary;

                case 'destructive_secondary':
                    return props.theme.color.error;

                case 'attention_secondary':
                    return props.theme.color.attention;

                default:
                    return props.theme.color.onPrimary.primary;
            }
        }};
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;
        content: '';

        border-radius: 4px;

        background-color: ${(props) => (props.priority === 'primary')
            ? props.theme.color.onPrimary.primary
            : props.theme.color.primary};

        opacity: 0;

        transition: opacity 150ms ease-in;
    }

    &:not([disabled]):hover::before {
        opacity: ${(props) => (props.priority === 'tertiary') ? '0.05' : '0.1'};
    }

    &:not([disabled]):active::before {
        opacity: ${(props) => {
            switch (props.priority) {
                case 'secondary':
                    return '0.15';

                case 'tertiary':
                    return '0.10';

                default:
                    return '0.2';
            }
        }};
    }

    &[disabled] {
        opacity: 0.3;
        cursor: default;
    }
`;