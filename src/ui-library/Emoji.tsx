import React from 'react';
import styled from 'styled-components';

const SupportedEmojis = {
  wave: '👋',
  croissant: '🥐',
  speech: '💬',
  party: '🎉',
};

export const Emoji = ({ name }: { name: keyof typeof SupportedEmojis }): JSX.Element => (
  <EmojiWrapper>{SupportedEmojis[name]}</EmojiWrapper>
);

const EmojiWrapper = styled.span`
  font-family: 'Segoe UI Emoji' !important;
  font-size: 1.6em !important;
`;
