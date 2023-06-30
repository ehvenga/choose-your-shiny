import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './result.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main>Result</main>
  );
});