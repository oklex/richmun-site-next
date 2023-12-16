import styled, { css } from 'styled-components';
import Link from 'next/link';

type LinkProps = {
  newTab?: true;
  href: string;
};

const linkStyles = css`
  color: ${({ theme }) => theme.colors.linkDefaultColor};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }

  &:active {
    color: ${({ theme }) => theme.colors.linkActiveColor};
  }

  & > * {
    cursor: pointer !important;
  }
`;

// consider using the TransitionLink instead
export const InternalLink = styled(Link)`
  ${linkStyles}
`;

export const ExternalLink = styled.a.attrs<LinkProps>(({ newTab, href }) => {
  if (newTab)
    return {
      href,
      rel: 'noreferrer noopener',
      target: '_blank',
    };
  return { href };
})<LinkProps>`
  ${linkStyles}
`;
