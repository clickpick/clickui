import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from '../../theme';

import { CoreButton, CoreButtonProps } from '../core/Button';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLElement>, CoreButtonProps {
    shape: 'round' | 'circle';
    size: 'large' | 'small';
    children: ReactElement;
}

const IconButton = styled.button<IconButtonProps>`
    ${CoreButton}

    width: ${(props) => (props.size === 'small')
        ? '36px'
        : (props.shape === 'circle') ? '52px' : '44px'};
    height: ${(props) => (props.size === 'small')
        ? '36px'
        : (props.shape === 'circle') ? '52px' : '44px'};
    padding: ${(props) => (props.size === 'small')
        ? '10px'
        : (props.shape === 'circle') ? '18px' : '14px'};

    &, &::before {
        border-radius: ${(props) => (props.shape === 'circle') ? '50%' : '6px'};
    }
`;

export default IconButton;