import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <h1>Welcome to the shiny contest</h1>
      <h2 class='typewriter'>
        Its time to decide who is the most popular shiny
      </h2>
    </header>
  );
});
