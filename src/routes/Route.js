import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import HomeLayout from '~/pages/_layout/home';
import RegisterLayout from '~/pages/_layout/register';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { name, pokemon } = useSelector(state => state.user);

  if (!name && !pokemon && isPrivate) {
    return <Redirect to="/" />;
  }

  if (name && pokemon && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = name && pokemon ? HomeLayout : RegisterLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
