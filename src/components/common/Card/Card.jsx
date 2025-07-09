import React from 'react';
import { CardContainer, CardContent, CardHeader, CardTitle } from './Card.styles';

export const Card = ({
  children,
  title,
  className,
  elevated = false,
  hoverable = false,
}) => {
  return (
    <CardContainer
      className={className}
      elevated={elevated}
      hoverable={hoverable}
    >
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};