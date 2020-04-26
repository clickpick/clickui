import React from 'react';
import { storiesOf } from '@storybook/react';
import Cell from './Cell';
import Checkbox from '../Checkbox';
import { text, boolean } from '@storybook/addon-knobs/';

const styles = { maxWidth: 350 };

const IconSample = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.997 5.31273C13.1089 5.31259 13.2195 5.33684 13.321 5.38376C13.4225 5.43069 13.5127 5.49917 13.5851 5.58447C13.6575 5.66976 13.7104 5.7698 13.7403 5.87764C13.7701 5.98549 13.7761 6.09855 13.7578 6.20895L13.6477 6.87544H13.9055C14.1126 6.87544 14.3113 6.95778 14.4578 7.10431C14.6043 7.25084 14.6865 7.44957 14.6865 7.6568C14.6865 7.86403 14.6043 8.06276 14.4578 8.20929C14.3113 8.35583 14.1126 8.43816 13.9055 8.43816H13.3821L12.8666 11.5636H13.9055C14.1126 11.5636 14.3113 11.6459 14.4578 11.7925C14.6043 11.939 14.6865 12.1377 14.6865 12.345C14.6865 12.5522 14.6043 12.7509 14.4578 12.8974C14.3113 13.044 14.1126 13.1263 13.9055 13.1263H12.601L12.4495 14.0436C12.4115 14.2409 12.298 14.4156 12.1332 14.5305C11.9684 14.6453 11.7653 14.6913 11.5671 14.6586C11.3689 14.626 11.1913 14.5172 11.072 14.3555C10.9528 14.1938 10.9014 13.9919 10.9287 13.7928L11.0389 13.1263H7.91449L7.76296 14.0436C7.72495 14.2409 7.61147 14.4156 7.44666 14.5305C7.28185 14.6453 7.07872 14.6913 6.88053 14.6586C6.68233 14.626 6.50472 14.5172 6.38549 14.3555C6.26627 14.1938 6.21485 13.9919 6.24217 13.7928L6.35231 13.1263H6.09455C5.88739 13.1263 5.68871 13.044 5.54223 12.8974C5.39575 12.7509 5.31345 12.5522 5.31345 12.345C5.31345 12.1377 5.39575 11.939 5.54223 11.7925C5.68871 11.6459 5.88739 11.5636 6.09455 11.5636H6.61787L7.1334 8.43816H6.09455C5.88739 8.43816 5.68871 8.35583 5.54223 8.20929C5.39575 8.06276 5.31345 7.86403 5.31345 7.6568C5.31345 7.44957 5.39575 7.25084 5.54223 7.10431C5.68871 6.95778 5.88739 6.87544 6.09455 6.87544H7.39897L7.5505 5.95812C7.5885 5.76081 7.70199 5.58614 7.8668 5.47128C8.03161 5.35641 8.23473 5.31042 8.43293 5.34311C8.63112 5.3758 8.80873 5.48456 8.92796 5.64628C9.04719 5.80799 9.09861 6.00988 9.07128 6.20895L8.96115 6.87544H12.0855L12.237 5.95812C12.2667 5.77788 12.3594 5.61403 12.4986 5.49581C12.6378 5.3776 12.8144 5.31272 12.997 5.31273V5.31273ZM8.18006 11.5636H11.3044L11.8199 8.43816H8.69558L8.18006 11.5636ZM12.997 3.75001C12.5129 3.74838 12.0403 3.89811 11.6454 4.1783C11.2505 4.45848 10.9529 4.85511 10.7944 5.31273H10.5132C10.3531 4.85625 10.0552 4.46079 9.66066 4.18101C9.26614 3.90124 8.79449 3.75097 8.31089 3.75097C7.8273 3.75097 7.35564 3.90124 6.96112 4.18101C6.5666 4.46079 6.26871 4.85625 6.1086 5.31273H6.09455C5.54155 5.31243 5.00627 5.50778 4.58338 5.86422C4.16049 6.22066 3.87725 6.71523 3.78374 7.26045C3.69024 7.80567 3.79251 8.3664 4.07245 8.84346C4.3524 9.32052 4.79198 9.68318 5.31345 9.86727L5.26659 10.1517C4.87397 10.3001 4.5284 10.5513 4.266 10.879C4.0036 11.2067 3.834 11.5989 3.77493 12.0146C3.71586 12.4302 3.7695 12.8542 3.93022 13.242C4.09094 13.6299 4.35285 13.9674 4.68858 14.2194C4.75696 14.74 4.99876 15.2223 5.37492 15.5885C5.75108 15.9546 6.23963 16.1833 6.76169 16.2375C7.28375 16.2916 7.80883 16.1682 8.25213 15.8871C8.69543 15.606 9.03107 15.1837 9.20485 14.6882H9.48682C9.64693 15.1447 9.94483 15.5402 10.3393 15.82C10.7339 16.0997 11.2055 16.25 11.6891 16.25C12.1727 16.25 12.6444 16.0997 13.0389 15.82C13.4334 15.5402 13.7313 15.1447 13.8914 14.6882H13.9055C14.4584 14.6885 14.9937 14.4932 15.4166 14.1367C15.8395 13.7803 16.1228 13.2857 16.2163 12.7405C16.3098 12.1953 16.2075 11.6346 15.9275 11.1575C15.6476 10.6804 15.208 10.3178 14.6865 10.1337L14.7334 9.84929C15.126 9.70088 15.4716 9.44969 15.734 9.12199C15.9964 8.79429 16.166 8.4021 16.2251 7.98641C16.2841 7.57073 16.2305 7.1468 16.0698 6.75894C15.9091 6.37107 15.6472 6.03353 15.3114 5.78155C15.238 5.21968 14.9628 4.70371 14.5371 4.3299C14.1114 3.9561 13.5643 3.74998 12.9978 3.75001V3.75001H12.997Z" fill="#A9335E" />
        </g>
        <defs>
            <clipPath id="clip0">
                <path d="M0 0H20V20H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

const IconArrow = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04593 12.9534C5.91741 12.9534 5.79017 12.9277 5.67169 12.8779C5.55321 12.8281 5.44586 12.7552 5.35593 12.6634C5.1727 12.4765 5.07007 12.2251 5.07007 11.9634C5.07007 11.7016 5.1727 11.4503 5.35593 11.2634L8.56992 7.9964L5.35593 4.73041C5.1727 4.54348 5.07007 4.29215 5.07007 4.0304C5.07007 3.76864 5.1727 3.51731 5.35593 3.33038C5.4458 3.23846 5.55311 3.1654 5.6716 3.11554C5.79009 3.06568 5.91737 3.04004 6.04593 3.04004C6.17448 3.04004 6.30174 3.06568 6.42023 3.11554C6.53872 3.1654 6.64606 3.23846 6.73593 3.33038L10.6409 7.2984C10.8242 7.48533 10.9268 7.73666 10.9268 7.99841C10.9268 8.26017 10.8242 8.51144 10.6409 8.69836L6.73593 12.6664C6.64571 12.7576 6.53823 12.8299 6.41977 12.8792C6.30131 12.9285 6.17423 12.9537 6.04593 12.9534Z" fill="#456BF1" />
        </g>
        <defs>
            <clipPath id="clip0">
                <path d="M0 0H16V16H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

storiesOf('Cell', module)
    .add(
        'default',
        () => {
            const showAsideContent = boolean('show aside content', false);

            return <>
                <Cell className="margin-aqua--bottom">Начало дня</Cell>
                <Cell
                    className="margin-aqua--bottom"
                    children="Сложный пункт"
                    hint="Это настройка позволяет Санычу дать по ебалу" />
                <Cell
                    className="margin-aqua--bottom"
                    before={IconSample}
                    children="Работа на дому"
                    aside={IconArrow}
                    style={{ maxWidth: 250 }} />
                <Cell
                    className="margin-aqua--bottom"
                    size="medium"
                    header={text('header', 'Header')}
                    description={text('description', 'Description')}
                    children={text('children', 'Some text')}
                    hint={text('hint', 'Hint')}
                    multiline={boolean('multiline', false)}
                    aside={(showAsideContent) ? <Checkbox controlSize="medium" /> : undefined}
                    style={styles} />
            </>;
        },
        {
            info: { inline: true },
            text: `
            ### Notes

            Simple Cell component

            ### Usage
            ~~~ts
            <Cell>Some text</Cell>
            ~~~
            `
        }
    );