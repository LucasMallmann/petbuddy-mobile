import React, { forwardRef } from 'react';

import { AvatarField } from './styles';

function Avatar({ url, size, border }) {
  return <AvatarField source={{ uri: url }} size={size} border={border} />;
}

export default forwardRef(Avatar);
