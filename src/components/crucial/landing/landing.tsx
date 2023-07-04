import {
  component$,
  useStylesScoped$,
  useTask$,
  useStore,
} from '@builder.io/qwik';
import styles from './landing.css?inline';

import PokemonCard from './pokemonCard/pokemonCard';

type IdState = {
  id1: number;
  id2: number;
};

export default component$(() => {
  useStylesScoped$(styles);
  const idState: IdState = useStore({
    id1: 1,
    id2: 2,
  });

  useTask$(() => {
    const randomNumber1 = Math.floor(Math.random() * 999) + 1;
    let randomNumber2 = Math.floor(Math.random() * 999) + 1;

    // Generate two different random numbers
    while (randomNumber1 === randomNumber2) {
      randomNumber2 = Math.floor(Math.random() * 999) + 1;
    }
    idState.id1 = randomNumber1;
    idState.id2 = randomNumber2;
  });

  return (
    <main>
      <h3>Choose your favorite shiny</h3>
      <section class='cards'>
        <PokemonCard id={idState.id1} />
        <PokemonCard id={idState.id2} />
      </section>
    </main>
  );
});
