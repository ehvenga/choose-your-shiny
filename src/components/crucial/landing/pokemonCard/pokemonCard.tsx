import {
  component$,
  useStylesScoped$,
  useResource$,
  Resource,
} from '@builder.io/qwik';
import styles from './pokemonCard.css?inline';

type itemProps = {
  id: number;
};

export default component$<itemProps>((props) => {
  const fetchPokemon = useResource$(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon-form/' + props.id + '/'
    );
    return response.json();
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
