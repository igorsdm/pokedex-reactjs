import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  picture {
    display: flex;
  }

  @media screen and (max-height: 567px) {
    padding: 15px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;

  @media screen and (max-height: 767px) {
    padding-top: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;

  span {
    font-size: 1.5rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;

  picture {
    @media screen and (max-height: 567px) {
      display: none;
    }
  }
`;
