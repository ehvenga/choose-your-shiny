import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
  useStore,
  $,
} from '@builder.io/qwik';
import styles from './pokemonCard.css?inline';

type itemProps = {
  id: number;
};

type pokemonDetails = {
  pokemon_name: string;
  pokemon_id: number;
  sprite_url: string;
  is_won: boolean;
};

export default component$<itemProps>((props) => {
  const pokemonDetailsState = useStore<pokemonDetails[]>([]);

  const fetchPokemon = useResource$(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon-form/' + props.id + '/'
    );
    const data = await response.json();

    pokemonDetailsState.push({
      pokemon_name: data?.name,
      pokemon_id: data?.order,
      sprite_url: data?.sprites?.front_shiny,
      is_won: false,
    });

    return data;
  });

  const handleClick = $(() => {
    const updatedPokemonArray = pokemonDetailsState.map((pokemon) => {
      if (pokemon.pokemon_id === props.id) {
        return { ...pokemon, is_won: true }; // Create a new object with updated is_won value
      }
      return pokemon; // Return the original object for other IDs
    });
    console.log(
      'updatedPokemonArray',
      updatedPokemonArray,
      pokemonDetailsState
    );
  });

  useStylesScoped$(styles);
  return (
    <Resource
      value={fetchPokemon}
      onPending={() => <>Loading...</>}
      onResolved={(data) => (
        <>
          <div>
            <div>
              <img
                src={data?.sprites?.front_shiny}
                alt={data?.pokemon?.name}
                width={200}
                height={200}
                onClick$={handleClick}
              />
              <div class='card-details'>
                <p>{data?.pokemon?.name}</p>
                <p class='card-details-id'>#{data?.id}</p>
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
});
