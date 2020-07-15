import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  padding: 0.5rem;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  &:hover {
    cursor: pointer;
  }
`;

export const ModalCard = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  max-width: 570px;
  padding: 2rem 1.5rem 0 1.5rem;
  background: #fff;
  border-radius: 5px;

  &:hover {
    cursor: default;
  }

  picture {
    display: flex;
  }

  strong {
    color: ${props => props.theme.colors.vulcan} !important;
  }
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 4fr minmax(24px, 1fr);
  justify-content: space-around;
  min-height: 50px;
  align-items: center;
  text-align: left;

  img {
    height: 26px;
    width: 26px;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  overflow-y: scroll;
  margin-top: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    text-align: center;
    color: ${props => props.theme.colors.dimGray};
  }

  span {
    padding-left: 5px;
    color: ${props => props.theme.colors.sunset};
    font-size: 12px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 100px;

  div {
    flex-direction: row;
  }
  > span {
    color: ${props => props.theme.colors.ruby};
    font-size: 14px;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 4fr minmax(24px, 1fr);
  justify-content: space-around;
  grid-row-gap: 15px;
  align-items: center;
  text-align: left;
`;

export const ListNameGroup = styled.div`
  display: flex;
  align-items: center;

  picture {
    padding-right: 15px;
  }

  img {
    height: auto;
    width: 100%;
    max-width: 3.2rem;
  }
`;

export const ListInputGroup = styled.div`
  display: flex;
  justify-content: center;

  label {
    [type='radio'] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    img {
      width: 26px;
      height: 26px;
    }

    [type='radio'] + img {
      cursor: pointer;
    }

    [type='radio']:checked ~ img#checked {
      display: inline;
    }

    [type='radio']:checked ~ img#notchecked {
      display: none;
    }

    [type='radio']:not(:checked) ~ img#notchecked {
      display: inline;
    }

    [type='radio']:not(:checked) ~ img#checked {
      display: none;
    }
  }
`;
