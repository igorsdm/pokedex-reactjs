import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  @media screen and (min-width: 320px) {
    html, button {
      font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (767 - 300)));
    }
  }

  @media screen and (min-width: 767px) {
    html, button {
      font-size: 22px;
    }
  }

  body {
    --webkit-font-smoothing: antialiased;
    }

  body, input, select, button{
    font-family: 'Poppins' !important;
    color: ${props => props.theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
