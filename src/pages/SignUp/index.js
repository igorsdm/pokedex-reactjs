import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs';
import { toast } from 'react-toastify';

import Button from '~/components/ImageButton';
import Next from '~/assets/images/next.png';
import Next2x from '~/assets/images/next@2x.png';

import {
  Container,
  Content,
  NameForm,
  PokemonForm,
  Header,
  Body,
  Footer,
  InputGroup,
} from './styles';

import {
  nameRequest,
  nameRemove,
  typeRequest,
} from '~/store/modules/user/actions';
import Modal from '~/components/ChoosePokemonModal';

export default function SignUp() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [toggleForms, setToggleForms] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [type, setType] = useState(null);
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user);

  function handleAnswerName(data) {
    dispatch(nameRequest(data.name));
  }

  function handleAnswerPokemon() {
    if (type) {
      dispatch(typeRequest(type));
    } else {
      toast.info('Please choose your pokémon before continue!');
    }
  }

  function toggleModalFunction(prop) {
    setToggleModal(prop);
  }

  useEffect(() => {
    if (name !== null) {
      setToggleForms(false);
    } else {
      setToggleForms(true);
    }
  }, [name]);

  useEffect(() => {
    reset();
  }, [toggleForms, reset]);

  return (
    <Container>
      <Content>
        <NameForm visible={toggleForms}>
          <form onSubmit={handleSubmit(handleAnswerName)} autoComplete="off">
            <Header>
              <p>Let's meet each other first? </p>
            </Header>
            <Body>
              <label>First we need to know your name...</label>
              <input
                name="name"
                type="text"
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span>
                  Please, provide your name so we can know each other!
                </span>
              )}
            </Body>
            <Footer>
              <Button type="submit">
                <picture>
                  <source
                    media="(min-height: 768px) and (min-width:606px)"
                    srcSet={Next2x}
                  />
                  <img src={Next} alt="Next" />
                </picture>
              </Button>
            </Footer>
          </form>
        </NameForm>
        <PokemonForm visible={!toggleForms}>
          <Header>
            <div>
              <Button
                type="button"
                onClick={() => {
                  dispatch(nameRemove());
                  setType(null);
                }}
              >
                <BsChevronLeft size="2.5rem" />
              </Button>
            </div>
            <p>Hello, trainer {name}!</p>
          </Header>
          <Body>
            <label>...now tell us wich is your favorite Pokémon type:</label>
            <InputGroup
              onClick={() => {
                setToggleModal(true);
              }}
            >
              <p>{type}</p>
              <BsChevronDown size="2.5rem" />
            </InputGroup>
          </Body>
          <Footer>
            <Button
              type="button"
              onClick={() => {
                handleAnswerPokemon();
              }}
            >
              <picture>
                <source
                  media="(min-height: 768px) and (min-width:606px)"
                  srcSet={Next2x}
                />
                <img src={Next} alt="Next" />
              </picture>
            </Button>
          </Footer>
        </PokemonForm>
      </Content>
      <Modal
        toggle={toggleModal}
        toggleFunction={toggleModalFunction}
        state={type}
        stateFunction={setType}
      />
    </Container>
  );
}
