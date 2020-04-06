import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { AvatarField } from './styles';

function Avatar({ url, size, border }) {
  return <AvatarField source={{ uri: url }} size={size} border={border} />;
}

export default forwardRef(Avatar);

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  border: PropTypes.bool.isRequired,
};
