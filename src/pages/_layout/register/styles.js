import styled from 'styled-components';
import backgroundImgSm from '~/assets/images/bg.png';
import backgroundImgMd from '~/assets/images/bg@2x.png';
import backgroundImgLg from '~/assets/images/bg@3x.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: rgb(129, 221, 146);
  background: linear-gradient(
    135deg,
    rgba(129, 221, 146, 1) 0%,
    rgba(58, 178, 163, 1) 100%
  );
`;

export const Content = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  @media screen and (max-width: 414px) and (max-height: 736px) {
    background-image: url(${backgroundImgSm});
  }
  @media screen and (max-width: 828px) and (max-height: 1472px) {
    background-image: url(${backgroundImgMd});
  }
  @media screen and (max-width: 1242px) and (max-height: 2208px) {
    background-image: url(${backgroundImgLg});
  }

  @media screen and (min-width: 1243px) and (max-height: 2209px) {
    background-image: none;
  }
`;
