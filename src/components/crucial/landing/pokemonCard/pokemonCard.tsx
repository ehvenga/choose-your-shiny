import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
} from '@builder.io/qwik';
import styles from './pokemonCard.css?inline';

export default component$(() => {
  const fetchPokemon = useResource$(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon-form/2'
    );
    return response.json();
  });

  useStylesScoped$(styles);
  return (
    <Resource
      value={fetchPokemon}
      onPending={() => <>Loading...</>}
      onResolved={(data) => <>{data.pokemon.name}</>}
    />
  );
});
