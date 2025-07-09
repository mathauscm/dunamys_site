import React from 'react';
import { LoadingContainer, Spinner, LoadingText } from './Loading.styles';

export const Loading = ({
  size = 'medium',
  text = 'Carregando...',
  className,
}) => {
  return (
    <LoadingContainer className={className}>
      <Spinner size={size} />
      {text && <LoadingText>{text}</LoadingText>}
    </LoadingContainer>
  );
};