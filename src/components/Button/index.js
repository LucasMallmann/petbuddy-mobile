import React from 'react';

import { ButtonPress, Title } from './styles';

export default function Button({ title }) {
  return (
    <ButtonPress>
      <Title>{title}</Title>
    </ButtonPress>
  );
}
