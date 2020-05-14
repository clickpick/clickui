import React, { FC, HTMLAttributes, ReactNode, useMemo, memo } from 'react';
import cn from 'classnames';

import { HasChildren } from '../../typings';

import Grid from '../Grid';
import Caption from '../Caption';
import Footnote from '../Footnote';

export interface CellProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
    size?: 'small' | 'medium';
    multiline?: boolean;
    center?: boolean;
    before?: ReactNode;
    header?: ReactNode;
    description?: ReactNode;
    hint?: ReactNode;
    bottomContent?: ReactNode;
    aside?: ReactNode;
}

const Cell: FC<CellProps> = memo(({
    className, size = 'small', multiline, center,
    before, header, children, description, hint, bottomContent, aside,
    ...restProps
}: CellProps) => {
    const classNames = useMemo(() =>
        cn(className, 'Cell', {
            [`Cell--${size}`]: size,
            'Cell--multiline': multiline
        }, 'Bs(bb)--all', 'padding-green--tb', 'padding-blue--rl'),
        [className, size, multiline]);

    const beforeView = useMemo(() => {
        if (!before) {
            return null;
        }

        return <div className="Cell__before margin-purple--right" children={before} />;
    }, [before]);

    const headerView = useMemo(() => {
        if (!header) {
            return null;
        }

        return <Caption className="Cell__header" children={header} />;
    }, [header]);

    const descriptionView = useMemo(() => {
        if (!description) {
            return null;
        }

        return <Footnote className="Cell__description" children={description} />;
    }, [description]);

    const hintView = useMemo(() => {
        if (!hint) {
            return null;
        }

        return <Caption className="Cell__hint" children={hint} />;
    }, [hint]);

    const bottomContentView = useMemo(() => {
        if (!bottomContent || size !== 'medium') {
            return null;
        }

        return <div className="Cell__bottom-content" children={bottomContent} />;
    }, [bottomContent, size]);

    const asideView = useMemo(() => {
        if (!aside) {
            return null;
        }

        return (
            <Grid
                inline
                className="Cell__aside margin-purple--left"
                justify="center"
                children={aside} />
        );
    }, [aside]);

    const alignItems = useMemo(() => (center) ? 'center' : 'flex-start', [center]);

    return (
        <Grid container className={classNames} alignItems={alignItems} {...restProps}>
            {beforeView}

            <Grid className="Cell__main" zeroMinWidth>
                {headerView}
                <div className="Cell__children body" children={children} />
                {descriptionView}
                {hintView}
                {bottomContentView}
            </Grid>

            {asideView}
        </Grid>
    );
});

export default Cell;