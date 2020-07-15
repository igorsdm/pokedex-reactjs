import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '~/components/Button';
import Pokemon from '~/assets/images/pokemon-logo.png';
import Pokemon2x from '~/assets/images/pokemon-logo@2x.png';
import Finder from '~/assets/images/finder.png';
import Finder2x from '~/assets/images/finder@2x.png';
import Pikachu from '~/assets/images/pikachu.png';
import Pikachu2x from '~/assets/images/pikachu@2x.png';

import { Container, Header, Body, Footer } from './styles';

export default function Home() {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <picture>
          <source
            media="(min-height: 768px) and (min-width:606px)"
            srcSet={Pokemon2x}
          />
          <img src={Pokemon} alt="pokemon" />
        </picture>
        <picture>
          <source
            media="(min-height: 900px) and (min-width:606px)"
            srcSet={Finder2x}
          />
          <img src={Finder} alt="pokemon" />
        </picture>
      </Header>
      <Body>
        <Button
          backgroundColor="ruby"
          width="20rem"
          height="3.7rem"
          onClick={() => {
            history.push('/register');
          }}
        >
          <span>Let's go!</span>
        </Button>
      </Body>
      <Footer>
        <picture>
          <source
            media="(min-height: 900px) and (min-width:606px)"
            srcSet={Pikachu2x}
          />
          <img src={Pikachu} alt="pokemon" />
        </picture>
      </Footer>
    </Container>
  );
}
