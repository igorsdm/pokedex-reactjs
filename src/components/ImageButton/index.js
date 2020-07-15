import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ImageButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      <div>{children}</div>
    </Button>
  );
}

ImageButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
