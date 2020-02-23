import React from 'react';

import { Container, ViewIconSearch, IconSearch, Input } from './styles';

export default function Search() {
  return (
    <Container>
      <ViewIconSearch>
        <IconSearch />
      </ViewIconSearch>

      <Input />
    </Container>
  );
}
