import React, { FC, HTMLAttributes, ReactText, memo } from 'react';
import styled from '../../theme';

import { CoreLabel, CoreLabelProps } from '../core/Label';
import Grid from '../Grid';
import Caption from '../Caption';

interface LabelProps extends HTMLAttributes<HTMLSpanElement>, CoreLabelProps {
    children: ReactText;
}

const Label: FC<LabelProps> = ({ priority, children, ...restProps }: LabelProps) => {
    return (
        <Grid container inline alignItems="center" as="span" zeroMinWidth {...restProps}>
            <Caption>{children}</Caption>
        </Grid>
    );
};

const StyledLabel = styled(memo(Label))`
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