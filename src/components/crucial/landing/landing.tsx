import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './landing.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main>
      <h3>Choose your favourite shiny</h3>
    </main>
  );
});
