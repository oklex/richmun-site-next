// needs tailwind
import React from 'react';
import styled, { css } from 'styled-components';

import { Div } from './Generics';

type GridProps = {
  cols: number;

  mdCols?: number; // change the number of cols on md; max(default 1 less, 2)
  smCols?: number; // change the number of cols on sm; max(default 1 less, 1
  gap?: string; // customize the gap; default is 1rem
  mdGap?: string; // customize the gap; default is 3.5rem
  margin?: string; // customize the margin
};

export const Grid = styled(Div).attrs<GridProps>(({ cols, mdCols, smCols, gap, mdGap }) => ({
  className: `grid 
    ${smCols ? `grid-cols-${smCols}` : `grid-cols-1`} 
    ${mdCols ? `sm:grid-cols-${mdCols}` : `sm:grid-cols-2`} 
    md:grid-cols-${cols}`,
}))<GridProps>`
  width: 100%;
  margin: ${({ margin }) => margin ?? '0.5rem 0 4rem'};
  gap: ${({ gap }) => (gap ? gap : '3.5rem')};

  ${({ gap, mdGap }) =>
    css`
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        gap: ${mdGap ? mdGap : gap ?? '3.5rem'};
      }
    `}
`;

type ColumnProps = {
  colSpan?: number;
  mdColSpan?: number;
  smColSpan?: number;

  smOrderFirst?: true;
  mdOrderFirst?: true;
  orderFirst?: true;
  smOrderLast?: true;
  mdOrderLast?: true;
  orderLast?: true;
};

export const Column = styled(Div).attrs<ColumnProps>(
  ({
    colSpan = 1,
    mdColSpan,
    smColSpan,
    smOrderFirst,
    mdOrderFirst,
    orderFirst,
    smOrderLast,
    mdOrderLast,
    orderLast,
  }) => ({
    className: `
      ${smColSpan ? `col-span-${smColSpan}` : `col-span-${colSpan}`} 
      ${mdColSpan ? `md:col-span-${mdColSpan}` : `md:col-span-${colSpan}`} 
      lg:col-span-${colSpan}  
      ${smOrderFirst ? 'order-first' : ''} 
       ${smOrderLast ? 'order-last' : ''}
      ${mdOrderFirst ? 'md:order-first' : ''} 
      ${mdOrderLast ? 'md:order-last' : ''}
      ${orderFirst ? 'lg:order-first' : ''} 
      ${orderLast ? 'lg:order-last' : ''}`,
  }),
)<ColumnProps>`
  height: 100%;
`;
