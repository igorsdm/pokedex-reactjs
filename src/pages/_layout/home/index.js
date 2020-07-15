import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function HomeLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
