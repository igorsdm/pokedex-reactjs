import React, { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

import ImageButton from '~/components/ImageButton';
import Button from '~/components/Button';

import NotChecked from '~/assets/images/radio-off.png';
import Checked from '~/assets/images/radio-on.png';
import Close from '~/assets/images/close.png';

import {
  Container,
  ModalCard,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Loading,
  List,
  ListNameGroup,
  ListInputGroup,
} from './styles';

import api from '~/services/api';

const useStyles = makeStyles({
  root: {
    color: '#f11e76',
  },
});

export default function Modal({
  toggle,
  toggleFunction,
  state,
  stateFunction,
}) {
  const ref = useRef();
  const [display, setDisplay] = useState(toggle);
  const [types, setTypes] = useState();
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  function handleOnCancelClick() {
    toggleFunction(false);

    if (!state) {
      stateFunction(null);
    }
  }

  function handleAnswerName(data) {
    toggleFunction(false);
    stateFunction(data.type);
  }

  useEffect(() => {
    setDisplay(toggle);
  }, [toggle]);

  useEffect(() => {
    api.get('/types').then(response => {
      const { data: rawData } = response;

      const data = rawData.map(dt => {
        const { thumbnailImage } = dt;
        const newName = dt.name.charAt(0).toUpperCase() + dt.name.slice(1);

        return { thumbnailImage, newName };
      });

      setTypes(data);
      setLoaded(true);
    });
  }, []);

  return (
    <Container ref={ref} visible={display} onClick={handleOnCancelClick}>
      <form onSubmit={handleSubmit(handleAnswerName)} autoComplete="off">
        <ModalCard
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <ModalHeader>
            <strong>Select your favorite pokémon type</strong>
            <ImageButton type="button" onClick={handleOnCancelClick}>
              <picture>
                <img src={Close} alt="Next" />
              </picture>
            </ImageButton>
          </ModalHeader>
          <ModalBody>
            {loaded ? (
              <>
                <List>
                  {types.map(type => (
                    <Fragment key={type.newName}>
                      <ListNameGroup>
                        <picture>
                          <img src={type.thumbnailImage} alt={type.newName} />
                        </picture>
                        <strong>{type.newName}</strong>
                      </ListNameGroup>
                      <ListInputGroup>
                        <label>
                          <input
                            type="radio"
                            name="type"
                            value={type.newName}
                            ref={register({ required: true })}
                          />
                          <img id="notchecked" src={NotChecked} alt="" />
                          <img id="checked" src={Checked} alt="" />
                        </label>
                      </ListInputGroup>
                    </Fragment>
                  ))}
                </List>
              </>
            ) : (
              <Loading>
                <CircularProgress className={classes.root} size="2rem" />
              </Loading>
            )}
          </ModalBody>
          <ModalFooter>
            {errors.type && (
              <span>Please, choose your favorite pokemon type!</span>
            )}
            <Button
              type="submit"
              backgroundColor="ruby"
              width="100%"
              height="3.7rem"
            >
              <span>Confirm</span>
            </Button>
          </ModalFooter>
        </ModalCard>
      </form>
    </Container>
  );
}

Modal.propTypes = {
  toggle: PropTypes.bool,
  toggleFunction: PropTypes.func.isRequired,
  state: PropTypes.string,
  stateFunction: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  toggle: false,
  state: null,
};
