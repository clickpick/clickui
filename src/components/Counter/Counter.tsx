import styled from '../../theme';

import Label, { LabelProps } from '../Label';

interface CounterProps extends LabelProps {
    shape: 'round' | 'circle';
}

const StyledCounter = styled(Label)<CounterProps>`
    min-width: 20px;
    ${(props) => (props.shape === 'circle') ? 'border-radius: 10px;' : ''}
`;

export default StyledCounter;