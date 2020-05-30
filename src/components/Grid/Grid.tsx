import { HTMLAttributes } from 'react';
import styled from '../../theme';

import { HasChildren } from '../../typings';
import { CoreGrid, CoreGridProps } from '../core/Grid';

interface GridProps extends HTMLAttributes<HTMLDivElement>, CoreGridProps, HasChildren { }

const Grid = styled.div<GridProps>`
    ${CoreGrid}
`;

export default Grid;