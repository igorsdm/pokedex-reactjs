import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    'header'
    'body';
  width: 100%;
  min-height: 100%;
  max-width: 570px;

  strong {
    color: ${props => props.theme.colors.vulcan};
  }
  picture {
    display: flex;
    img {
      height: auto;
      max-width: 23px;
    }
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  > svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: body;
  background-color: ${props => props.theme.colors.white};
  max-height: calc(100vh - 60px);
`;

export const CardHeader = styled.div`
  display: flex;
  max-height: 20vh;
  height: 100%;
  padding: 1rem;
  align-items: center;
`;

export const ScrollX = styled.div`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 70vh;
  padding: 1rem 1rem 0 1rem;
  > div {
    display: flex;
    justify-content: space-between;

    &:first-child {
      padding-bottom: 1rem;
      strong {
        color: #7a7a7a;
        padding-right: 0.5rem;
      }
    }
  }
`;

export const ScrollY = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Filter = styled.div`
  display: flex;
  position: absolute;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
`;

export const FilterInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  width: 100%;
  color: #999;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 4px;
`;

export const TypeList = styled.div`
  display: flex;
`;

export const TypeListInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;

  img {
    max-width: 5rem;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    img {
      filter: grayscale(100%);
    }
  }
`;

export const PokemonList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonListInputGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  img {
    margin-right: 1.5rem;
    max-width: 4rem;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 50%;
  }
`;

export const PokemonAlphaSorting = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }

  img {
    transform: ${props =>
      props.sorting === undefined
        ? 'rotateX(90deg)'
        : props.sorting
        ? ''
        : 'rotateX(180deg)'};
    transition: all 0.3s ease-out;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
