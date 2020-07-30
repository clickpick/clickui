import React, { FC, HTMLAttributes, ReactText } from 'react';
import styled from '../../theme';

import { CoreLabel, CoreLabelProps } from '../core/Label';
import Grid from '../Grid';
import Caption from '../Caption';

export interface LabelProps extends HTMLAttributes<HTMLSpanElement>, CoreLabelProps {
    children: ReactText;
}

const Label: FC<LabelProps> = ({ priority, children, ...restProps }: LabelProps) => {
    return (
        <Grid inline justify="center" alignItems="center" as="span" zeroMinWidth {...restProps}>
            <Caption>{children}</Caption>
        </Grid>
    );
};

const StyledLabel = styled(Label)`
    ${CoreLabel}

    padding-right: 4px;
    padding-left: 4px;

    ${Caption} {
        display: inline-block;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export default StyledLabel;