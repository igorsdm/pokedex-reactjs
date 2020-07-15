import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  img {
    max-height: 60vh;
    max-width: 85vw;
    width: auto;
    height: 100%;
  }
`;
