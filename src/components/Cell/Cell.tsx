import React, { FC, HTMLAttributes, ReactNode, useMemo, memo } from 'react';
import cn from 'classnames';

import { HasChildren } from '../../typings';

import Caption from '../Caption';
import Footnote from '../Footnote';

export interface CellProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
    size?: 'small' | 'medium';
    multiline?: boolean;
    before?: ReactNode;
    header?: ReactNode;
    description?: ReactNode;
    hint?: ReactNode;
    bottomContent?: ReactNode;
    aside?: ReactNode;
}

const Cell: FC<CellProps> = memo(({
    className, size = 'small', multiline,
    before, header, children, description, hint, bottomContent, aside,
    ...restProps
}: CellProps) => {
    const classNames = useMemo(() =>
        cn(className, 'Cell', {
            [`Cell--${size}`]: size,
            'Cell--multiline': multiline
        }, 'Bs(bb)', 'Bs(bb)--all', 'padding-green--tb', 'padding-blue--rl'),
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

        return <div className="Cell__aside margin-purple--left" children={aside} />;
    }, [aside]);

    return (
        <div className={classNames} {...restProps}>
            {beforeView}

            <div className="Cell__main">
                {headerView}
                <div className="Cell__children body" children={children} />
                {descriptionView}
                {hintView}
                {bottomContentView}
            </div>

            {asideView}
        </div>
    );
});

export default Cell;