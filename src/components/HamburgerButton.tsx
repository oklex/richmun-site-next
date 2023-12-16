import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Squash } from 'hamburger-react';

type hamburgerProps = {
  toggled?: boolean;
  toggle?: Dispatch<SetStateAction<boolean>> | undefined;
  onToggle?: (b: boolean) => void;
};

export const HamburgerButton = ({ ...props }: hamburgerProps) => (
  <HamburgerWrapper>
    <Squash {...props} />
  </HamburgerWrapper>
);

const HamburgerWrapper = styled.div`
  display: inline-block;
  position: relative;
  z-index: 100;
  transform: scale(0.7);
  height: 48px;
  width: 48px;

  .hamburger-react {
  }
`;
