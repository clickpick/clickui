import React, { useState, useCallback, SyntheticEvent } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from './Grid';
import Footnote from '../Footnote';
import Checkbox from '../Checkbox';

// import useInput from '../../hooks/use-input';

const rootStyle = { backgroundColor: 'whitesmoke' };
const gridStyle = { height: 200 };
const cellStyle = {
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid dodgerblue'
}

function useInput(defaultValue?: string) {
    const [value, setValue] = useState(defaultValue);

    const onClick = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    return { value, onClick };
}

storiesOf('Grid', module)
    .add(
        'default',
        () => {
            const wrap = useInput('nowrap');
            const direction = useInput('row');
            const justify = useInput('flex-start');
            const alignItems = useInput('stretch');
            const alignContent = useInput('stretch');

            const gridProps = {
                wrap: wrap.value as 'nowrap' | 'wrap' | 'wrap-reverse',
                direction: direction.value as 'row' | 'row-reverse' | 'column' | 'column-reverse',
                justify: justify.value as 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
                alignItems: alignItems.value as 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
                alignContent: alignContent.value as 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'
            };

            return (
                <Grid className="padding-blue" style={rootStyle}>
                    <Grid container {...gridProps} style={gridStyle}>
                        <div
                            className="padding-green--tb padding-blue--rl"
                            style={cellStyle}
                            children="Cell 1" />
                        <div
                            className="padding-green--tb padding-blue--rl"
                            style={cellStyle}
                            children="Cell 2" />
                        <div
                            className="padding-green--tb padding-blue--rl"
                            style={cellStyle}
                            children="Cell 3" />
                    </Grid>
                    <Grid className="margin-pink--top padding-blue" container direction="column" style={cellStyle}>
                        <Grid>
                            <Footnote>flex-wrap</Footnote>
                            <Grid>
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="nowrap"
                                    {...wrap}
                                    name="flex-wrap"
                                    value="nowrap"
                                    checked={wrap.value === 'nowrap'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="wrap"
                                    {...wrap}
                                    name="flex-wrap"
                                    value="wrap"
                                    checked={wrap.value === 'wrap'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="wrap-reverse"
                                    {...wrap}
                                    name="flex-wrap"
                                    value="wrap-reverse"
                                    checked={wrap.value === 'wrap-reverse'} />
                            </Grid>
                        </Grid>

                        <Grid className="margin-purple--top">
                            <Footnote>flex-direction</Footnote>
                            <Grid>
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="row"
                                    {...direction}
                                    name="flex-direction"
                                    value="row"
                                    checked={direction.value === 'row'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="row-reverse"
                                    {...direction}
                                    name="flex-direction"
                                    value="row-reverse"
                                    checked={direction.value === 'row-reverse'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="column"
                                    {...direction}
                                    name="flex-direction"
                                    value="column"
                                    checked={direction.value === 'column'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="column-reverse"
                                    {...direction}
                                    name="flex-direction"
                                    value="column-reverse"
                                    checked={direction.value === 'column-reverse'} />
                            </Grid>
                        </Grid>

                        <Grid className="margin-purple--top">
                            <Footnote>justify-content</Footnote>
                            <Grid>
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-start"
                                    {...justify}
                                    name="justify-content"
                                    value="flex-start"
                                    checked={justify.value === 'flex-start'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="center"
                                    {...justify}
                                    name="justify-content"
                                    value="center"
                                    checked={justify.value === 'center'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-end"
                                    {...justify}
                                    name="justify-content"
                                    value="flex-end"
                                    checked={justify.value === 'flex-end'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="space-between"
                                    {...justify}
                                    name="justify-content"
                                    value="space-between"
                                    checked={justify.value === 'space-between'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="space-around"
                                    {...justify}
                                    name="justify-content"
                                    value="space-around"
                                    checked={justify.value === 'space-around'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="space-evenly"
                                    {...justify}
                                    name="justify-content"
                                    value="space-evenly"
                                    checked={justify.value === 'space-evenly'} />
                            </Grid>
                        </Grid>

                        <Grid className="margin-purple--top">
                            <Footnote>align-items</Footnote>
                            <Grid>
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-start"
                                    {...alignItems}
                                    name="align-items"
                                    value="flex-start"
                                    checked={alignItems.value === 'flex-start'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="center"
                                    {...alignItems}
                                    name="align-items"
                                    value="center"
                                    checked={alignItems.value === 'center'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-end"
                                    {...alignItems}
                                    name="align-items"
                                    value="flex-end"
                                    checked={alignItems.value === 'flex-end'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="stretch"
                                    {...alignItems}
                                    name="align-items"
                                    value="stretch"
                                    checked={alignItems.value === 'stretch'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="baseline"
                                    {...alignItems}
                                    name="align-items"
                                    value="baseline"
                                    checked={alignItems.value === 'baseline'} />
                            </Grid>
                        </Grid>

                        <Grid className="margin-purple--top">
                            <Footnote>align-content</Footnote>
                            <Grid>
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-start"
                                    {...alignContent}
                                    name="align-content"
                                    value="flex-start"
                                    checked={alignContent.value === 'flex-start'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="center"
                                    {...alignContent}
                                    name="align-content"
                                    value="center"
                                    checked={alignContent.value === 'center'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="flex-end"
                                    {...alignContent}
                                    name="align-content"
                                    value="flex-end"
                                    checked={alignContent.value === 'flex-end'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="stretch"
                                    {...alignContent}
                                    name="align-content"
                                    value="stretch"
                                    checked={alignContent.value === 'stretch'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="space-between"
                                    {...alignContent}
                                    name="align-content"
                                    value="space-between"
                                    checked={alignContent.value === 'space-between'} />
                                <Checkbox
                                    className="margin-pink--right"
                                    controlSize="medium"
                                    children="space-around"
                                    {...alignContent}
                                    name="align-content"
                                    value="space-around"
                                    checked={alignContent.value === 'space-around'} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            );
        },
        { info: { inline: true } }
    );