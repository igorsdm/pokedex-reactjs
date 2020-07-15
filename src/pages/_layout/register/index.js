import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function RegisterLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

RegisterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
