import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Psyduck from '~/assets/images/psyduck_confused.png';

export default function NotFound() {
  const history = useHistory();

  useEffect(() => {
    const intervalId = setInterval(() => {
      history.push('/');
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <Container>
      <h1>Page not Found!</h1>
      <img src={Psyduck} alt="404" />
    </Container>
  );
}
