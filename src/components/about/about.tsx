import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main>About</main>
  );
});