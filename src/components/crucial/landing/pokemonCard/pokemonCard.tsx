import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
  // useStore,
  useTask$,
} from '@builder.io/qwik';
import styles from './pokemonCard.css?inline';

type itemProps = {
  id: number;
};

// type pokemonDetails = {
//   pokemon_name: string;
//   pokemon_id: number;
//   sprite_url: string;
//   is_won: boolean;
// };

export default component$<itemProps>((props) => {
  const fetchPokemon = useResource$(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon-form/' + props.id + '/'
    );
    return response.json();
  });

  // const pokemonDetailsState = useStore<pokemonDetails[]>([]);

  useTask$(async ({track}) => {
    track(await fetchPokemon);
    console.log(fetchPokemon);
    // pokemonDetailsState.push({
    //   pokemon_name: fetchPokemon.pokemon.name,
    //   pokemon_id: fetchPokemon.id,
    //   sprite_url: fetchPokemon.sprites.front_shiny,
    //   is_won: false,
    // });
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
