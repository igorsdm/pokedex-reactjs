import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 2rem;
`;

export const NameForm = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  max-width: 570px;
`;

export const PokemonForm = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  max-width: 570px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  div {
    position: absolute;
    top: 1rem;
    left: -4px;
  }

  p {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 767px) {
    height: 25vh;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 50vh;

  label,
  p {
    font-size: 1.3rem;
  }

  label {
    padding-bottom: 2rem;
  }

  span {
    color: ${props => props.theme.colors.ruby};
    font-weight: bold;
  }

  input {
    width: 100%;
    max-width: 580px;
    height: 45px;
    border: none;
    border-bottom: 3px solid ${props => props.theme.colors.white};
    font-size: 1.3rem;
    padding-left: 5px;
    color: ${props => props.theme.colors.dimGray};
    background: rgba(0, 0, 0, 0);

    &:hover,
    :focus {
      transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-bottom: 3px solid ${props => props.theme.colors.ruby};
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 30vh;

  button {
    padding-bottom: 10px;
  }

  @media screen and (min-width: 767px) {
    height: 25vh;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 3px solid ${props => props.theme.colors.white};
  position: relative;

  svg {
    color: ${props => props.theme.colors.white};
    position: absolute;
    right: 0;
  }

  &:hover,
  :focus {
    cursor: pointer;
    transition: border-bottom 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 3px solid ${props => props.theme.colors.ruby};
    svg {
      transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: ${props => props.theme.colors.ruby};
    }
  }
`;
