import React from 'react';
import { ContainerWrapper } from './Container.styles';

export const Container = ({
  children,
  maxWidth = 'lg',
  className,
}) => {
  return (
    <ContainerWrapper maxWidth={maxWidth} className={className}>
      {children}
    </ContainerWrapper>
  );
};