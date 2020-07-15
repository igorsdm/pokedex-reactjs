import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IoMdSearch } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';

import {
  Container,
  Header,
  Card,
  CardHeader,
  ScrollX,
  CardBody,
  ScrollY,
  Filter,
  FilterInput,
  TypeList,
  TypeListInputGroup,
  PokemonList,
  PokemonListInputGroup,
  PokemonAlphaSorting,
  Loading,
} from './styles';

import { signOut } from '~/store/modules/user/actions';

import api from '~/services/api';
import Arrow from '~/assets/images/arrow.png';
import Arrow2x from '~/assets/images/arrow@2x.png';

const useStyles = makeStyles({
  root: {
    color: '#f11e76',
  },
});

export default function Home() {
  const dispatch = useDispatch();
  const [userFilterType, setUserFilterType] = useState(
    useSelector(state => state.user.pokemon)
  );

  const [types, setTypes] = useState();
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();

  const [nameFilter, setNameFilter] = useState('');
  const [sort, setSorting] = useState(undefined);

  const [toggleNameFilter, setToggleNameFilter] = useState(false);
  const [typesLoaded, setTypesLoaded] = useState(false);
  const [pokemonsLoaded, setPokemonsLoaded] = useState(false);
  const [loaded, setloaded] = useState(false);

  const searchRef = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    api.get('/types').then(response => {
      const { data: rawData } = response;

      const data = rawData.map(dt => {
        const { thumbnailImage } = dt;
        const newName = dt.name.charAt(0).toUpperCase() + dt.name.slice(1);

        return { thumbnailImage, newName };
      });

      setTypes(data);
      setTypesLoaded(true);
    });
  }, []);

  useEffect(() => {
    api.get('/pokemons').then(response => {
      const { data: rawData } = response;

      const data = rawData.map(dt => {
        const { thumbnailImage, name, type } = dt;

        return { thumbnailImage, name, type };
      });

      setPokemons(data);
    });
  }, []);

  useMemo(() => {
    if (pokemons !== undefined) {
      const seenNames = {};

      const filteredDuplicates = pokemons.filter(currentObject => {
        if (currentObject.name in seenNames) {
          return false;
        }
        seenNames[currentObject.name] = true;
        return true;
      });

      const filteredTypes = filteredDuplicates.filter(item => {
        if (
          item.type.indexOf(
            String(
              userFilterType.charAt(0).toLowerCase() + userFilterType.slice(1)
            )
          ) >= 0
        ) {
          return true;
        }
        return false;
      });

      const filteredName = filteredTypes.filter(pokemon =>
        pokemon.name.toLowerCase().includes(nameFilter.toLowerCase())
      );

      if (sort === true) {
        const sortedName = filteredName.sort((a, b) =>
          b.name > a.name ? -1 : 1
        );
        setFilteredPokemons(sortedName);
      } else if (sort === false) {
        const sortedName = filteredName.sort((a, b) =>
          a.name > b.name ? -1 : 1
        );
        setFilteredPokemons(sortedName);
      } else {
        setFilteredPokemons(filteredName);
      }

      setPokemonsLoaded(true);
    }
  }, [pokemons, userFilterType, nameFilter, sort]);

  useEffect(() => {
    if (typesLoaded && pokemonsLoaded) {
      setloaded(true);
    }
  }, [typesLoaded, pokemonsLoaded]);

  function handleNameFilter(e) {
    setNameFilter(e.target.value);
  }

  function useOutsideClickClose(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleNameFilter(false);
          setNameFilter('');
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClickClose(searchRef);

  return (
    <>
      {loaded ? (
        <Container>
          <Header>
            <BsSearch
              size="1.3rem"
              color="#FFF"
              onClick={() => setToggleNameFilter(true)}
            />
            <h3>Pokemon Finder</h3>
            <FaPowerOff
              size="1.3rem"
              color="#ff110e"
              onClick={() => dispatch(signOut())}
            />
            <Filter ref={searchRef} visible={toggleNameFilter}>
              <IoMdSearch
                style={{ marginLeft: '0.7rem', position: 'absolute' }}
                color="#999"
                size="1.3rem"
              />
              <FilterInput
                type="text"
                placeholder="Search"
                value={nameFilter}
                onChange={handleNameFilter}
              />
            </Filter>
          </Header>
          <Card>
            <CardHeader>
              <ScrollX>
                <TypeList>
                  {types.map(type => (
                    <TypeListInputGroup
                      key={type.newName}
                      onClick={() => setUserFilterType(type.newName)}
                    >
                      <img src={type.thumbnailImage} alt="" />
                      <strong>{type.newName}</strong>
                    </TypeListInputGroup>
                  ))}
                </TypeList>
              </ScrollX>
            </CardHeader>
            <CardBody>
              <div>
                <strong>Pokémon</strong>
                <PokemonAlphaSorting
                  sorting={sort}
                  onClick={() => {
                    if (sort === undefined) {
                      setSorting(true);
                    } else {
                      setSorting(!sort);
                    }
                  }}
                >
                  <strong>Name</strong>
                  <picture>
                    <source
                      media="(min-height: 900px) and (min-width:606px)"
                      srcSet={Arrow2x}
                    />
                    <img src={Arrow} alt="pokemon" />
                  </picture>
                </PokemonAlphaSorting>
              </div>
              <ScrollY>
                <PokemonList>
                  {filteredPokemons.map(pokemon => (
                    <PokemonListInputGroup
                      key={pokemon.name}
                      color={userFilterType.toLowerCase()}
                    >
                      <img src={pokemon.thumbnailImage} alt="" />
                      <strong>{pokemon.name}</strong>
                    </PokemonListInputGroup>
                  ))}
                </PokemonList>
              </ScrollY>
            </CardBody>
          </Card>
        </Container>
      ) : (
        <Loading>
          <CircularProgress className={classes.root} size="5rem" />
        </Loading>
      )}
    </>
  );
}
