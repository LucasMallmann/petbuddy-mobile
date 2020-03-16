import React from 'react';

import {
  Container,
  ViewIconSearch,
  IconSearch,
  Input,
  ViewIconFilter,
  IconFilter,
} from './styles';

export default function Search() {
  return (
    <Container>
      <ViewIconSearch>
        <IconSearch />
      </ViewIconSearch>

      <Input />

      <ViewIconFilter>
        <IconFilter />
      </ViewIconFilter>
    </Container>
  );
}
